'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg group"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Thumbnail */}
      <div
        className="aspect-video flex items-center justify-center text-3xl font-mono font-bold select-none"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border)',
          color: 'var(--accent)',
          opacity: 0.4,
        }}
        aria-hidden="true"
      >
        {`{ }`}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-semibold text-base leading-snug transition-colors duration-300 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}
          >
            {project.title}
          </h3>
          {project.year && (
            <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
              {project.year}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded font-mono"
              style={{
                backgroundColor: 'var(--tag-bg)',
                color: 'var(--accent)',
                border: '1px solid var(--tag-border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text-muted)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-xs font-medium transition-colors duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              style={{ color: 'var(--accent)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-xs font-medium transition-colors duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              style={{ color: 'var(--text-secondary)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
