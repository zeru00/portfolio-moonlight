import React from 'react';
import { MoonlightBackground } from './components/MoonlightBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* Red Moonlight Background */}
      <MoonlightBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

