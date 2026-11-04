'use client';

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Cpu,
  GraduationCap,
  Lightbulb,
  Compass,
  ArrowRight,
  Code
} from 'lucide-react';

export default function About() {
  const { about, education } = PERSONAL_INFO;

  return (
    <section id="about" className="py-20 relative bg-gray-50/50 dark:bg-[#0c0e15]/60 border-y border-gray-200/60 dark:border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            01. Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            A grounded overview of my academic path, my engineering mindset, and what drives my work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            <p className="text-lg font-medium text-gray-900 dark:text-white leading-snug">
              {about.lead}
            </p>

            {about.paragraphs.map((para, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300">
                {para}
              </p>
            ))}

            {/* Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.principles.map((principle) => (
                <div
                  key={principle.title}
                  className="p-4 rounded-xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border/80 shadow-sm"
                >
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {principle.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info & Stats Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                    Academic Base
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Pacific School of Engineering, Gujarat
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-dark-border/60">
                  <span className="text-gray-500 dark:text-gray-400">Degree</span>
                  <span className="font-medium text-gray-900 dark:text-gray-200">
                    B.Tech in CSE
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-dark-border/60">
                  <span className="text-gray-500 dark:text-gray-400">Status</span>
                  <span className="font-medium text-sky-600 dark:text-sky-400">
                    Currently Pursuing (2nd Year)
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100 dark:border-dark-border/60">
                  <span className="text-gray-500 dark:text-gray-400">Location</span>
                  <span className="font-medium text-gray-900 dark:text-gray-200">
                    Gujarat, India
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-gray-500 dark:text-gray-400">Core Interests</span>
                  <span className="font-medium text-right text-gray-900 dark:text-gray-200">
                    AI, ML & Full-Stack Systems
                  </span>
                </div>
              </div>
            </div>

            {/* Engineering Mindset Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/5 to-indigo-500/5 dark:from-dark-surface dark:to-dark-card border border-sky-500/20 dark:border-dark-border shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-500 mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                &ldquo;Master the fundamentals first. Build with precision, write code for readability, and approach every engineering challenge with humility and disciplined curiosity.&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200/60 dark:border-dark-border/60">
                <span>Code with Purpose</span>
                <span className="font-mono text-sky-500 font-medium">Rahul Kumar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

