'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import {
  ExternalLink,
  Code2,
  FolderGit2,
  Eye,
  Sparkles,
  Car,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'AI / ML'>('All');

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative bg-gray-50/50 dark:bg-[#0c0e15]/60 border-y border-gray-200/60 dark:border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              03. Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
              Real code, real architectural exploration. Featuring active work and scalable system designs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-dark-surface border border-gray-200 dark:border-dark-border">
            {(['All', 'Full-Stack', 'AI / ML'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isCarverse = project.id === 'carverse';

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-surface border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isCarverse
                    ? 'border-sky-500/40 dark:border-sky-500/30 ring-1 ring-sky-500/10'
                    : 'border-gray-200 dark:border-dark-border'
                }`}
              >
                {/* Visual Banner Preview */}
                <div
                  className={`h-48 relative overflow-hidden flex items-center justify-center p-6 ${
                    isCarverse
                      ? 'bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#11141e] dark:to-[#171b29] text-gray-400'
                  }`}
                >
                  {/* Subtle Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  {isCarverse ? (
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-2 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Car className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-sky-300 font-semibold">
                        CARVERSE
                      </span>
                      <span className="text-[11px] text-gray-300 mt-0.5">
                        Automotive Information Platform
                      </span>
                    </div>
                  ) : (
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-dark-card border border-gray-300 dark:border-dark-border flex items-center justify-center text-gray-400 mb-2">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                        Reserved Project Slot
                      </span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-tight shadow-sm ${
                        project.status === 'In Development'
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-800/80 text-gray-300 backdrop-blur-md'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/40 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-1">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={project.githubUrlPlaceholder ? 'Placeholder GitHub link' : 'View Code'}
                        className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={project.liveUrlPlaceholder ? 'Placeholder Demo link' : 'View Demo'}
                          className="p-1.5 rounded-lg text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
