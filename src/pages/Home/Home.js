import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';
import './style.css';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
      <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
