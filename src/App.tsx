import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-heading font-bold text-gradient">Pagecraft</h3>
              <p className="text-muted-foreground mt-2">
                Where AI meets Human Intelligence
              </p>
            </motion.div>
            
            <div className="flex justify-center space-x-6 mb-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Pagecraft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;