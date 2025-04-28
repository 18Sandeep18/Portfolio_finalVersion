import { Home, User, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react'; // Added MapPin icon
import {  CodeBracketIcon } from '@heroicons/react/24/outline';
import { portfolioConfig } from '../config/portfolioConfig';
import SectionTitle from './SectionTitle';

function ContactSection() {
    // Helper function to format phone number for tel: link
    const formatPhoneNumber = (phone) => phone ? phone.replace(/\s+/g, '') : '';
  
    return (
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100
                                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-black dark:text-white px-4 sm:px-6 lg:px-8 scroll-mt-16 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <SectionTitle title="Get In Touch" icon={Mail} />
          {/* Introductory text */}
          <p className="text-lg text-black dark:text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently seeking opportunities for Software Engineer roles (Internship/Full-time). Feel free to reach out if you have any questions, opportunities, or just want to connect!
            {/* Customize this message */}
          </p>
  
          {/* Glassmorphic Card */}
          <div className="bg-white/10 dark:bg-gray-700/50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 md:p-10 max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {/* Email */}
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${portfolioConfig.contact.email}`}
                  className="hover:text-white dark:hover:text-white transition duration-300 text-lg break-all"
                >
                  {portfolioConfig.contact.email}
                </a>
              </div>
  
              {/* Phone (conditional) */}
              {portfolioConfig.contact.phone && (
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${formatPhoneNumber(portfolioConfig.contact.phone)}`}
                    className="hover:text-white dark:hover:text-white transition duration-300 text-lg"
                  >
                    {portfolioConfig.contact.phone}
                  </a>
                </div>
              )}
  
              {/* LinkedIn (conditional) */}
              {portfolioConfig.contact.linkedin && (
                <div className="flex items-center">
                  <Linkedin className="h-6 w-6 mr-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={portfolioConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white dark:hover:text-white transition duration-300 text-lg underline hover:no-underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
  
              {/* GitHub (conditional) */}
              {portfolioConfig.contact.github && (
                <div className="flex items-center">
                  <Github className="h-6 w-6 mr-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={portfolioConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white dark:hover:text-white transition duration-300 text-lg underline hover:no-underline"
                  >
                    GitHub Profile
                  </a>
                </div>
              )}
  
              {/* Location (conditional) */}
              {portfolioConfig.contact.location && (
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-indigo-400 dark:text-indigo-300 flex-shrink-0" aria-hidden="true" />
                  <span className="text-lg text-black dark:text-white">{portfolioConfig.contact.location}</span>
                </div>
              )}
            </div>
          </div>
  
          {/* Optional Contact Form Placeholder (moved outside the glassmorphic card for better separation) */}
          {/* <div className="mt-12 p-8 bg-gray-700 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-md bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
            </form>
          </div> */}
        </div>
      </section>
    );
  }



export default ContactSection;
