import { portfolioConfig } from '../config/portfolioConfig';
import SectionTitle from './SectionTitle';
import { User,Award, GraduationCap, ExternalLink, Code } from 'lucide-react';
import {  CodeBracketIcon } from '@heroicons/react/24/outline';
function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100
                                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 dark:via bg-gray-1000 dark:to bg-gray- text-gray-800 dark:text-gray-200 px-4 sm:px-6 lg:px-8 scroll-mt-16 transition-colors duration-300"> {/* scroll-mt accounts for sticky nav, added dark mode bg/text */}
            <div className="container mx-auto max-w-6xl"> {/* Increased max-w */}
                <SectionTitle title="About Me" icon={User} />

                {/* Full Summary Card - Enhanced */}
                <div className="mb-12 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition duration-300 hover:translate-y-1"> {/* Increased padding, shadow, added transform on hover */}
                   <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-6 border-b border-indigo-200  pb-3">Summary</h3> {/* Stronger heading, border */}
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-lg">{portfolioConfig.about.summary}</p> {/* Increased text size, added dark mode text color */}
                </div>

                {/* Grid for Skills, Education */}
                {/* Increased gap, added dark mode backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Changed to 2 columns on medium screens */}
                    {/* Skills Card - Enhanced */}
                    <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition duration-300 hover:translate-y-1"> {/* Increased padding, shadow, added transform on hover */}
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-6 flex items-center border-b border-indigo-200  pb-3"> {/* Stronger heading, border */}
                             <Award className="mr-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true"/> Skills {/* Increased icon size/margin, added dark mode icon color */}
                        </h3>
                        {/* Render skills as tags - Enhanced */}
                        <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                            {portfolioConfig.about.skills.map((skill, index) => (
                                <span key={index} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-semibold px-4 py-2 rounded-full shadow-md transition duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 cursor-default"> {/* Stronger tag style, shadow, hover effect */}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education Card - Enhanced */}
                    <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition duration-300 hover:translate-y-1"> {/* Increased padding, shadow, added transform on hover */}
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-6 flex items-center border-b border-indigo-200  pb-3"> {/* Stronger heading, border */}
                            <GraduationCap className="mr-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true"/> Education {/* Increased icon size/margin, added dark mode icon color */}
                        </h3>
                        {/* List education items - Enhanced */}
                        <ul className="space-y-6"> {/* Increased space */}
                            {portfolioConfig.about.education.map((edu, index) => (
                                // Added border, padding, subtle animation on hover
                                <li key={index} className="border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 py-2 bg-gray-50 dark:bg-gray-600 rounded-r-md transition duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{edu.degree}</p> {/* Stronger text, increased size */}
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1"> {/* Added margin-top */}
                                        {edu.period} {edu.details && <span className="ml-2 px-2 py-0.5 bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium">{edu.details}</span>} {/* Styled details as a tag */}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                


                {/* Certifications Card (only shown if certifications exist) - Enhanced */}
                {portfolioConfig.about.certifications && portfolioConfig.about.certifications.length > 0 && (
                   <div className="mt-12 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition duration-300 hover:translate-y-1"> {/* Increased margin-top, padding, shadow, transform */}
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-6 flex items-center border-b border-indigo-200  pb-3"> {/* Stronger heading, border */}
                           <Award className="mr-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true"/> Certifications {/* Increased icon size/margin, added dark mode icon color */}
                       </h3>
                       <ul className="space-y-4"> {/* Increased space */}
                           {portfolioConfig.about.certifications.map((cert, index) => (
                               <li key={index} className="text-gray-600 dark:text-gray-300 text-base flex items-center"> {/* Added text-base, flex items-center */}
                                   <span className="font-medium text-gray-800 dark:text-gray-100 mr-2">{cert.name}</span> {/* Stronger name text */}
                                   {/* Display link if it exists and is not just '#' */}
                                   {cert.link && cert.link !== "#" && (
                                       <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                          className="ml-3 text-black dark:text-green-300 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm inline-flex items-center underline hover:no-underline transition duration-300"> {/* Styled link */}
                                           [View <ExternalLink className="h-3 w-3 ml-1" aria-label="External Link"/>]
                                       </a>
                                   )}
                               </li>
                           ))}
                       </ul>
                   </div>
                )}
                {portfolioConfig.about.codingProfiles && portfolioConfig.about.codingProfiles.length > 0 && (
                    <div className="mt-12 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition duration-300 hover:translate-y-1">
                         <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-6 flex items-center border-b border-indigo-200  pb-3">
                            {/* Using CodeBracketIcon - replace if using a different icon library */}
                            <CodeBracketIcon className="mr-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true"/> Coding Profiles
                         </h3>
                        <ul className="space-y-4">
                            {portfolioConfig.about.codingProfiles.map((profile, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-300 text-base flex items-center flex-wrap"> {/* Added flex-wrap for smaller screens */}
                                    {/* Highlight Profile Name */}
                                    <span className="font-medium text-gray-800 dark:text-gray-100 mr-3">{profile.name}</span>

                                    {/* Display details if available */}
                                    {profile.details && (
                                        <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 rounded-full text-xs font-medium mr-3">
                                            {profile.details}
                                        </span>
                                    )}

                                    {/* Display link if it exists and is not just '#' */}
                                    {profile.link && profile.link !== "#" && (
                                        <a href={profile.link} target="_blank" rel="noopener noreferrer"
                                           className="text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm inline-flex items-center underline hover:no-underline transition duration-300 mt-1 md:mt-0"> {/* Added margin top for wrap */}
                                            [Visit Profile <ExternalLink className="h-3 w-3 ml-1" aria-label="External Link"/>]
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}


export default AboutSection;
