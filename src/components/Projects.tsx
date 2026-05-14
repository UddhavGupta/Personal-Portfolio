import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { BuildNotesModal } from './BuildNotesModal';
const projects = [
{
  title: 'OrbitCRM',
  problem:
  'Personal/professional relationship tracking is bloated by enterprise CRMs that optimize for sales pipelines, not human context.',
  built:
  'A lightweight personal CRM prototype for tracking relationships, context, notes, and follow-ups without the bloat.',
  status: 'Testing',
  link: 'https://tryorbitcrm.lovable.app',
  linkText: 'Check it out'
},
{
  title: 'AI Talent OS',
  problem:
  'Modern talent teams still rely on manual sourcing and gut-feel screening; AI-native recruiter tooling is fragmented and shallow.',
  built:
  "What I'm building: a workflow concept for AI-assisted sourcing, candidate evidence review, and recruiter decision support.",
  status: 'Prototyping',
  link: null
},
{
  title: 'Proof-of-Work Portfolio',
  problem:
  'My work was spread across resumes, decks, prototypes, essays, and scattered links.',
  built:
  'A personal portfolio system that brings product judgment, writing, prototypes, and operating range into one navigable experience.',
  status: 'Published',
  link: null,
  buildNotes: true
}];

function StatusBadge({ status }: {status: string;}) {
  if (status === 'Published') {
    return (
      <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-maroon text-champagne whitespace-nowrap">
        {status}
      </span>);

  }
  if (status === 'Testing') {
    return (
      <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-champagne text-maroon whitespace-nowrap">
        {status}
      </span>);

  }
  return (
    <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border border-maroon text-maroon whitespace-nowrap">
      {status}
    </span>);

}
export function Projects() {
  const [buildNotesOpen, setBuildNotesOpen] = useState(false);
  return (
    <section id="projects" className="py-16">
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
        
        <h2 className="text-2xl font-bold mb-10">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) =>
          <motion.div
            key={project.title}
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
            className="group relative bg-card p-6 sm:p-7 rounded-2xl border border-ink-subtle lg:hover:border-copper/30 lg:hover:-translate-y-1 lg:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">
            
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="text-lg font-bold text-ink leading-snug">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>

              <div className="space-y-5 flex-grow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-1.5">
                    Problem
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-1.5">
                    What I Built
                  </span>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {project.built}
                  </p>
                </div>
              </div>

              {(project.link || project.buildNotes) &&
            <div className="mt-6 pt-5 border-t border-ink-subtle/40">
                  {project.link ?
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors min-h-[44px]">
                
                      {project.linkText}
                      <ArrowUpRight className="w-4 h-4" />
                    </a> :
              project.buildNotes ?
              <button
                type="button"
                onClick={() => setBuildNotesOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors min-h-[44px]">
                
                      <BookOpen className="w-4 h-4" />
                      View Build Notes
                    </button> :
              null}
                </div>
            }
            </motion.div>
          )}
        </div>
      </motion.div>

      <BuildNotesModal
        open={buildNotesOpen}
        onClose={() => setBuildNotesOpen(false)} />
      
    </section>);

}