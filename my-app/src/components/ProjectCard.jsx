import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project }) {
    return (
        // Added group class for hover effects, increased shadow, transform
        <div className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden
                        transform transition duration-500 hover:scale-105 hover:shadow-2xl
                        flex flex-col border border-gray-200 dark:border-gray-600"> {/* Added border */}
            {/* Project Image - Enhanced */}
            <div className="overflow-hidden"> {/* Container to handle image scaling */}
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`} // Descriptive alt text
                    className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110" // Increased height, added scale on group hover
                    // Basic image error fallback
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loops
                        e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; // Fallback image
                        e.target.alt = `Error loading image for ${project.title}`; // Update alt text on error
                    }}
                />
            </div>
            {/* Project Details - Enhanced */}
            <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3> {/* Stronger title, increased margin */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p> {/* Added dark mode text, leading, flex-grow */}
                {/* Technologies Used - Enhanced */}
                <div className="mb-5"> {/* Increased margin */}
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Technologies:</h4> {/* Stronger heading */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span key={index} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full"> {/* Styled tech tags */}
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Project Links (View & GitHub) - Enhanced */}
                <div className="mt-auto flex justify-center space-x-4"> {/* Centered, spaced links */}
                    {project.link && project.link !== "#" && (
                        <a
                            href={project.link}
                            target="_blank" // Open in new tab
                            rel="noopener noreferrer" // Security best practice
                            className="inline-block text-center bg-indigo-600 text-white text-sm font-semibold px-6 py-3 rounded-lg
                                       hover:bg-indigo-700 transition duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Styled button, added transform, focus
                        >
                            View Project
                            <ExternalLink className="inline-block ml-2 h-4 w-4" aria-label="External Link" /> {/* Increased ml */}
                        </a>
                    )}
                    {project.github && project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-center bg-gray-700 dark:bg-gray-800 text-white text-sm font-semibold px-6 py-3 rounded-lg
                                       hover:bg-gray-800 dark:hover:bg-gray-900 transition duration-300 transform hover:scale-105
                                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            GitHub
                            <Github className="inline-block ml-2 h-4 w-4" aria-label="GitHub Link" />
                        </a>
                    )}
                    {(!project.link || project.link === "#") && (!project.github || project.github === "#") && (
                        // Show if neither link is available - Enhanced
                        <span className="text-center text-gray-400 dark:text-gray-500 text-sm italic px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg">
                            (Links not available)
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
