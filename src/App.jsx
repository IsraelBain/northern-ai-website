import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add any initialization logic here
    console.log('Northern AI Website Loaded');
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Products />
        <Advantages />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
