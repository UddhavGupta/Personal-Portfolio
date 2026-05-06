import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate } from
'framer-motion';
export function PaperLight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, {
    damping: 40,
    stiffness: 150
  });
  const springY = useSpring(mouseY, {
    damping: 40,
    stiffness: 150
  });
  const background = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(255,250,240,0.04), transparent 40%)`;
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  if (isTouchDevice) return null;
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1] no-print"
      style={{
        background
      }} />);


}