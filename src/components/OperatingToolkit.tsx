import React from 'react';
import { motion } from 'framer-motion';
const toolkit = [
{
  title: 'Technical & Prototyping',
  items:
  'SQL, Python, Excel, Snowflake, Figma, Replit, Bolt, Lovable, n8n, GitHub, Linear.',
  caption:
  'Tools I use to analyze, prototype, automate, and ship early versions of ideas.'
},
{
  title: 'Business Credentials',
  items:
  'Financial Modeling, Training the Street / Bayrock / JP Morgan; Six Sigma Green Belt; Google Digital Marketing.',
  caption:
  'Foundational training across finance, process improvement, and digital growth.'
},
{
  title: 'Languages',
  items: 'Hindi and Indonesian, fluent; French, intermediate.',
  caption:
  'Useful across multicultural teams, global markets, and customer contexts.'
},
{
  title: 'Community Leadership',
  items:
  'Board Member, The Light Collective. Managed a $400K budget, reduced costs by 20%, and helped raise $200K for community support and cancer-related care resources.',
  caption:
  'Governance, budget ownership, and mission-driven operating experience.'
}];

export function OperatingToolkit() {
  return (
    <section id="toolkit" className="py-16">
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
        
        <h2 className="text-2xl font-bold mb-10">Tools I Build With</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {toolkit.map((card, index) =>
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08
            }}
            className="group bg-card p-6 rounded-2xl border border-ink-subtle hover:border-copper/30 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-6px_rgba(0,0,0,0.08)] transition-all duration-300">
            
              <h3 className="text-sm font-bold uppercase tracking-wider text-copper mb-3">
                {card.title}
              </h3>

              <p className="text-sm text-ink leading-relaxed mb-4">
                {card.items}
              </p>

              <p className="text-xs text-stone-400 italic leading-relaxed border-t border-ink-subtle/40 pt-3">
                {card.caption}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}