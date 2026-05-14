import React from 'react';
// Single-page print-only resume.
// Hidden on screen. Rendered when window.print() is invoked thanks to @media print rules in index.css.
export function PrintResume() {
  return (
    <div className="print-resume" aria-hidden="true">
      <header className="pr-header">
        <h1>Uddhav Gupta</h1>
        <p className="pr-tagline">Product · AI · CX · Growth</p>
        <p className="pr-contact">
          uddhavgupta1998@gmail.com · linkedin.com/in/guptauddhav · guptau.com ·
          github.com/uddhavgupta
        </p>
      </header>

      <hr className="pr-rule" />

      <section className="pr-section">
        <h2>Summary</h2>
        <p>
          Product-minded operator turning ambiguous AI, customer experience, and
          growth problems into structured product and GTM systems. Kellogg MBA
          with experience across fintech, executive search, venture, and
          AI-enabled products.
        </p>
      </section>

      <section className="pr-section">
        <h2>Experience</h2>
        <div className="pr-role">
          <div className="pr-role-head">
            <span className="pr-company">Chime</span>
            <span className="pr-date">Summer 2025 · San Francisco, CA</span>
          </div>
          <p className="pr-title">
            Program Manager MBA Intern, AI CX &amp; Product Ops
          </p>
          <p>
            Defined AI-driven support journey improvements and contributed to
            the 2026 omnichannel roadmap for 9M+ members.
          </p>
        </div>
        <div className="pr-role">
          <div className="pr-role-head">
            <span className="pr-company">Uber</span>
            <span className="pr-date">Spring 2025 · Chicago, IL</span>
          </div>
          <p className="pr-title">
            Product and Growth Consultant, Uber Shuttles
          </p>
          <p>
            Diagnosed B2B shuttle adoption funnels and designed loyalty MVPs to
            increase corporate rider activation.
          </p>
        </div>
        <div className="pr-role">
          <div className="pr-role-head">
            <span className="pr-company">GO ICON</span>
            <span className="pr-date">Spring 2025 · Chicago, IL</span>
          </div>
          <p className="pr-title">Product Manager MBA Intern</p>
          <p>
            Evaluated adjacent market expansion opportunities and scoped MVP
            concepts for a senior living SaaS platform.
          </p>
        </div>
        <div className="pr-role">
          <div className="pr-role-head">
            <span className="pr-company">Parker Remick</span>
            <span className="pr-date">2021–2024 · Seattle, WA</span>
          </div>
          <p className="pr-title">
            Analyst → Associate I → Associate II, GTM Strategy &amp; Market
            Intelligence
          </p>
          <p>
            Built scalable commercial systems and led global C-suite product and
            engineering searches. Promoted twice in 15 months.
          </p>
        </div>
        <div className="pr-role">
          <div className="pr-role-head">
            <span className="pr-company">Earlier</span>
            <span className="pr-date">2018–2020</span>
          </div>
          <p>
            Benhamou Global Ventures (Venture Associate), Netlify (Strategic
            Finance Intern), JPMorgan (Global Markets Summer Analyst), EY
            (Advisory Analyst), NovoEd (RevOps Analyst).
          </p>
        </div>
      </section>

      <section className="pr-section">
        <h2>Education</h2>
        <div className="pr-edu">
          <p>
            <strong>Kellogg School of Management</strong> — MBA, Marketing,
            Finance, and Technology Management. Dean's List. VP of Alumni
            Relations, KSA. Co-chair, Entrepreneurship Conference.
          </p>
          <p>
            <strong>Claremont McKenna College</strong> — B.A. Economics &amp;
            Psychology, Concentration in Accounting. Research Fellow, Kravis
            Leadership Institute.
          </p>
        </div>
      </section>

      <section className="pr-section">
        <h2>Toolkit</h2>
        <p>
          SQL, Python, Excel, Snowflake, Figma, Replit, Bolt, Lovable, n8n,
          GitHub, Linear · Financial Modeling (TTS / JPM), Six Sigma Green Belt,
          Google Digital Marketing · Languages: Hindi &amp; Indonesian (fluent),
          French (intermediate).
        </p>
      </section>

      <footer className="pr-footer">
        <span>guptau.com</span>
        <span>v.74</span>
      </footer>
    </div>);

}