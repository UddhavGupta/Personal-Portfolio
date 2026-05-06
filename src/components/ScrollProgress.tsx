import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Spring configuration for an organic "ink spreading" feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-copper/60 origin-left z-50 no-print"
      style={{
        scaleX
      }} />);


}