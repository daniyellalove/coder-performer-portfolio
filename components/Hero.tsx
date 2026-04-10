'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from './ModeProvider';
import { HeroCode } from './HeroCode';
import { FilmSlate } from './FilmSlate';
import { personalInfo } from '@/lib/content';

export function Hero() {
  const { mode } = useMode();
  const isDev = mode === 'dev';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
      aria-label="Hero section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <motion.p
            key={`eyebrow-${mode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--accent)' }}
          >
            {isDev ? '// Available for work' : 'Houston / Cypress, TX'}
          </motion.p>

          <div>
            <motion.h1
              key={`name-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--heading-font)',
                fontStyle: isDev ? 'normal' : 'italic',
              }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              key={`title-${mode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl mt-3 font-medium"
              style={{
                color: 'var(--accent)',
                fontFamily: isDev ? 'var(--font-mono)' : 'var(--font-serif)',
                fontStyle: isDev ? 'normal' : 'italic',
              }}
            >
              {isDev ? personalInfo.devTitle : personalInfo.performerTitle}
            </motion.p>
          </div>

          <motion.p
            key={`subtitle-${mode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg leading-relaxed max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isDev ? personalInfo.devSubtitle : personalInfo.performerSubtitle}
          </motion.p>

          <motion.div
            key={`cta-${mode}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-semibold text-sm uppercase tracking-widest transition-all duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
              style={{
                backgroundColor: 'var(--accent)',
                color: isDev ? '#fff' : '#0e0e0e',
                borderRadius: isDev ? '4px' : '9999px',
              }}
            >
              {isDev ? 'Get in touch' : 'Casting inquiries'}
            </a>
          </motion.div>
        </div>

        {/* Right: visual */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            {isDev ? (
              <motion.div
                key="code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HeroCode />
              </motion.div>
            ) : (
              <motion.div
                key="slate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FilmSlate />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
