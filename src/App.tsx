import React, { useEffect, createElement } from 'react';
import { SideNav } from './components/SideNav';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { Projects } from './components/Projects';
import { Writing } from './components/Writing';
import { Testimonials } from './components/Testimonials';
import { EducationSection } from './components/EducationSection';
import { Elsewhere } from './components/Elsewhere';
import { Contact } from './components/Contact';
import { BlobCursor } from './components/BlobCursor';
import { InkDivider } from './components/InkDivider';
import { GlobalMotif } from './components/GlobalMotif';
import { SectionReveal } from './components/SectionReveal';
import { OperatingToolkit } from './components/OperatingToolkit';
import { OperatingPrinciples } from './components/OperatingPrinciples';
import { ScrollProgress } from './components/ScrollProgress';
import { PaperLight } from './components/PaperLight';
export function App() {
  useEffect(() => {
    document.title = 'Uddhav Gupta';
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#F4F1EC"/><circle cx="32" cy="32" r="29" fill="none" stroke="#5C2A1F" stroke-width="2"/><text x="32" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#5C2A1F">UG</text></svg>`;
    const dataUri = `data:image/svg+xml;base64,${btoa(svgString)}`;
    // Remove any existing favicon links (including the default Magic Patterns 'M')
    document.querySelectorAll("link[rel*='icon']").forEach((el) => {
      el.parentNode?.removeChild(el);
    });
    // Inject our UG monogram favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = dataUri;
    document.head.appendChild(link);
    const shortcut = document.createElement('link');
    shortcut.rel = 'shortcut icon';
    shortcut.type = 'image/svg+xml';
    shortcut.href = dataUri;
    document.head.appendChild(shortcut);
  }, []);
  return (
    <div className="min-h-screen relative selection:bg-copper/20 selection:text-ink">
      <ScrollProgress />
      <GlobalMotif />
      <PaperLight />
      <BlobCursor />
      <SideNav />

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 xl:max-w-4xl pt-24 pb-12 print:max-w-none print:mx-0 print:px-8 print:pt-0">
        <Hero />

        <InkDivider />

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <Writing />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <ExperienceSection />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <OperatingPrinciples />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <OperatingToolkit />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <Testimonials />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <EducationSection />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <Elsewhere />
        </SectionReveal>

        <InkDivider />

        <SectionReveal delay={0.05}>
          <Contact />
        </SectionReveal>
      </main>

      <footer className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 xl:max-w-4xl pb-16 no-print">
        <div className="border-t border-divider pt-8 flex items-center justify-between">
          <p className="text-xs text-stone-400 tracking-wide">
            © Uddhav Gupta 2026
          </p>
          <p className="text-xs text-stone-400 tracking-wide">
            Built with intention.
          </p>
        </div>
      </footer>
    </div>);

}