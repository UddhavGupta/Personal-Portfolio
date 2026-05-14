import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, BookOpen, Github, MapPin } from 'lucide-react';
import { Signature } from './Signature';
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
              href="https://beliapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors min-h-[44px]"
              style={{
                color: 'rgba(245, 239, 230, 0.85)'
              }}
              aria-label="Beli, @camtraveller">
              
              <MapPin
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                style={{
                  color: 'var(--champagne)'
                }} />
              
              <span className="border-b border-transparent group-hover:border-champagne transition-colors pb-0.5">
                Beli
              </span>
              <span
                className="text-xs italic font-light"
                style={{
                  color: 'rgba(245, 239, 230, 0.55)'
                }}>
                
                @camtraveller
              </span>
            </a>
          </div>

          <div
            className="pt-10"
            style={{
              borderTop: '1px solid rgba(200, 169, 119, 0.15)'
            }}>
            
            {/* Hand-drawn signature */}
            <div className="mb-6 -ml-2">
              <Signature width={220} />
            </div>

            <p
              className="text-sm italic font-light leading-relaxed"
              style={{
                color: 'rgba(245, 239, 230, 0.55)'
              }}>
              
              Also on an eternal quest for the best coffee in every city I land
              in. Recommendations welcome.
            </p>
            <p
              className="text-[11px] tracking-wide font-light leading-relaxed mt-3"
              style={{
                color: 'rgba(245, 239, 230, 0.4)'
              }}>
              
              <span
                className="luxe-caps"
                style={{
                  color: 'var(--champagne)',
                  fontSize: '0.55rem'
                }}>
                
                Easter egg
              </span>
              <span className="mx-2 opacity-50">·</span>
              Type{' '}
              <kbd
                className="px-1.5 py-0.5 rounded text-[10px] font-mono tracking-normal"
                style={{
                  border: '1px solid rgba(200, 169, 119, 0.35)',
                  color: 'rgba(245, 239, 230, 0.75)',
                  background: 'rgba(255,255,255,0.02)'
                }}>
                
                coffee
              </kbd>{' '}
              anywhere to see my cafés map, then follow me on Beli
              <span className="italic"> @camtraveller</span> for the rest.
            </p>
          </div>
        </div>
      </motion.div>
    </section>);

}