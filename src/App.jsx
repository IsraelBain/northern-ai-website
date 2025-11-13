import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import CostComparison from './components/CostComparison';
import ResultsVisualization from './components/ResultsVisualization';
import Products from './components/Products';
import Mission from './components/Mission';
import ServicesSection from './components/sections/ServicesSection';
import Advantages from './components/Advantages';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-separator"></div>
        <CostComparison />
        <div className="section-separator"></div>
        <ResultsVisualization />
        <div className="section-separator"></div>
        <Products />
        <div className="section-separator"></div>
        <Mission />
        <div className="section-separator"></div>
        <ServicesSection />
        <div className="section-separator"></div>
        <Advantages />
        <div className="section-separator"></div>
        <Team />
        <div className="section-separator"></div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
