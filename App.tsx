import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Transformations from './components/Transformations';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-teal-100 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Transformations />
      </main>
      <Contact />
    </div>
  );
};

export default App;