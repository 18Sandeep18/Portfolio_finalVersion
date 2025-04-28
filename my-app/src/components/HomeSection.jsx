import { portfolioConfig } from '../config/portfolioConfig';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileimg  from '../assets/PhotoID.jpg'
function HomeSection() {
    return (
        // Using min-h-[calc(100vh-4rem)] ensures the section tries to fill the viewport height minus the navbar height
        // Added subtle pattern, darker shades for dark mode
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center
                                       bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100
                                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
                                       text-black dark:text-white text-center p-8 pt-16 md:pt-8
                                       relative overflow-hidden"> {/* Added relative, overflow-hidden */}
            {/* Optional: Add a subtle background pattern/overlay */}
            <div className="absolute inset-0 bg-pattern opacity-10 dark:opacity-5"></div> {/* Placeholder for a pattern class */}

            <div className="relative z-10 max-w-4xl px-4"> {/* Added px-4, increased max-w */}
                <img
                    src={profileimg} // Placeholder - REPLACE THIS
                    alt={`Photo of ${portfolioConfig.name}`} // Descriptive alt text
                    className="w-36 h-40 md:w-44 md:h-44 rounded-full mx-auto mb-6
                               border-4 border-white dark:border-gray-700
                               shadow-xl object-cover ring-2 ring-indigo-300
                               transform transition duration-500 hover:scale-105" // Enhanced styling: border, shadow, ring, transform on hover
                    // Basic image error fallback
                    onError={(e) => {
                        e.target.onerror = null; // Prevents infinite loop if fallback also fails
                        e.target.src='https://placehold.co/180x180/cccccc/333333?text=Error'; // Fallback image
                        e.target.alt = 'Error loading profile image'; // Update alt text on error
                    }}
                />
                {/* Name */}
                <h1 className="text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight"> {/* Increased size, font weight, shadow, tracking */}
                    {portfolioConfig.name}
                </h1>
                {/* Title */}
                <p className="text-lg md:text-2xl mb-8 font-light italic opacity-90 drop-shadow-sm"> {/* Increased size, added italic, opacity */}
                    {portfolioConfig.title}
                </p>
                {/* Short summary from config */}
                <p className="text-base md:text-lg font-normal max-w-xl mx-auto leading-relaxed opacity-95"> {/* Increased size, opacity, leading */}
                    {portfolioConfig.about.summary} {/* Display full summary here, Home is a good place */}
                </p>
                {/* Optional: Add a call-to-action button to view projects */}
                {/*
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} // Example scroll action
                  className="mt-10 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg
                             hover:bg-gray-100 transform transition duration-300 hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" // Enhanced button style
                >
                  Explore My Work
                </button>
                */}
                {/* Optional: Add social links below title */}
                 <div className="mt-8 flex justify-center space-x-6">
                     {portfolioConfig.contact.linkedin && (
                        <a href={portfolioConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                           className="text-black dark:text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110">
                           <Linkedin size={30} />
                        </a>
                     )}
                      {portfolioConfig.contact.github && (
                         <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                            className="text-black dark:text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110">
                            <Github size={30} />
                         </a>
                      )}
                       {portfolioConfig.contact.email && (
                          <a href={`mailto:${portfolioConfig.contact.email}`} aria-label="Email"
                             className="text-black dark:text-white hover:text-indigo-200 transition duration-300 transform hover:scale-110">
                             <Mail size={30} />
                          </a>
                       )}
                 </div>
            </div>
        </section>
    );
}


export default HomeSection;
