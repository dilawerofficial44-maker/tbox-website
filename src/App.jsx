import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import HowWeWork from './components/HowWeWork';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <HowWeWork />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
