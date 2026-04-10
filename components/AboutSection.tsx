'use client';

import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';
import { personalInfo } from '@/lib/content';

export function AboutSection() {
  const { mode } = useMode();
  const isDev = mode === 'dev';

  return (
    <section id="about" className="py-24" aria-label="About section">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        style={{ borderTop: '1px solid var(--border)', paddingTop: '6rem' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] mb-3"
            style={{ color: 'var(--accent)' }}
          >
            {isDev ? '// about me' : '— about'}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--heading-font)',
              fontStyle: isDev ? 'normal' : 'italic',
            }}
          >
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {isDev ? personalInfo.devBio : personalInfo.performerBio}
            </p>
            <p
              className="text-base leading-relaxed border-l-2 pl-4"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--accent)',
                fontStyle: isDev ? 'normal' : 'italic',
              }}
            >
              {personalInfo.unifiedStory}
            </p>
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isDev ? (
              <DevSkills />
            ) : (
              <PerformerStats />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DevSkills() {
  return (
    <div>
      <h3
        className="text-sm font-medium uppercase tracking-[0.15em] mb-5"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        Tools & stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {personalInfo.stack.map(skill => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="px-3 py-1.5 text-sm font-mono rounded"
            style={{
              backgroundColor: 'var(--tag-bg)',
              color: 'var(--accent)',
              border: '1px solid var(--tag-border)',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function PerformerStats() {
  const stats = [
    { label: 'Height', value: personalInfo.stats.height },
    { label: 'Eyes', value: personalInfo.stats.eyes },
    { label: 'Hair', value: personalInfo.stats.hair },
    { label: 'Representation', value: personalInfo.stats.representation },
    { label: 'Location', value: personalInfo.location },
    { label: 'Type', value: 'Commercial · Film · Print' },
  ];

  return (
    <div>
      {/* Headshot placeholder */}
      <div
        className="aspect-[3/4] w-48 rounded-sm mb-6 flex items-center justify-center text-4xl font-serif italic select-none"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          color: 'var(--accent)',
          opacity: 0.5,
        }}
        aria-label="Headshot placeholder"
      >
        {personalInfo.initials}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map(s => (
          <div key={s.label}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
              {s.label}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
