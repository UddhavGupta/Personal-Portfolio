import React from 'react';
import { motion } from 'framer-motion';
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function SectionReveal({
  children,
  className = '',
  delay = 0
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}>
      
      {children}
    </motion.div>);

}