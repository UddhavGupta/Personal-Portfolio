import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface ChangelogDrawerProps {
  open: boolean;
  onClose: () => void;
}
type Entry = {
  v: string;
  date?: string;
  title: string;
  notes: string[];
};
// Honest builder log — what changed, why it changed, and what was technically
// interesting about it. Every entry should justify itself on at least one of:
// product judgment, builder discipline, or technical craft.
const versions: Entry[] = [
{
  v: 'v.97',
  title: 'Render-crash hotfix',
  notes: [
  'Caught a runtime crash in Operating Principles: the JSX referenced principle.icon and principle.description, but the data shape only carried title and body. React was being asked to mount undefined as a component, taking the whole tree down with it.',
  'Restored a numbered card layout (matches the editorial grid system used in Build Notes and Experience), preserved the paper-grain hover, dropped the unused icon dependency. Lesson logged: when you change a data contract, lint the consumers in the same commit.']

},
{
  v: 'v.96',
  title: 'Editorial flourishes pass',
  notes: [
  'Added .paper-grain — a CSS-only hover utility that intensifies the global fractalNoise SVG inside any card (opacity 0 → 0.07 over 400ms). Implemented as a ::before pseudo-element so it composites under content without touching component markup. Applied to Projects, Experience, and Toolkit cards; deliberately skipped on the dark Contact card and Tier-2 mini-cards to preserve hierarchy.',
  'Replaced the static fade-in on the polaroid testimonial stack with a card-deal animation — deepest card lands first, top card last, ~150ms stagger. Subsequent rotations keep the existing snappy spring so the new motion is a one-time entrance, not a regression.',
  'Sealing ribbon between the final InkDivider and the Contact card: SVG path with pathLength stroke-draw, forked tails, and a champagne-ringed UG wax seal that stamps in with a small overshoot. Reads as visually "closing the book."',
  'Changelog drawer (you are reading it). Versioning the site itself turns the portfolio into its own proof-of-work artifact.']

},
{
  v: 'v.95',
  title: 'Hero signature, real this time',
  notes: [
  "Killed the mix-blend-mode bug that was leaving a white box around the hand-drawn signature in the hero. Root cause: the parent motion.div's transform was creating a stacking context, isolating the multiply blend from the page background. Fixed by giving the signature wrapper its own local cream background — multiply now keys cleanly against that without depending on ancestor composition.",
  'Swapped in a higher-resolution signature PNG and added a subtle contrast(1.15) brightness(0.95) filter so the strokes hold up at 640px wide. Kept screen-reader text via sr-only.']

},
{
  v: 'v.94',
  title: 'Name → signature in hero',
  notes: [
  'Replaced the Bodoni "Uddhav / Gupta" typeset name with the actual hand-drawn signature as the h1. The signature wipes on via clip-path inset, imitating ink being drawn left-to-right. Felt risky — typeset names are safe — but the editorial conceit is stronger when the entire portfolio reads like a signed manuscript.']

},
{
  v: 'v.93',
  title: 'Parker Remick glow — reliable & alive',
  notes: [
  'Old glow fired once on scroll-in and was unreliable. The bug: onAnimationComplete fired on the instant opacity fade-in (not the stroke draw), unmounting the SVG before the stroke had time to animate. Replaced with a single triggerGlow() helper backed by a timer matched to the full animation duration.',
  "Added cursor-proximity re-triggering: a window mousemove listener computes distance to the pill's bounding rect; within 220px it replays the glow, with a cooldown matched to the animation duration so it doesn't flicker. Layered a soft halo over a crisp inner stroke so the glow has both presence and definition."]

},
{
  v: 'v.92',
  title: 'Splash → monogram → SideNav handoff',
  notes: [
  'Three-stage intro: (1) full handwritten signature wipes on over a maroon ink bloom, (2) signature collapses inward — horizontal squeeze, slight blur, dark "seed" pulse — and the UG monogram disc grows from that point, (3) monogram magnets to the SideNav slot in the top-left.',
  'Position transition uses x/y/scale transforms only (no top/left keyframes). Computes the corner-target offset from window dimensions at mount, so the landing position is pixel-accurate at any breakpoint and stays GPU-smooth.',
  "Gated behind sessionStorage('mp:ink-intro-seen') so it plays once per session — first-impression motion shouldn't become a tax on every visit."]

},
{
  v: 'v.91',
  title: 'Footer typography pass',
  notes: [
  "Darkened footer text from stone-400 → stone-700. Originally I'd undertuned the contrast trying to keep the footer 'quiet' — ended up failing legibility on cream paper at small sizes. A common AI/early-portfolio failure mode (low contrast in service of restraint)."]

},
{
  v: 'v.90',
  title: "Director's Cut commentary",
  notes: [
  "Type 'director' anywhere (or enter the Konami code) to unlock a side panel that annotates each section with the why behind it — what I cut, what I almost cut, what earned its spot. Uses an IntersectionObserver to switch the visible note as you scroll, so the commentary tracks you rather than the other way around. The site as its own DVD bonus reel."]

},
{
  v: 'v.85',
  title: 'Build Notes overlay on Portfolio card',
  notes: [
  "Added a 'View Build Notes' button to the Proof-of-Work Portfolio project card that opens a modal teardown — quick facts, problem, product decisions, what I cut, what I'd improve next. Showing the seams once, in one place, was better than littering the site with self-referential asides."]

},
{
  v: 'v.78',
  title: 'Polaroid stack as default',
  notes: [
  'Promoted the polaroid card stack above the boring auto-rotating carousel for testimonials. Each card is draggable with a velocity threshold (flick to dismiss); the stack uses a deterministic per-card seeded rotation so it feels handled-by-a-human, not procedurally noisy. Carousel preserved as an opt-in for skim-readers.']

},
{
  v: 'v.74',
  title: 'Coffee easter egg',
  notes: [
  "Type 'coffee' anywhere on the site to surface a hand-curated map of my favorite cafés in every city I've spent time in. Useless for hiring managers, valuable for the people who actually become friends. Easter eggs are a tell that the operator cares beyond the brief."]

},
{
  v: 'v.65',
  title: 'Real-geometry globe',
  notes: [
  "Replaced a stylized blob globe with one rendered via d3-geo using TopoJSON country outlines from world-atlas. Hold Shift over the globe to reveal pins for cities I've lived in. Geography deserved to feel like data, not decoration."]

},
{
  v: 'v.55',
  title: 'Ink divider system',
  notes: [
  'Replaced solid <hr/> rules with a custom animated SVG divider — droplet falls, splash ring bursts, ink line draws outward from the center reservoir, with a faint whisper trace underneath and symmetric micro-droplets bleeding outward. Sets the editorial rhythm between sections.']

},
{
  v: 'v.42',
  title: 'Print resume + signature',
  notes: [
  "Added a print-only resume that's hidden on screen and rendered when window.print() fires, via @media print rules in index.css. Same content, single-page, Georgia/serif, structured for ATS. The hand-drawn signature also debuted in this cut — SVG with clip-path wipe-on, before it was promoted to the hero."]

},
{
  v: 'v.30',
  title: 'Information architecture rewrite',
  notes: [
  'Moved Featured Projects and Selected Thinking above Experience. The default chronological resume order buries proof-of-work behind biography. Reordering it so readers see evidence first, story second, is the single highest-leverage edit on the whole site.',
  "Renamed 'Writing' → 'Selected Thinking' and 'Operating Toolkit' → 'Tools I Build With'. The old labels framed the work as content and consulting-speak respectively; the new ones make sharper claims."]

},
{
  v: 'v.20',
  title: 'First public cut',
  notes: [
  'Shipped to guptau.com — Magic Patterns → GitHub → Vercel, Cloudflare DNS. The whole stack is intentionally small so the iteration loop stays under a minute end-to-end.']

}];

export function ChangelogDrawer({ open, onClose }: ChangelogDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open &&
      <>
          <motion.div
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
          className="fixed inset-0 z-[100] bg-black/10 backdrop-blur-[1px] no-print"
          onClick={onClose} />
        
          <motion.div
          role="dialog"
          aria-label="Changelog & build notes"
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.97
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 16,
            scale: 0.97
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="fixed bottom-20 right-6 sm:right-12 z-[101] w-[420px] max-w-[calc(100vw-3rem)] max-h-[72vh] rounded-2xl shadow-2xl border border-maroon/20 no-print flex flex-col overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-primary)'
          }}>
          
            {/* Header */}
            <div
            className="px-6 py-5 border-b border-maroon/10 flex items-start justify-between gap-4"
            style={{
              backgroundColor: 'var(--bg-primary)'
            }}>
            
              <div>
                <p className="luxe-caps text-maroon mb-1.5">Changelog</p>
                <h3 className="font-display-name text-2xl text-ink leading-tight">
                  Build notes
                </h3>
                <p className="text-[11px] text-stone-500 italic mt-1.5 leading-relaxed">
                  Honest record of what each cut shipped, in reverse
                  chronological order. The portfolio is itself proof of work.
                </p>
              </div>
              <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-maroon hover:bg-maroon/5 rounded-full transition-colors shrink-0"
              aria-label="Close changelog">
              
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable timeline */}
            <div className="flex-1 overflow-y-auto px-6 py-5 relative">
              {/* Continuous left rule */}
              <div className="absolute left-[59px] top-5 bottom-5 w-px bg-maroon/15" />

              <ul className="space-y-7 relative z-10">
                {versions.map((entry) =>
              <li key={entry.v} className="flex gap-4 relative">
                    {/* Version label + node dot */}
                    <div className="w-12 shrink-0 pt-0.5 flex flex-col items-end relative">
                      <span className="text-[11px] font-mono tracking-widest text-copper font-semibold tabular-nums">
                        {entry.v}
                      </span>
                      <span
                    className="absolute -right-[6px] top-2 w-2.5 h-2.5 rounded-full border border-maroon/40"
                    style={{
                      backgroundColor: 'var(--bg-primary)'
                    }} />
                  
                    </div>

                    {/* Entry body */}
                    <div className="flex-1 pl-3 pb-1 min-w-0">
                      <h4 className="text-sm font-semibold text-ink leading-snug mb-2">
                        {entry.title}
                      </h4>
                      <div className="space-y-2">
                        {entry.notes.map((note, i) =>
                    <p
                      key={i}
                      className="text-[12.5px] text-stone-600 leading-relaxed">
                      
                            {note}
                          </p>
                    )}
                      </div>
                    </div>
                  </li>
              )}
              </ul>
            </div>

            {/* Footer cap */}
            <div className="px-6 py-3 border-t border-maroon/10 flex items-center justify-between text-[10px] text-stone-500 tracking-widest uppercase font-mono">
              <span>Press Esc to close</span>
              <span>{versions.length} cuts logged</span>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}