import React from "react";
import "./style.css";
import { FaCertificate } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, description, image, websiteLink,certificateLink }) => {
  return (
    <div className="project-card">
      
      <div className="card-content">
        <h2>{title}</h2>
        {Array.isArray(description) ? (
          <div className="project-description">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : (
          <p>{description}</p>
        )}
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <FaGlobe className="website-icon" />   Credly
        </a>
        <br />
        <a href={certificateLink} target="_blank" rel="noopener noreferrer">
        <FaCertificate className="certificate-icon" />   Certificate
        </a>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
