'use client';

import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, FEATURED_PROJECTS } from '../data/portfolioData';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Code,
  FolderGit2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:fixed print:inset-0">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0f121a] border border-gray-200 dark:border-dark-border p-6 sm:p-10 shadow-2xl text-left print:border-none print:shadow-none print:max-h-none print:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100 dark:border-dark-border print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Resume Preview • Printable View
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500 hover:bg-sky-600 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Document Canvas */}
        <div className="space-y-6 text-gray-900 dark:text-gray-100 font-sans text-xs">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-dark-border pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.education.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.contact.email}
              </span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
              Career Objective
            </h2>
            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              Aspiring Software Engineer and 2nd-year B.Tech CSE student eager to develop innovative software solutions, strengthen engineering skills, work on real-world projects, and secure opportunities to grow.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
              Education
            </h2>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                    {PERSONAL_INFO.education.degree} — {PERSONAL_INFO.education.field}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-medium">
                  {PERSONAL_INFO.education.status}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="p-2.5 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {cat.title}:
                  </span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
              Featured Project
            </h2>
            {FEATURED_PROJECTS.slice(0, 1).map((proj) => (
              <div
                key={proj.id}
                className="p-3.5 rounded-lg bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border space-y-1.5"
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                    {proj.status}
                  </span>
                </div>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  {proj.tagline}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {proj.description}
                </p>
                <div className="text-[11px] text-gray-500 pt-1">
                  <strong>Stack:</strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

