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
// --- Configuration ---

// Replace placeholder data with your actual information
const portfolioConfig = {
    name: "TADI SANDEEP RISHI", // Your Full Name
    title: "AI System Engineer | B.Tech Graduate -25", // Your Title/Tagline
    contact: {
        email: "risisandeep8@example.com",
        phone: "+91 9182272474", // Optional: Add your phone number (format can include spaces)
        linkedin: "https://www.linkedin.com/in/sandeeprishi/", // Replace with your LinkedIn profile URL (remove markdown links)
        github: "https://github.com/18Sandeep18", // Replace with your GitHub profile URL (remove markdown links)
        location: "Bhimavaram, Andhra Pradesh, India" // Update if needed
    },
    about: {
        summary: "Highly motivated and enthusiastic B.Tech final year student specializing in Computer Science. Eager to leverage academic knowledge and practical skills in a challenging software development role. Passionate about creating efficient, scalable, and user-friendly applications. Seeking opportunities to contribute to innovative projects and grow professionally.",
        skills: [
            "JavaScript (React, Node.js)", "Python (Django/Flask)", "Java", "C++",
            "HTML5", "CSS3", "Tailwind CSS", "SQL", "NoSQL (MongoDB)",
            "Git & GitHub", "Docker", "RESTful APIs", "Agile Methodologies"
            // Add or remove skills as relevant
        ],
        education: [
            {
                degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
                institution: "Vellore Institute of Technology",
                period: "2021 - 2025 ",
                details: "CGPA: 8.76/10" // Update with your CGPA/Score
            },
            {
                degree: "Intermediate / Class 12th",
                institution: "Jawahar Navodaya Vidyalaya",
                period: "2019-2020", // e.g., "2020 - 2021"
                details: "Percentage: 90.5%" // Update with your score
            }
            // Add more education history if needed
        ],
        certifications: [
            // Example with a real link
            { name: "AWS Certified Solution Architect", issuer: "Amazon Web Services (AWS)", link: "https://drive.google.com/file/d/1f7N6zsiKNU2W7BsAx0j3K2MHBDLp0pTL/view?usp=sharing" },
            { name: "SmartBridge -AIML powered by Google", issuer: "Google", link: "https://drive.google.com/file/d/1aISytFJpM2m4fWJlE1Wa42kK4-EXdyBF/view?usp=sharing" }, // Use null if no link
            { name: "IntrainTech", issuer: "SkillCepha,", link: 'https://drive.google.com/file/d/1tsapIgLgS5lFE3xd_S46Un93jtSfXPK2/view?usp=sharing' }, // Use null if no link
            // Add more certifications
        ],
        codingProfiles: [
          {
             name: "LeetCode",
             link: "https://leetcode.com/u/Sandeep-6-0/", // !! IMPORTANT: Replace with your actual LeetCode URL
             details: "400+ problems solved" // Your highlight detail
     },
     // Add other profiles if you have them (e.g., Codeforces, platforms for specific languages etc.)
     ],
    },
  
    projects: [
        {
            title: "Fetal Health Detection Using AI",
            description: 'Fetal health detection project using machine learning models trained on cardiotocography (CTG) data. It features a real-time web interface integrated with backend ML models for accurate health predictions.',
            tech: ['Python', 'Random Forest', 'Flask', 'Render'],
            link: "https://fetal-ai.onrender.com/",
            github: "https://github.com/18Sandeep18/Fetal-AI.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            image: img6 // Using a more vibrant placeholder color
            
        },
        {
            title: "Pneumonia Detection Using CNN",
            description: "Pneumonia detection using Convolutional Neural Networks (CNN) involves training a deep learning model to accurately identify pneumonia from chest X-ray images. This project utilizes image preprocessing and data augmentation techniques to enhance the training process.",
            tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib","DeepLearning","keras"],
            github: "https://github.com/18Sandeep18/DL-Pneumonia-Detection-using-CNN.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            link: 'http://livedemo1.com', // Set to null if no link
            image: img1
        },
        {
            title: "Study Partner - MERN App",
            description: "Task management web application built with the MERN stack, offering user authentication, Firebase integration for real-time updates, and a responsive design using Tailwind CSS.",
            tech:  ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Firebase',"Figma", "UI/UX Design"],
            github: "https://github.com/18Sandeep18/StudyPartner-MERN01.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            link: 'https://studypartner-sandeep-mern.vercel.app/', // No link if it's just a concept/design
            image: img4
        },
        {
            title: "Roll the Dice",
            description: "A simple and interactive dice rolling game created with HTML, CSS, and JavaScript, implementing random dice logic and clean visual transitions for a fun user experience.",
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: "https://github.com/18Sandeep18/DiceRoll-New.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            link: 'https://dice-roll-new.vercel.app/', // No link if it's just a concept/design
            image:img2
        },
        {
            title: "Car Price Prediction",
            description: "Car price prediction platform leveraging machine learning regression models to estimate vehicle prices based on features like brand, year, mileage, and model type.",
            tech: ['Python', 'Machine Learning', 'Scikit-Learn', 'Flask'],
            github: "https://github.com/18Sandeep18/car-price-prediction.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            link: 'https://car-price-prediction-2-hrm7.onrender.com/', // No link if it's just a concept/design
            image: img3
        },
        {
            
            title: 'E-commerce Website',
            description: 'Full-stack e-commerce platform developed using the MERN stack with secure user authentication, dynamic product listings, cart management, and integrated online payment gateway.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
            github: "https://github.com/18Sandeep18/MERN-APP2.git", // Replace # with the actual link to live demo or GitHub repo, or set to null
            link: 'https://mern-app-2.vercel.app/',
            image: img4
            
            
        },
        {
            
            title: 'ChatBot',
            description: 'AI-powered chatbot web application using natural language processing (NLP) techniques, capable of understanding user queries and providing intelligent, context-aware responses.',
            tech: ['Python', 'NLP', 'Machine Learning', 'Flask'],
            link: 'http://livedemo3.com',
            github: "https://github.com/myusername/myprojectrepo", // Replace # with the actual link to live demo or GitHub repo, or set to null
            image: img5
            
            
          },
          
        // Add more projects
    ],
    
};

// --- Helper Components ---

// Section Title Component - Reusable component for consistent headings with more style
function SectionTitle({ title, icon: Icon }) {
    return (
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-16 text-gray-800 dark:text-gray-200 flex items-center justify-center tracking-tight"> {/* Added dark mode text, tracking-tight, font-extrabold */}
            {/* Render icon if provided */}
            {Icon && <Icon className="mr-3 h-8 w-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />} {/* Added dark mode icon color */}
            {title}
            {/* Subtle underline/border effect */}
             <span className="block w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></span> {/* Added a separator */}
        </h2>
    );
}

// --- Layout Components ---

// Navigation Bar Component
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

// Home Section Component - Enhanced Styling
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
                               border-6 border-white dark:border-gray-700
                               shadow-xl object-cover ring-4 ring-indigo-300
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


// About Section Component - Enhanced Styling
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

// Project Card Component - Reusable card for displaying each project - Enhanced
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

// Projects Section Component - Enhanced Styling
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

// Contact Section Component - Enhanced Styling
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

// Footer Component - Enhanced Styling
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