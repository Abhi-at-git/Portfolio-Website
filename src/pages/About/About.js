import React from "react";
import "./style.css"; // Import custom styles
import background from "../../assets/images/background.jpeg"; // Import background image
import Navbar from "../../components/Navbar/Navbar";
const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-left">
        <h1>About</h1>
        <p>
          Hello! I'm a passionate and dedicated 4th-year Computer Science Engineering student at VIT Chennai, 
          with a strong foundation in core programming languages like <strong>C++</strong>, <strong>C</strong>, <strong>Java</strong>, and <strong>SQL</strong>. Over the course of my academic and professional journey, I’ve developed a deep interest in exploring cutting-edge technologies, problem-solving, and creating impactful projects that reflect my technical expertise and innovative thinking.
        </p>
        <p>
          My technical journey began with mastering the basics of programming and gradually expanded as I delved into advanced concepts like <strong>Cloud Computing</strong>, <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Full-Stack Development</strong>. I am proud to have completed <strong>AWS Cloud Practitioner</strong> and <strong>AWS Solutions Architect</strong> certifications, which have equipped me with a strong understanding of cloud technologies, scalable architectures, and modern computing solutions.
        </p>
        <p>
          In my academic career, I’ve undertaken and successfully completed several challenging projects that showcase my ability to integrate knowledge across various domains. Some of the key highlights include:
        </p>
        <ul>
          <li>
            <strong>Stock Prediction System:</strong> Leveraging advanced <strong>GAN (Generative Adversarial Networks)</strong> and <strong>GNN (Graph Neural Networks)</strong> algorithms, I developed an intelligent system capable of predicting stock market trends with high accuracy. This project combined my skills in machine learning, data analysis, and mathematical modeling.
          </li>
          <li>
            <strong>Emotion Recognition System:</strong> Utilizing <strong>Deep Learning</strong> techniques, I created a system that detects and classifies human emotions based on facial expressions. This project demonstrated my proficiency in computer vision, neural networks, and Python-based frameworks like TensorFlow and OpenCV.
          </li>
          <li>
            <strong>Crime Detection System:</strong> Built a robust machine learning model to analyze and predict potential crime hotspots using historical data and trends. This project reflects my ability to design systems with a real-world impact and solve complex challenges.
          </li>
        </ul>
        <p>
          In addition to my academic pursuits, I’ve also gained substantial expertise in <strong>Web and Mobile Development</strong>. With hands-on experience in <strong>React</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>React Native</strong>, I have successfully:
        </p>
        <ul>
          <li>
            <strong>Developed an App:</strong> A full-featured application for managing and organizing texts and photos which also have features for notification and also made calculator which calculates while sending the request to backend. The app was built using modern frameworks like React Native, showcasing my ability to create scalable and user-friendly mobile solutions.
          </li>
          <li>
            <strong>Built a Personal Portfolio Website:</strong> Designed and developed a professional and creative portfolio website to showcase my skills, projects, and experience. This project reflects my ability to merge aesthetics with functionality using modern web technologies.
          </li>
        </ul>
        <p>
          Beyond technical expertise, I believe that <strong>communication and teamwork</strong> are essential to driving success. I take pride in my ability to convey complex technical ideas in a simple and effective manner, whether it’s collaborating with a team or presenting a solution to stakeholders. My patience, determination, and meticulous attention to detail ensure that every project I work on is executed to the highest standard.
        </p>
        <p>
          <strong>My Vision:</strong> As a technology enthusiast, I’m constantly inspired by the rapidly evolving tech landscape and its potential to solve some of the world’s most pressing challenges. I aim to contribute to this exciting field by:
        </p>
        <ul>
          <li>Building intelligent and innovative solutions that impact lives positively.</li>
          <li>Continuously learning and mastering emerging technologies like AI, blockchain, and IoT.</li>
          <li>Becoming a thought leader in the tech industry, inspiring others to explore, innovate, and grow.</li>
        </ul>
        <p>
          If you’re looking for a tech-savvy, motivated, and versatile individual with a proven track record of tackling challenges, I’d be thrilled to collaborate with you. Whether it’s contributing to cutting-edge projects, brainstorming innovative solutions, or simply sharing ideas, I’m always excited to connect with like-minded professionals who are passionate about technology and innovation.
        </p>
      </div>
      <div className="about-right">
        <div className="contact-card">
          <p className="contact-title">EMAIL</p>
          <p>akki12042003@gmail.com</p>
          <p className="contact-title">ROLE</p>
          <p>React Native Developer</p>
          <p className="contact-title">PHONE</p>
          <p>+91 79709 08253</p>
        </div>
        <div className="image-placeholder">
          <img
            src={background} // Replace with your actual image URL
            alt="My Background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
