'use client';

import React from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Calendar
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header & Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'In Development'
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20'
            }`}
          >
            {project.status}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-1">
          {project.tagline}
        </p>

        {/* Extended Description */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.extendedDescription || project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-dark-card text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-dark-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Placeholders note */}
        {(project.githubUrlPlaceholder || project.liveUrlPlaceholder) && (
          <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
            <span>
              Links are currently placeholders and can be replaced with your live GitHub URL and Vercel/Netlify deployment in{' '}
              <code className="font-mono">src/data/portfolioData.ts</code>.
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-dark-border flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>
                {project.githubUrlPlaceholder ? 'GitHub Repo (Placeholder)' : 'View Source'}
              </span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>
                {project.liveUrlPlaceholder ? 'Live Demo (Placeholder)' : 'Live Demo'}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
