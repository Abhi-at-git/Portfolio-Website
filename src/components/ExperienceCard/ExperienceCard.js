import React from "react";
import "./style.css";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, description, image, websiteLink }) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <h2>{title}</h2>
        {/* Render description as multiple lines if it's an array */}
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
        <FaGlobe className="website-icon" />   Open Website
        </a>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
