import React, { useState, memo, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Users,
  Sparkles,
  Layers,
  BoxIcon } from
'lucide-react';
import { BuildNotesModal } from './BuildNotesModal';
type Project = {
  title: string;
  problem: string;
  built: string;
  status: 'Testing' | 'Prototyping' | 'Published';
  link: string | null;
  linkText?: string;
  buildNotes?: boolean;
  icon: ComponentType<{
    className?: string;
  }>;
  // Editorial accent — applied as a subtle radial tint on the card
  accent: string; // rgba string
};
const projects: Project[] = [
{
  title: 'OrbitCRM',
  problem:
  'Personal/professional relationship tracking is bloated by enterprise CRMs that optimize for sales pipelines, not human context.',
  built:
  'A lightweight personal CRM prototype for tracking relationships, context, notes, and follow-ups without the bloat.',
  status: 'Testing',
  link: 'https://tryorbitcrm.lovable.app',
  linkText: 'Check it out',
  icon: Users,
  accent: 'rgba(92, 42, 31, 0.18)' // maroon
},
{
  title: 'Say It Anyway',
  problem:
  'Most conversation games either stay too surface-level or become awkwardly intense too fast. I also never seem to have the physical decks with me when I actually want them, which is usually in impromptu settings.',
  built:
  'A mobile-first digital prompt-card game with curated modes, hidden adult-only prompts, local prompt memory, privacy controls, and turn guidance for better conversations across dates, friends, couples, and groups. Includes single-device play and multiplayer rooms that sync across devices so everyone stays on the same card.',
  status: 'Testing',
  link: 'https://sayitanyway.guptau.com/',
  linkText: 'Play the game',
  icon: BoxIcon,
  accent: 'rgba(184, 153, 104, 0.22)' // gold-soft / champagne
},
{
  title: 'AI Talent OS',
  problem:
  'Modern talent teams still rely on manual sourcing and gut-feel screening; AI-native recruiter tooling is fragmented and shallow.',
  built:
  "What I'm building: a workflow concept for AI-assisted sourcing, candidate evidence review, and recruiter decision support.",
  status: 'Prototyping',
  link: null,
  icon: Sparkles,
  accent: 'rgba(61, 26, 20, 0.20)' // deep maroon / ink
},
{
  title: 'Proof-of-Work Portfolio',
  problem:
  'My work was spread across resumes, decks, prototypes, essays, and scattered links.',
  built:
  'A personal portfolio system that brings product judgment, writing, prototypes, and operating range into one navigable experience.',
  status: 'Published',
  link: null,
  buildNotes: true,
  icon: Layers,
  accent: 'rgba(200, 169, 119, 0.22)' // champagne
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
function ProjectAccordionCard({
  project,
  index,
  isActive,
  onActivate,
  onBuildNotes






}: {project: Project;index: number;isActive: boolean;onActivate: () => void;onBuildNotes: () => void;}) {
  const Icon = project.icon;
  return (
    <motion.div
      layout
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${project.title} — ${isActive ? 'expanded' : 'click to expand'}`}
      initial={{
        opacity: 0,
        y: 16
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        layout: {
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1]
        },
        opacity: {
          duration: 0.5,
          delay: index * 0.08
        },
        y: {
          duration: 0.5,
          delay: index * 0.08
        }
      }}
      className={`group relative bg-card rounded-2xl border border-ink-subtle paper-grain overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper/40 ${isActive ? 'flex-[5] sm:flex-[6] border-copper/40 shadow-[0_12px_32px_-12px_rgba(92,42,31,0.18)]' : 'flex-[1] hover:border-copper/30'}`}
      style={{
        // Per-card editorial tint — sits over the cream card surface
        backgroundImage: `radial-gradient(ellipse at center, ${project.accent} 0%, transparent 65%)`,
        minHeight: 440
      }}>
      
      {/* Collapsed state — vertical title rail + status pip + icon at the bottom */}
      <AnimatePresence initial={false} mode="wait">
        {!isActive ?
        <motion.div
          key="collapsed"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.25
          }}
          className="absolute inset-0 flex flex-col items-center justify-between py-5 px-2 z-10">
          
            <span
            className="text-[9px] uppercase tracking-[0.25em] font-semibold text-stone-500"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}>
            
              {project.status}
            </span>

            <h3
            className="font-display-name text-2xl text-ink leading-none tracking-tight whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)'
            }}>
            
              {project.title}
            </h3>

            <span className="w-9 h-9 rounded-full border border-maroon/25 flex items-center justify-center text-maroon/80 group-hover:border-maroon/50 group-hover:text-maroon transition-colors">
              <Icon className="w-4 h-4" />
            </span>
          </motion.div> :

        <motion.div
          key="expanded"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.35,
            delay: 0.15
          }}
          className="absolute inset-0 p-6 sm:p-7 flex flex-col z-10">
          
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 w-9 h-9 rounded-full bg-maroon/8 border border-maroon/20 flex items-center justify-center text-maroon">
                  <Icon className="w-4 h-4" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug truncate">
                  {project.title}
                </h3>
              </div>
              <StatusBadge status={project.status} />
            </div>

            <div className="space-y-4 flex-grow overflow-y-auto pr-1">
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
          <div className="mt-5 pt-4 border-t border-ink-subtle/40">
                {project.link ?
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors min-h-[44px]">
              
                    {project.linkText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a> :
            project.buildNotes ?
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onBuildNotes();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-copper hover:text-maroon transition-colors min-h-[44px]">
              
                    <BookOpen className="w-4 h-4" />
                    View Build Notes
                  </button> :
            null}
              </div>
          }
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}
export function Projects() {
  const [buildNotesOpen, setBuildNotesOpen] = useState(false);
  // Default the freshest project (Say It Anyway, index 1) to expanded
  const [activeIndex, setActiveIndex] = useState(1);
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
        
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-xs text-stone-500 italic">
            Hover or tap a card to expand.
          </p>
        </div>

        {/* Horizontal accordion — expands the active card and compresses the rest */}
        <div className="flex flex-row gap-3 sm:gap-4 w-full">
          {projects.map((project, index) =>
          <ProjectAccordionCard
            key={project.title}
            project={project}
            index={index}
            isActive={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
            onBuildNotes={() => setBuildNotesOpen(true)} />

          )}
        </div>
      </motion.div>

      <BuildNotesModal
        open={buildNotesOpen}
        onClose={() => setBuildNotesOpen(false)} />
      
    </section>);

}