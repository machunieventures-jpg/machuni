import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import NeuralLattice from './components/NeuralLattice';
import Hero from './components/sections/Hero';
import Ventures from './components/sections/Ventures';
import Story from './components/sections/Story';
import Stats from './components/sections/Stats';
import AISection from './components/sections/AISection';
import Cases from './components/sections/Cases';
import CTA from './components/sections/CTA';
import CustomCursor from './components/UI/CustomCursor';
import Navigation from './components/Navigation';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div className="relative min-h-screen selection:bg-neon-blue/30 overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      {/* 3D Background */}
      <NeuralLattice scrollProgress={scrollProgress} />

      {/* Main Content */}
      <main ref={containerRef} className="relative z-10">
        <Hero />
        <Ventures />
        <Story />
        <Stats />
        <AISection />
        <Cases />
        <CTA />
      </main>

      {/* Footer Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,8,16,0.4)_100%)]" />
    </div>
  );
}
