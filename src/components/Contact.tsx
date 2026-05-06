import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, BookOpen, Github, FileText } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-16 mb-12">
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
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative p-12 sm:p-20 rounded-3xl overflow-hidden luxe-card"
        style={{
          backgroundColor: 'var(--contact-bg)',
          backgroundImage:
          'radial-gradient(ellipse at top right, rgba(200, 169, 119, 0.08), transparent 60%), radial-gradient(ellipse at bottom left, rgba(0,0,0,0.25), transparent 70%)'
        }}>
        
        {/* Subtle gold border accent */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: '1px solid rgba(200, 169, 119, 0.15)'
          }} />
        

        <div className="relative max-w-2xl">
          <p className="luxe-caps text-champagne mb-6">In Correspondence</p>

          <h2
            className="text-3xl sm:text-5xl font-light text-white mb-8 tracking-tight"
            style={{
              color: '#F5EFE6'
            }}>
            
            Let's connect.
          </h2>

          <p
            className="text-lg mb-12 leading-relaxed font-light"
            style={{
              color: 'rgba(245, 239, 230, 0.75)'
            }}>
            
            I'm always open to discussing product strategy, loyalty ecosystems,
            or the intersection of AI and customer experience.
          </p>

          <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-4 mb-16">
            <a
              href="mailto:uddhavgupta1998@gmail.com"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: '#F5EFE6'
              }}>
              
              <Mail
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                Email
              </span>
            </a>
            <a
              href="https://linkedin.com/in/guptauddhav"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: '#F5EFE6'
              }}>
              
              <Linkedin
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                LinkedIn
              </span>
            </a>
            <a
              href="https://beonepercentbetter.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: '#F5EFE6'
              }}>
              
              <BookOpen
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                Substack
              </span>
            </a>
            <a
              href="https://github.com/uddhavgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: '#F5EFE6'
              }}>
              
              <Github
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                GitHub
              </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: '#F5EFE6'
              }}>
              
              <FileText
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                Resume
              </span>
            </a>
          </div>

          <div
            className="pt-10"
            style={{
              borderTop: '1px solid rgba(200, 169, 119, 0.15)'
            }}>
            
            <p
              className="text-sm italic font-light leading-relaxed"
              style={{
                color: 'rgba(245, 239, 230, 0.55)'
              }}>
              
              Also on an eternal quest for the best coffee in every city I land
              in. Recommendations welcome.
            </p>
          </div>
        </div>
      </motion.div>
    </section>);

}