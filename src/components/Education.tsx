'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  CheckCircle2,
  Building
} from 'lucide-react';

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            04. Formal Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Academic Background
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            My university trajectory and core computer science studies.
          </p>
        </div>

        {/* Education Timeline / Showcase Card */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 dark:border-sky-500/30 space-y-8">
            {/* Degree Node */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-[#090a0f]" />

              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{education.status}</span>
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {education.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <h4 className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
                  {education.field}
                </h4>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500 dark:text-gray-400 mt-3 pt-3 border-t border-gray-100 dark:border-dark-border">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-gray-400" />
                    <span>{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* Highlights / Modules */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-dark-border">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Curriculum & Learning Focus
                  </h5>
                  <ul className="space-y-2">
                    {education.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

