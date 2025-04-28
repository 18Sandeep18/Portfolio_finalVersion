import { Home, User, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react'; // Added MapPin icon
import {  CodeBracketIcon } from '@heroicons/react/24/outline';
import { portfolioConfig } from '../config/portfolioConfig';
import React, { useState } from 'react'; // Import useEffect
function Navbar({ currentView, setView }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User }, // Shortened 'About Me'
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    // Added state for mobile menu open/close (though not fully implemented UI)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Placeholder state

    return (
        <nav className="bg-gray-800 dark:bg-gray-800 text-white sticky top-0 z-50 shadow-xl transition-colors duration-300"> {/* Added dark mode bg, increased shadow, transition */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <span
                            className="font-bold text-xl text-indigo-300 dark:text-white cursor-pointer hover:text-white transition duration-300" // Added hover effect, color
                            onClick={() => setView('home')}
                        >
                            {portfolioConfig.name}
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6"> {/* Increased space */}
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setView(item.id)}
                                    className={`
                                        flex items-center px-3 py-2 rounded-md text-sm font-medium
                                        transition-colors duration-300 ease-in-out
                                        ${currentView === item.id
                                            ? 'bg-gray-900 dark:bg-gray-700 text-indigo-400 dark:text-indigo-300' // Active state with stronger color
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white' // Inactive state
                                        }
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                                    `} // Added focus states
                                    aria-current={currentView === item.id ? 'page' : undefined} // Accessibility
                                >
                                    <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button placeholder (can be implemented later) */}
                    {/* <div className="-mr-2 flex md:hidden"> ... </div> */}
                </div>
            </div>

            {/* Mobile Navigation (Bottom Bar) - Enhanced */}
            {/* Added explicit height to prevent content jump */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 dark:border-gray-700 md:hidden z-50 h-16 shadow-xl">
                <div className="flex justify-around items-center h-full"> {/* Used h-full */}
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setView(item.id)}
                            className={`
                                flex flex-col items-center justify-center flex-1 px-2 py-1 text-xs font-medium
                                transition-colors duration-200 ease-in-out
                                ${currentView === item.id
                                    ? 'text-indigo-400 dark:text-indigo-300 border-t-2 border-indigo-400 dark:border-indigo-300 -mt-px pt-px' // Active: strong color, top border
                                    : 'text-gray-400 hover:text-white dark:hover:text-white' // Inactive
                                }
                                focus:outline-none
                            `} // Removed py-2 to compensate for border-t
                            aria-current={currentView === item.id ? 'page' : undefined} // Accessibility
                        >
                            <item.icon className="h-5 w-5 mb-0.5" aria-hidden="true" /> {/* Reduced margin-bottom */}
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
