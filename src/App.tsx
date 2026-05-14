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
    // Title
    document.title = 'Uddhav Gupta | Product, AI, CX & Growth';
    // ---- Favicon (UG monogram) ----
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#F4F1EC"/><circle cx="32" cy="32" r="29" fill="none" stroke="#5C2A1F" stroke-width="2"/><text x="32" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#5C2A1F">UG</text></svg>`;
    const faviconUri = `data:image/svg+xml;base64,${btoa(svgString)}`;
    document.querySelectorAll("link[rel*='icon']").forEach((el) => {
      el.parentNode?.removeChild(el);
    });
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = faviconUri;
    document.head.appendChild(link);
    const shortcut = document.createElement('link');
    shortcut.rel = 'shortcut icon';
    shortcut.type = 'image/svg+xml';
    shortcut.href = faviconUri;
    document.head.appendChild(shortcut);
    // ---- Open Graph preview image (1200x630 SVG, data URI) ----
    const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#F4F1EC"/><circle cx="1080" cy="120" r="46" fill="none" stroke="#5C2A1F" stroke-width="2"/><text x="1080" y="138" text-anchor="middle" font-family="Georgia, serif" font-size="38" font-weight="700" fill="#5C2A1F">UG</text><text x="100" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="6" fill="#5C2A1F" font-weight="600">PORTFOLIO · MMXXVI</text><text x="100" y="340" font-family="'Bodoni Moda', Georgia, serif" font-size="160" font-weight="600" fill="#1B1B1B">Uddhav Gupta</text><line x1="100" y1="400" x2="240" y2="400" stroke="#5C2A1F" stroke-width="2"/><text x="100" y="470" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#3D3D3D" font-weight="400">Product, AI, CX &amp; Growth</text><text x="100" y="540" font-family="Georgia, 'Times New Roman', serif" font-size="22" fill="#7A7268" font-style="italic">A proof-of-work portfolio</text></svg>`;
    const ogImage = `data:image/svg+xml;base64,${btoa(ogSvg)}`;
    // ---- Metadata helpers ----
    const setMeta = (
    attr: 'name' | 'property',
    key: string,
    content: string) =>
    {
      let el = document.head.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const description =
    'Product-minded operator building at the intersection of AI, customer experience, loyalty, growth, and talent. Kellogg MBA with experience across Chime, Uber Shuttles, GO ICON, Parker Remick, and BGV.';
    setMeta('name', 'description', description);
    // Open Graph
    setMeta('property', 'og:title', 'Uddhav Gupta | Product, AI, CX & Growth');
    setMeta(
      'property',
      'og:description',
      'A proof-of-work portfolio across AI, customer experience, loyalty, product judgment, writing, and builder projects.'
    );
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', 'https://guptau.com');
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:site_name', 'Uddhav Gupta');
    // Twitter / X
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', 'Uddhav Gupta | Product, AI, CX & Growth');
    setMeta(
      'name',
      'twitter:description',
      'Product-minded operator building and writing at the intersection of AI, customer experience, loyalty, growth, and talent.'
    );
    setMeta('name', 'twitter:image', ogImage);
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