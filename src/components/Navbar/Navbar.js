import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import resume from '../../assets/pdf/resume.pdf';
// import resume from '../../../public/resume.pdf';
const Navbar = () => {
  return (
    <div className='navbar_container'>
    <nav className="navbar">
      <ul className="nav-links">
        <div className='a_container'><li><Link to="/about">About</Link></li></div>
        <div className='a_container'><li><Link to="/experience">Experience</Link></li></div>
        <div className='a_container'><li><Link to="/certificates">Certificates</Link></li></div>
        <div className='a_container_logo'><Link to="/"><div className="logo">Paranoid</div></Link></div>
        <div className='a_container'><li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li></div>
        <div className='a_container'><li><Link to="/project">Project</Link></li></div>
        <div className='a_container'><li><Link to="/contact">Contact</Link></li></div>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
