import React from 'react';
import { motion } from 'framer-motion';
export function AmbiguityDiagram() {
  const nodes = [
  {
    label: 'Messy Problem',
    x: 10,
    y: 50
  },
  {
    label: 'Structured Insight',
    x: 170,
    y: 50
  },
  {
    label: 'Prototype',
    x: 330,
    y: 50
  },
  {
    label: 'GTM Motion',
    x: 490,
    y: 50
  },
  {
    label: 'Measurement Plan',
    x: 650,
    y: 50
  },
  {
    label: 'Executive Narrative',
    x: 810,
    y: 50
  }];

  return (
    <section id="ambiguity" className="py-12 border-t border-divider">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6
        }}>
        
        <h2 className="text-2xl font-bold mb-2">From Ambiguity to Artifact</h2>
        <p className="text-sm text-stone-400 italic mb-12">
          The throughline across every role.
        </p>

        <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="min-w-[900px] h-[100px] relative">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 920 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-stone-300">
              
              {/* Connecting Lines */}
              <motion.path
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                d="M 110 50 L 160 50 M 280 50 L 320 50 M 400 50 L 480 50 M 580 50 L 640 50 M 770 50 L 800 50"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 4" />
              

              {/* Arrows */}
              <path
                d="M 155 47 L 160 50 L 155 53"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none" />
              
              <path
                d="M 315 47 L 320 50 L 315 53"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none" />
              
              <path
                d="M 475 47 L 480 50 L 475 53"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none" />
              
              <path
                d="M 635 47 L 640 50 L 635 53"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none" />
              
              <path
                d="M 795 47 L 800 50 L 795 53"
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none" />
              

              {/* Nodes */}
              {nodes.map((node, i) =>
              <g key={i}>
                  <rect
                  x={node.x}
                  y={node.y - 15}
                  width={node.label.length * 7 + 20}
                  height="30"
                  rx="4"
                  fill="#F6F4EF"
                  stroke="currentColor"
                  strokeWidth="0.8" />
                
                  <text
                  x={node.x + (node.label.length * 7 + 20) / 2}
                  y={node.y + 4}
                  fill="#2C2C2C"
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                  textAnchor="middle"
                  letterSpacing="0.02em">
                  
                    {node.label}
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>
      </motion.div>
    </section>);

}