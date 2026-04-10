'use client';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useMode } from './ModeProvider';
import { ProjectCard } from './ProjectCard';
import { CreditCard } from './CreditCard';
import { projects, credits } from '@/lib/content';

export function WorkSection() {
  const { mode } = useMode();
  const isDev = mode === 'dev';

  return (
    <section id="work" className="py-24" aria-label="Work section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            {isDev ? '// selected work' : '— selected credits'}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--heading-font)',
              fontStyle: isDev ? 'normal' : 'italic',
            }}
          >
            {isDev ? 'Projects' : 'Credits'}
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {isDev
              ? projects.map(project => <ProjectCard key={project.id} project={project} />)
              : credits.map(credit => <CreditCard key={credit.id} credit={credit} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
