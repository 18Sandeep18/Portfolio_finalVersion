import React, { useState, useEffect } from 'react'; // Import useEffect
import { Home, User, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react'; // Added MapPin icon
import {  CodeBracketIcon } from '@heroicons/react/24/outline';
import img1 from './assets/p1.webp';

import img2 from './assets/Roll.jpg';
import img3 from './assets/Car.jpg';
import img4 from './assets/Product.png';
import img5 from './assets/chatbot.avif';
import img6 from './assets/Fetus.jpg';
import profileimg from './assets/PhotoID.jpg'
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { portfolioConfig } from './config/portfolioConfig';
// --- Configuration ---

// Replace placeholder data with your actual information


// --- Helper Components ---

// Section Title Component - Reusable component for consistent headings with more style


// --- Layout Components ---

// Navigation Bar Component

// Home Section Component - Enhanced Styling


// About Section Component - Enhanced Styling

// Project Card Component - Reusable card for displaying each project - Enhanced

// Projects Section Component - Enhanced Styling


// Contact Section Component - Enhanced Styling

// Footer Component - Enhanced Styling


// Main App Component - Root component that manages state and renders sections
function App() {
    // State to manage the currently visible section ('home', 'about', 'projects', 'contact')
    const [currentView, setCurrentView] = useState('home'); // Default view is 'home'

    // Function to render the correct section component based on the currentView state
    const renderSection = () => {
        switch (currentView) {
            case 'home':
                return <HomeSection />;
            case 'about':
                return <AboutSection />;
            case 'projects':
                return <ProjectsSection />;
            case 'contact':
                return <ContactSection />;
            default:
                // Fallback to home section if state is somehow invalid
                return <HomeSection />;
        }
    };

    // Effect to handle potential hash changes in URL (optional, for direct linking)
    // This ensures clicking a #link or loading with a hash works
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            // Check if the hash corresponds to a valid section ID
            if (['home', 'about', 'projects', 'contact'].includes(hash)) {
                setCurrentView(hash);
            } else if (hash === '') {
                 // If hash is empty (e.g., initial load without hash), default to home
                 setCurrentView('home');
            }
             // If hash is invalid and not empty, state remains unchanged or falls back to default in renderSection
        };

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        // Initial check in case the page loads with a hash
        handleHashChange();

        // Cleanup listener on component unmount
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []); // Empty dependency array ensures this runs only once on mount


    // Effect to update URL hash when view changes via button clicks
    // This provides browser history support for button clicks
    useEffect(() => {
         // Check if the current URL hash already matches the view
        if (window.location.hash !== `#${currentView}`) {
             // Update hash without causing a page reload, preserving history state
             // Using pushState is better than setting window.location.hash directly
             window.history.pushState(null, '', `#${currentView}`);
        }

        // Scroll to the top of the section smoothly
        const sectionElement = document.getElementById(currentView);
        if (sectionElement) {
            // Scroll with smooth behavior, block: 'start' aligns the top of the element to the top of the viewport
            // This accounts for the sticky navbar
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }, [currentView]); // Run this effect when currentView changes


    return (
        // Base container for the entire application
        // Added dark mode background, scroll-smooth
        <div className="font-sans antialiased text-gray-900 dark:text-gray-100 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100
                                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 min-h-screen scroll-smooth">
            {/* Render the Navbar, passing the current view state and the function to update it */}
            <Navbar currentView={currentView} setView={setCurrentView} />

            {/* Render the main content area */}
            {/* Added padding-bottom for mobile nav visibility, main section ID */}
            <main id="main-content" className="pt-0 pb-16 md:pb-0 min-h-[calc(100vh-4rem)]"> {/* Ensure main area takes up at least viewport height minus nav */}
                {/* Call the function that returns the component for the currently active section */}
                {renderSection()}
            </main>

            {/* Render the Footer */}
            <Footer />
        </div>
    );
}

export default App; // Export the main App component for use in index.js or main.jsx