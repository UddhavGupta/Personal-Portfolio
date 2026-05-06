import React, { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
const primaryExperiences = [
{
  company: 'Chime',
  role: 'Program Manager MBA Intern, AI CX & Product Ops',
  date: 'Summer 2025',
  location: 'San Francisco, CA',
  mandate:
  'Optimize AI-driven support journeys and define the 2026 omnichannel roadmap for 9M+ members.'
},
{
  company: 'Uber',
  role: 'Product and Growth Consultant, Uber Shuttles',
  date: 'Spring 2025',
  location: 'Chicago, IL',
  mandate:
  'Diagnose adoption funnels and design loyalty MVPs for B2B mobility.'
},
{
  company: 'GO ICON',
  role: 'Product Manager MBA Intern',
  date: 'Spring 2025',
  location: 'Chicago, IL',
  mandate:
  'Evaluate market expansion and scope MVP concepts for a senior living SaaS platform.'
},
{
  company: 'Parker Remick',
  role: 'Associate II: GTM Strategy & Market Intelligence',
  date: '2021 – 2024',
  location: 'Seattle, WA',
  mandate:
  'Build scalable commercial systems and lead global C-suite product/engineering searches. Promoted twice in 15 months.',
  progression: ['Analyst', 'Associate I', 'Associate II']
},
{
  company: 'NovoEd',
  role: 'Revenue Operations Analyst Intern & Part-Time Associate',
  date: '2019 – 2020',
  location: 'San Francisco, CA',
  mandate:
  'Improve GTM visibility and tracking for enterprise learning SaaS.'
}];

const earlierExperiences = [
{
  company: 'Benhamou Global Ventures',
  role: 'Venture Associate',
  location: 'Chicago, IL',
  tags: ['Venture', 'AI/ML']
},
{
  company: 'Netlify',
  role: 'Strategic Finance Analyst Intern',
  location: 'San Francisco, CA',
  tags: ['PLG', 'Growth']
},
{
  company: 'JPMorgan',
  role: 'Global Markets Summer Analyst (Sales & Trading)',
  location: 'Singapore',
  tags: ['Finance', 'Analytics']
},
{
  company: 'EY',
  role: 'Advisory Summary Analyst',
  location: 'Mumbai, India',
  tags: ['Consulting', 'Operations']
}];

function ExecutiveSearchExposure() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-6 pt-5 border-t border-ink-subtle/40">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full flex items-center justify-between group/btn cursor-pointer">
        
        <div className="flex items-center gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-copper">
            Executive Search Exposure
          </h4>
          <span className="text-[10px] text-copper/70 font-medium px-2 py-0.5 border border-copper/30 rounded-full bg-copper/5 group-hover/btn:bg-copper/10 transition-colors">
            {isOpen ? 'Hide' : 'View portfolio & clients'}
          </span>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.3
          }}>
          
          <ChevronDownIcon className="w-4 h-4 text-copper" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="overflow-hidden">
          
            <div className="pt-4">
              <p className="text-[11px] text-stone-400 leading-relaxed mb-5 max-w-xl">
                Selected exposure across C-suite and VP-level executive search
                for venture-backed, PE-backed, and enterprise clients.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-medium text-stone-400/70 mb-2">
                      Investor ecosystems
                    </p>
                    <div className="rounded-lg border border-ink-subtle/30 overflow-hidden bg-white/40 p-2">
                      <img
                      src="/Screenshot_2026-05-06_at_12.49.22_AM.png"
                      alt="Select investor portfolios including Andreessen Horowitz, Sequoia, Accel, Coatue, Bain Capital, Y Combinator, and others"
                      className="w-full h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-90 transition-all duration-500" />
                    
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-medium text-stone-400/70 mb-2">
                      Selected clients
                    </p>
                    <div className="rounded-lg border border-ink-subtle/30 overflow-hidden bg-white/40 p-2">
                      <img
                      src="/Screenshot_2026-05-06_at_12.49.41_AM.png"
                      alt="Select clients including Square, Walmart, Instacart, Figma, Postman, OpenSea, Superhuman, and others"
                      className="w-full h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-90 transition-all duration-500" />
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
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
        
        <h2 className="text-2xl font-bold mb-10">Experience</h2>

        {/* Tier 1: Primary Experience */}
        <div className="space-y-6 mb-16">
          {primaryExperiences.map((exp, index) =>
          <motion.div
            key={`${exp.company}-${index}`}
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
              delay: index * 0.1
            }}
            className="group bg-card p-6 sm:p-8 rounded-2xl border border-ink-subtle hover:border-copper/30 transition-colors duration-300">
            
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-ink">{exp.company}</h3>
                  <p className="text-copper font-medium text-sm mt-1">
                    {exp.role}
                  </p>
                  {'progression' in exp && exp.progression &&
                <div className="flex items-center gap-1.5 mt-2">
                      {exp.progression.map((title, i) =>
                  <Fragment key={title}>
                          <span className="text-[10px] font-medium text-stone-400 uppercase tracking-wider">
                            {title}
                          </span>
                          {i < exp.progression!.length - 1 &&
                    <span className="text-stone-300 text-[10px]">
                              →
                            </span>
                    }
                        </Fragment>
                  )}
                    </div>
                }
                </div>
                <div className="text-left sm:text-right text-xs font-medium text-stone-400 uppercase tracking-wider">
                  <p>{exp.date}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <p className="text-ink font-medium leading-relaxed">
                {exp.mandate}
              </p>

              {exp.company === 'Parker Remick' && <ExecutiveSearchExposure />}
            </motion.div>
          )}
        </div>

        {/* Tier 2: Other Experience & Foundations */}
        <motion.div
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
            duration: 0.5
          }}>
          
          <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">
            Other Experience & Foundations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earlierExperiences.map((exp, index) =>
            <motion.div
              key={`${exp.company}-${index}`}
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
                duration: 0.3,
                delay: index * 0.05
              }}
              className="bg-card/50 p-4 rounded-xl border border-ink-subtle/50 hover:border-ink-subtle hover:bg-card transition-colors duration-300">
              
                <h4 className="text-base font-bold text-ink">{exp.company}</h4>
                <p className="text-xs font-medium text-copper mt-0.5">
                  {exp.role}
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {exp.location}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium text-stone-500 border border-stone-200 rounded-full bg-stone-50">
                  
                      {tag}
                    </span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>);

}