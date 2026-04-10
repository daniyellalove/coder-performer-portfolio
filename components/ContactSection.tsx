'use client';

import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';
import { ContactForm } from './ContactForm';
import { personalInfo } from '@/lib/content';

export function ContactSection() {
  const { mode } = useMode();
  const isDev = mode === 'dev';

  const socials = isDev
    ? [
        { label: 'GitHub', href: personalInfo.social.github },
        { label: 'LinkedIn', href: personalInfo.social.linkedin },
      ]
    : [
        { label: 'Instagram', href: personalInfo.social.instagram },
        { label: 'IMDb', href: personalInfo.social.imdb },
      ];

  return (
    <section id="contact" className="py-24" aria-label="Contact section">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        style={{ borderTop: '1px solid var(--border)', paddingTop: '6rem' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p
                className="text-xs font-medium uppercase tracking-[0.2em] mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {isDev ? '// contact' : '— contact'}
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--heading-font)',
                  fontStyle: isDev ? 'normal' : 'italic',
                }}
              >
                {isDev ? "Let's build something" : 'Casting & inquiries'}
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {isDev
                ? `I'm open to freelance projects, contract work, and full-time opportunities. Let's talk.`
                : `Available for commercial, film, print, and digital projects. Based in Houston / Cypress, TX.`}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                {personalInfo.email}
              </a>
              <div className="flex gap-5">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                    style={{ color: 'var(--text-secondary)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
