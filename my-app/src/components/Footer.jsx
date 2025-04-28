import { portfolioConfig } from '../config/portfolioConfig';
import { Github, Linkedin, Mail } from 'lucide-react';
function Footer() {
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    return (
        // Added dark mode bg/text, padding, subtle border top
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 text-center lg:py-2 px-4 sm:px-6  lg:px-8 text-sm border-t border-gray-700 dark:border-gray-800">
            <div className="container mx-auto">
                {/* Copyright notice - Enhanced */}
                 &copy; {currentYear} <span className="font-semibold text-gray-300 dark:text-gray-400">{portfolioConfig.name}</span>. All rights reserved.
                {/* Optional: Add links to social profiles in footer */}
                <div className="mt-4 space-x-6 flex justify-center">
                    {portfolioConfig.contact.github && (
                         <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition duration-300">
                            <Github size={20} />
                         </a>
                     )}
                     {portfolioConfig.contact.linkedin && (
                         <a href={portfolioConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition duration-300">
                           <Linkedin size={20} />
                        </a>
                     )}
                      {portfolioConfig.contact.email && (
                           <a href={`mailto:${portfolioConfig.contact.email}`} aria-label="Email" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition duration-300">
                              <Mail size={20} />
                           </a>
                       )}
                 </div>
            </div>
        </footer>
    )
}


export default Footer;
