import img1 from '../assets/p1.webp';
import img2 from '../assets/Roll.jpg';
import img3 from '../assets/Car.jpg';
import img4 from '../assets/Product.png';
import img5 from '../assets/chatbot.avif';
import img6 from '../assets/Fetus.jpg';
import profileimg from '../assets/PhotoID.jpg';

export const portfolioConfig = {
  name: "TADI SANDEEP RISHI",
  title: "AI System Engineer | B.Tech Graduate -25",
  contact: {
    email: "risisandeep8@example.com",
    phone: "+91 9182272474",
    linkedin: "https://www.linkedin.com/in/sandeeprishi/",
    github: "https://github.com/18Sandeep18",
    location: "Bhimavaram, Andhra Pradesh, India"
  },
  about: {
    summary: "Highly motivated and enthusiastic B.Tech final year student specializing in Computer Science...",
    skills: [
      "JavaScript (React, Node.js)", "Python (Django/Flask)", "Java","Machine Learning","Deep Learning", "C++",
      "HTML5", "CSS3", "Tailwind CSS", "SQL", "NoSQL (MongoDB)",
      "Git & GitHub", "Docker", "RESTful APIs", "Agile Methodologies"
    ],
    education: [
      {
        degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
        institution: "Vellore Institute of Technology",
        period: "2021 - 2025",
        details: "CGPA: 8.76/10"
      },
      {
        degree: "Intermediate / Class 12th",
        institution: "Jawahar Navodaya Vidyalaya",
        period: "2019-2020",
        details: "Percentage: 90.5%"
      }
    ],
    certifications: [
      { name: "AWS Certified Solution Architect", issuer: "Amazon Web Services (AWS)", link: "https://drive.google.com/file/d/1f7N6zsiKNU2W7BsAx0j3K2MHBDLp0pTL/view?usp=sharing" },
      { name: "SmartBridge - AIML powered by Google", issuer: "Google", link: "https://drive.google.com/file/d/1aISytFJpM2m4fWJlE1Wa42kK4-EXdyBF/view?usp=sharing" },
      { name: "IntrainTech", issuer: "SkillCepha", link: "https://drive.google.com/file/d/1tsapIgLgS5lFE3xd_S46Un93jtSfXPK2/view?usp=sharing" }
    ],
    codingProfiles: [
      { name: "LeetCode", link: "https://leetcode.com/u/Sandeep-6-0/", details: "400+ problems solved" }
    ],
  },
  projects: [
    {
      title: "Fetal Health Detection Using AI",
      description: "Fetal health detection project using ML models trained on CTG data...",
      tech: ["Python", "Random Forest", "Flask", "Render"],
      link: "https://fetal-ai.onrender.com/",
      github: "https://github.com/18Sandeep18/Fetal-AI.git",
      image: img6
    },
    {
      title: "Pneumonia Detection Using CNN",
      description: "Pneumonia detection using CNN on X-ray images...",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "DeepLearning", "keras"],
      github: "https://github.com/18Sandeep18/DL-Pneumonia-Detection-using-CNN.git",
      link: "http://livedemo1.com",
      image: img1
    },
    {
      title: "Study Partner - MERN App",
      description: "Task management web app with MERN stack and Firebase integration.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Firebase", "Figma", "UI/UX Design"],
      github: "https://github.com/18Sandeep18/StudyPartner-MERN01.git",
      link: "https://studypartner-sandeep-mern.vercel.app/",
      image: img4
    },
    {
      title: "Roll the Dice",
      description: "Simple and interactive dice rolling game using JS.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/18Sandeep18/DiceRoll-New.git",
      link: "https://dice-roll-new.vercel.app/",
      image: img2
    },
    {
      title: "Car Price Prediction",
      description: "Predict car prices using regression ML models.",
      tech: ["Python", "Machine Learning", "Scikit-Learn", "Flask"],
      github: "https://github.com/18Sandeep18/car-price-prediction.git",
      link: "https://car-price-prediction-2-hrm7.onrender.com/",
      image: img3
    },
    {
      title: "E-commerce Website",
      description: "Full-stack MERN e-commerce with payment integration.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Stripe"],
      github: "https://github.com/18Sandeep18/MERN-APP2.git",
      link: "https://mern-app-2.vercel.app/",
      image: img4
    },
    {
      title: "ChatBot",
      description: "AI Chatbot app using NLP and ML models.",
      tech: ["Python", "NLP", "Machine Learning", "Flask"],
      link: "http://livedemo3.com",
      github: "https://github.com/myusername/myprojectrepo",
      image: img5
    }
  ],
  profileImage: profileimg
};
