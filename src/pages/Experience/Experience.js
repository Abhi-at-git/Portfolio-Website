import React from "react";
import ProjectCard from "../../components/ExperienceCard/ExperienceCard";
import lysto from "../../assets/images/lysto.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import './style.css'


const Experience = () => {
  const projectData = [
    {
      title: "Lysto",
      description: [
        "Game Play Tester",
        "Tested the game for bugs and glitches.",
        "Suggested improvements in the game.",
      ],
      image: lysto,
      websiteLink: "https://lysto.gg/",
    }
  ];

  return (
    
    <div className="projects-container">
      <Navbar />
      <h1>Experiences</h1>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          websiteLink={project.websiteLink}
        />
      ))}
    </div>
  );
};

export default Experience;
