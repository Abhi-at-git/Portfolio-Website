import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nordstoneimage from "../../assets/images/nordstone_logo.jpg";
import CDS from "../../assets/images/CDS.jpg";
import GAN from "../../assets/images/GAN.jpg";
import GNN from "../../assets/images/GNN.jpg";
import ERS from "../../assets/images/ERS.jpg";
import portfolio from "../../assets/images/portfolio.jpg";
import Navbar from "../../components/Navbar/Navbar";
import './style.css'
const Project = () => {
  const projectData = [
    {
      title: "Crime Detection System",
      description: [
        "Implemented real-time CCTV footage analysis system using LSTM to identify criminal activities.",
        "Established an automated alert system to inform the police station upon crime detection.",
        "Employed SQL for the management and storage of the database, ensuring efficient data handling and retrieval."
      ],
      image: CDS,
      githubLink: "https://github.com/username/portfolio-website",
    },
    {
      title: "Human Emotion Detection",
      description: [
        "Recognize human face and tells about the emotion of the person.",
        "Using OpenCV for capturing real time footage and using CNN for detection of emotion.",
        "It describes whether the person is happy, sad, angry, disgusted, neutral, sad and surprised."
      ],
      image: ERS,
      githubLink: "https://github.com/Abhi-at-git/Emotion-Recognition-System-Website.git",
    },
    {
      title: "Stock Prediction using GAN",
      description: [
        "Analyze the historical prices of stock data and predict next day closing price.",
        "Did Feature Extraction, Data Preprocessing, Feature Engineering, training and prediction.",
        "Used GAN for training the data taken from Yahoo Finance."
      ],
      image: GAN,
      githubLink: "https://github.com/Abhi-at-git/Stock-Prediction-using-GAN-Generative-Adversarial-Network-.git",
    },
    ,
    {
      title: "Stock Prediction using GNN",
      description: [
        "Analyze the historical prices of stock data and predict next day closing price.",
        "Did Feature Extraction, Data Preprocessing, Feature Engineering, training and prediction.",
        "Used GNN for training the data taken from Yahoo Finance."
      ],
      image: GNN,
      githubLink: "https://github.com/Abhi-at-git/Stock-Prediction-using-GNN-Graph-Neural-Network-.git",
    },
    {
      title: "Nordstone",
      description: [
        "Developed Splash Screen, Navigation System, Login and Sign Up page for a mobile application.",
        "Connected the application to firebase for user authentication management and storage."
      ],
      image: nordstoneimage,
      githubLink: "https://github.com/Abhi-at-git/Nordstone.git",
    },
    {
      title: "Portfolio Website",
      description: [
        "Built Personal Portfolio Website using ReactJS.",
        "Implemented the use of React Router for navigation and smooth transition between pages.",
        "Used CSS for styling and responsive design.",
        "Deployed the website on Vercel."
      ],
      image: portfolio,
      githubLink: "https://github.com/Abhi-at-git/Portfolio-Website.git",
    }
  ];

  return (
    
    <div className="projects-container">
      <Navbar />
      <h1>My Projects</h1>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Project;
