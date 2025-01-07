import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Certificate from './pages/Certificates/Certificates';

import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
