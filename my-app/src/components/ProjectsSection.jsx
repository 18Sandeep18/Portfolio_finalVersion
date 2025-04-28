import { portfolioConfig } from '../config/portfolioConfig';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { Briefcase } from 'lucide-react';

function ProjectsSection() {
    return (
        <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100
                                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 scroll-mt-16 transition-colors duration-300"> {/* scroll-mt accounts for sticky nav, added dark mode bg/text */}
            <div className="container mx-auto max-w-7xl"> {/* Increased max-w */}
                <SectionTitle title="Projects" icon={Briefcase} />
                {/* Responsive Grid for Project Cards - Enhanced gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"> {/* Increased gap */}
                    {/* Map through projects in config and render a card for each */}
                    {portfolioConfig.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                    {/* Message if no projects are listed - Enhanced styling */}
                       {(!portfolioConfig.projects || portfolioConfig.projects.length === 0) && (
                            <p className="text-gray-500 dark:text-gray-400 md:col-span-2 lg:col-span-3 text-center italic">No projects listed yet. Add projects to the `portfolioConfig` object.</p>
                       )}
                </div>
            </div>
        </section>
    );
}


export default ProjectsSection;
