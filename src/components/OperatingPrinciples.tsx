import React from 'react';
import { motion } from 'framer-motion';
const principles = [
{
  title: 'Clarity over chaos',
  body: 'I turn messy inputs into structured decisions, product direction, and operating systems.'
},
{
  title: 'Builder by default',
  body: 'I do not stop at analysis. I prototype, test, document, and ship the next useful artifact.'
},
{
  title: 'High standards, human first',
  body: 'I care about the work and the people doing it. The bar is high, but the operating style is grounded.'
},
{
  title: 'Systems over shortcuts',
  body: 'I look for root causes, repeatable mechanisms, and leverage that compounds.'
}];

export function OperatingPrinciples() {
  return (
    <section id="principles" className="py-16">
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
        
        <h2 className="text-2xl font-bold mb-2">Operating Principles</h2>
        <p className="text-sm text-stone-500 italic mb-10 max-w-2xl">
          How I approach ambiguous work, teams, and decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {principles.map((p, index) =>
          <motion.div
            key={p.title}
            initial={{
              opacity: 0,
              y: 8
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
              delay: index * 0.07
            }}
            className="flex gap-4">
            
              <span className="text-xs tabular-nums tracking-widest font-semibold text-maroon/70 pt-0.5 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-bold text-ink mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}