const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken'));
    const [isAuthenticated, setIsAuthenticated] = useState(() => !!authToken);
    const [isLoading, setIsLoading] = useState(true); // Loading state for initial auth check/task fetch
    const [tasksLoading, setTasksLoading] = useState(false); // Specific loading for task operations
    const [tasksError, setTasksError] = useState(null); // Error state for task fetching

    const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
    const [taskToEstimate, setTaskToEstimate] = useState(null);
    const [activePomodoroTaskId, setActivePomodoroTaskId] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const confettiTimerRef = useRef(null);
    const [isDoneOptionsModalOpen, setIsDoneOptionsModalOpen] = useState(false);
    const [taskForDoneOptions, setTaskForDoneOptions] = useState(null);

    // --- Authentication ---
    const handleLoginSuccess = useCallback((token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
        setIsAuthenticated(true);
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        setIsAuthenticated(false);
        setTasks([]); // Clear tasks on logout
        setActivePomodoroTaskId(null); // Clear active pomodoro task
        // Optionally redirect using useNavigate() if called from within a component
    }, []);

    // --- API Call Helper ---
    const apiRequest = useCallback(async (endpoint, method = 'GET', body = null) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        const currentToken = localStorage.getItem('authToken'); // Get fresh token
        if (currentToken) {
            headers['Authorization'] = `Bearer ${currentToken}`;
        }

        const config = {
            method,
            headers,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

            // Auto-logout on 401 Unauthorized
            if (response.status === 401 && isAuthenticated) {
                 console.error("API Request Unauthorized (401). Logging out.");
                 handleLogout();
                 // Throw an error to stop further processing in the calling function
                 throw new Error('Unauthorized');
            }

             // Check if response is JSON before parsing
             const contentType = response.headers.get("content-type");
             let data;
             if (contentType && contentType.indexOf("application/json") !== -1) {
                 data = await response.json();
             } else {
                 // Handle non-JSON responses if necessary (e.g., simple text)
                 // For now, assume successful non-JSON (like DELETE returning no body) is okay
                 data = { success: response.ok, status: response.status };
             }


            if (!response.ok) {
                throw new Error(data.message || `API Error: ${response.status}`);
            }
            return data; // Contains { success: true, ... } or throws error
        } catch (error) {
            console.error(`API request failed: ${method} ${endpoint}`, error);
            // Don't automatically logout for network errors, only for 401
            if (error.message === 'Unauthorized') {
                // Already handled logout, re-throw for clarity if needed or return null
                throw error; // Re-throw the specific Unauthorized error
            }
            // Throw other errors to be caught by the calling function
            throw error;
        }
    }, [isAuthenticated, handleLogout]); // Include isAuthenticated and handleLogout


    // --- Task Fetching ---
    const fetchTasks = useCallback(async () => {
        if (!isAuthenticated) return; // Don't fetch if not logged in
        setTasksLoading(true);
        setTasksError(null);
        console.log("Fetching tasks...");
        try {
            const data = await apiRequest('/api/tasks');
            if (data.success) {
                // Map backend IDs (_id) to frontend IDs (id) if necessary
                // Assuming backend sends tasks with _id field
                const formattedTasks = data.data.map(task => ({
                    ...task,
                    id: task._id // Map _id to id
                }));
                setTasks(formattedTasks);
            } else {
                 // Error handled by apiRequest throwing
            }
        } catch (error) {
             console.error("Error fetching tasks:", error);
             // Avoid setting generic error if it was an Unauthorized error (already logged out)
             if (error.message !== 'Unauthorized') {
                 setTasksError("Failed to load tasks. Please try again later.");
             }
        } finally {
            setTasksLoading(false);
            setIsLoading(false); // Also set main loading false after first task fetch attempt
        }
    }, [isAuthenticated, apiRequest]); // Dependencies: only fetch when auth status changes


    // Initial load: Fetch tasks if authenticated
    useEffect(() => {
        if (isAuthenticated) {
            fetchTasks();
        } else {
            setIsLoading(false); // Not authenticated, stop loading
        }
    }, [isAuthenticated, fetchTasks]); // Run when auth status changes


    // --- Task Management Functions ---

    const addTask = useCallback(async (title, description) => {
        setTasksLoading(true);
        try {
             // Status defaults to 'todo' on backend, no estimate/timeSpent needed initially
            const newTaskData = { title, description };
            const data = await apiRequest('/api/tasks', 'POST', newTaskData);
            if (data.success) {
                const newTask = { ...data.data, id: data.data._id }; // Map _id
                setTasks(prevTasks => [...prevTasks, newTask]);
            }
            // Error handled by apiRequest
        } catch (error) {
            console.error("Failed to add task:", error);
            // Display error to user?
        } finally {
            setTasksLoading(false);
        }
    }, [apiRequest]);

    const updateTask = useCallback(async (taskId, updates) => {
        // No loading state change here, usually happens quickly
        try {
            const data = await apiRequest(`/api/tasks/${taskId}`, 'PUT', updates);
            if (data.success) {
                const updatedTask = { ...data.data, id: data.data._id }; // Map _id
                setTasks(prevTasks =>
                    prevTasks.map(task =>
                        task.id === taskId ? updatedTask : task
                    )
                );
                return updatedTask; // Return updated task for immediate use if needed
            }
            // Error handled by apiRequest
        } catch (error) {
            console.error(`Failed to update task ${taskId}:`, error);
            // Revert state or show error? For now, just log.
        }
        return null; // Indicate update failure
    }, [apiRequest]);


    const moveTask = useCallback(async (taskId, sourceColumnId, destinationColumnId) => {
        const task = tasks.find(t => t.id === taskId);
        if (!task) return;

        let newStatus;
        if (destinationColumnId === 'todo') newStatus = 'todo';
        else if (destinationColumnId === 'inProgress') newStatus = 'inProgress';
        else if (destinationColumnId === 'done') newStatus = 'done';
        else return; // Invalid destination

        // Optimistic UI Update
        const originalTasks = tasks;
        setTasks(prevTasks =>
            prevTasks.map(t =>
                t.id === taskId ? { ...t, status: newStatus } : t
            )
        );

        // Trigger confetti immediately if moving to 'done'
        if (newStatus === 'done') {
            triggerConfetti();
        }

        // Update backend
        const updatedTask = await updateTask(taskId, { status: newStatus });

        if (!updatedTask) {
             // Revert UI if backend update failed
             console.error("Move task failed, reverting UI.");
             setTasks(originalTasks);
        } else {
            // If moving to 'In Progress' without estimate, prompt
            if (updatedTask.status === 'inProgress' && updatedTask.estimatedTime === 0) {
                setTaskToEstimate(updatedTask);
                setIsEstimateModalOpen(true);
            }
        }
    }, [tasks, updateTask, triggerConfetti]); // Added triggerConfetti dependency


     const setTaskEstimate = useCallback(async (taskId, estimatedSeconds) => {
        await updateTask(taskId, { estimatedTime: estimatedSeconds });
        // If setting estimate makes it the active task? Handled by useEffect below
        // Close modal
        setIsEstimateModalOpen(false);
        setTaskToEstimate(null);
    }, [updateTask]);

     const updateTaskTimeSpent = useCallback(async (taskId, secondsToAdd) => {
         const task = tasks.find(t => t.id === taskId);
         if (!task) return;

         const newTimeSpent = (task.timeSpent || 0) + secondsToAdd;
         // Cap time spent at estimated time if estimate exists
         const cappedTimeSpent = (task.estimatedTime > 0)
             ? Math.min(newTimeSpent, task.estimatedTime)
             : newTimeSpent;

         // Avoid unnecessary backend calls if time hasn't changed (or is capped)
         if (cappedTimeSpent !== task.timeSpent) {
              // Optimistic UI update for responsiveness
              setTasks(prevTasks =>
                  prevTasks.map(t =>
                      t.id === taskId ? { ...t, timeSpent: cappedTimeSpent } : t
                  )
              );
              // Update backend (debouncing could be added here for high frequency updates)
              await updateTask(taskId, { timeSpent: cappedTimeSpent });
              // Note: No revert logic here for simplicity, assumes backend update usually succeeds.
         }

    }, [tasks, updateTask]);


    const deleteTask = useCallback(async (taskId) => {
        // Optimistic UI update
        const originalTasks = tasks;
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

        try {
            await apiRequest(`/api/tasks/${taskId}`, 'DELETE');
             // If this task was the active pomodoro task, clear it
             if (activePomodoroTaskId === taskId) {
                setActivePomodoroTaskId(null);
            }
        } catch (error) {
             console.error(`Failed to delete task ${taskId}:`, error);
             // Revert UI if backend delete failed
             setTasks(originalTasks);
        }
    }, [apiRequest, activePomodoroTaskId]); // Added activePomodoroTaskId dependency


    // --- Pomodoro ---
    const setActivePomodoroTask = useCallback((taskId) => {
        const task = tasks.find(t => t.id === taskId);
        if (task && task.status === 'inProgress') {
            setActivePomodoroTaskId(taskId);
        } else if (!taskId) {
             setActivePomodoroTaskId(null); // Allow deselecting
        }
         else {
            console.warn("Cannot set non-'In Progress' task as active for Pomodoro or task not found.");
             // setActivePomodoroTaskId(null); // Optionally deselect if invalid task clicked
        }
    }, [tasks]);


    // Auto-select/deselect Pomodoro task based on task status changes or if current selection is invalid
    useEffect(() => {
        const activeTask = tasks.find(t => t.id === activePomodoroTaskId);

        // If an active task exists but is no longer 'inProgress' or doesn't exist, deselect it
        if (activePomodoroTaskId && (!activeTask || activeTask.status !== 'inProgress')) {
            setActivePomodoroTaskId(null);
        }
        // Optional: If no task is active, try to find the first 'inProgress' task and select it
        // else if (!activePomodoroTaskId) {
        //     const firstInProgress = tasks.find(t => t.status === 'inProgress');
        //     if (firstInProgress) {
        //         setActivePomodoroTaskId(firstInProgress.id);
        //     }
        // }
    }, [tasks, activePomodoroTaskId]);


    // --- Confetti ---
    const triggerConfetti = useCallback(() => {
        if (confettiTimerRef.current) {
            clearTimeout(confettiTimerRef.current);
        }
        setShowConfetti(true);
        confettiTimerRef.current = setTimeout(() => {
            setShowConfetti(false);
            confettiTimerRef.current = null;
        }, 5000); // Duration: 5 seconds
    }, []);

    // Cleanup confetti timer on unmount
      useEffect(() => {
        return () => {
            if (confettiTimerRef.current) {
                clearTimeout(confettiTimerRef.current);
            }
        };
    }, []);


    // --- Done Task Modal ---
     const openDoneOptionsModal = useCallback((task) => {
        setTaskForDoneOptions(task);
        setIsDoneOptionsModalOpen(true);
    }, []);

    const closeDoneOptionsModal = useCallback(() => {
        setIsDoneOptionsModalOpen(false);
        // Delay clearing task to avoid modal content disappearing during close animation
        setTimeout(() => setTaskForDoneOptions(null), 300);
    }, []);


    // --- Context Value ---
    const contextValue = {
        // State
        tasks,
        isAuthenticated,
        authToken,
        isLoading, // For initial load indicator
        tasksLoading, // For task specific operations
        tasksError, // For displaying task fetch errors
        activePomodoroTaskId,
        showConfetti,
        isEstimateModalOpen,
        taskToEstimate,
        isDoneOptionsModalOpen,
        taskForDoneOptions,

        // Setters & Handlers
        setIsAuthenticated, // Raw setter might be needed? Prefer auth handlers.
        setAuthToken,     // Raw setter might be needed?
        handleLoginSuccess,
        handleLogout,
        fetchTasks, // Expose fetchTasks if manual refresh is needed
        addTask,
        moveTask,
        setTaskEstimate,
        updateTaskTimeSpent,
        setActivePomodoroTask,
        triggerConfetti,
        deleteTask,
        openDoneOptionsModal,
        closeDoneOptionsModal,
        setIsEstimateModalOpen, // Need to expose setter for modal closing
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

