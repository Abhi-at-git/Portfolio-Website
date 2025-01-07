import React from "react";
import CertificateCard from "../../components/CertificateCard/CertificateCard";
import CP from "../../assets/images/CP.png";
import SAA from "../../assets/images/SAA.png";
import Navbar from "../../components/Navbar/Navbar";
import './style.css'


const Certificates = () => {
  const projectData = [
    {
      title: "AWS Practitioner",
      description: [
        "Validates foundational knowledge of cloud computing concepts and AWS services.",
        "Covers key topics like AWS Cloud concepts, security, pricing, and support models.",
        "Suitable for individuals from both technical and non-technical backgrounds.",
        "Demonstrates the ability to navigate the AWS ecosystem and utilize its core services.",
        "Establishes a strong base for advanced AWS certifications and cloud-related roles.",
      ],
      image: CP,
      websiteLink: "https://www.credly.com/badges/c19b9425-fac8-43cd-932b-9255dfdfbc20/public_url",
      certificateLink: "/CP_Certificate.pdf",
    },
    {
      title: "AWS Solutions Architect",
      description: [
        "Focuses on designing and deploying scalable, fault-tolerant, and secure applications on AWS.",
        "Highlights expertise in cloud architectural principles and best practices.",
        "Covers AWS services like EC2, S3, RDS, Lambda, and others to build robust solutions.",
        "Demonstrates the ability to create cost-efficient and performance-optimized cloud architectures.",
        "Essential for professionals aiming to excel as cloud architects or developers.",
      ],
      image: SAA,
      websiteLink: "https://www.credly.com/badges/dac5842c-952e-4d1b-a423-3398250fd155/public_url",
      certificateLink: "/SAA_Certificate.pdf",
    }
  ];

  return (
    
    <div className="projects-container">
      <Navbar />
      <h1>Certificates</h1>
      {projectData.map((project, index) => (
        <CertificateCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          websiteLink={project.websiteLink}
          certificateLink={project.certificateLink}
        />
      ))}
    </div>
  );
};

export default Certificates;
