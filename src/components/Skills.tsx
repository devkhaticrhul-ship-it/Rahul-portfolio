'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck, Info, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  const [showEditorTip, setShowEditorTip] = useState(false);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              02. Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Technical Skills & Tooling
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
              Strictly verified languages, libraries, and tools I use for development. No arbitrary percentage bars or fabricated proficiency metrics.
            </p>
          </div>

          {/* Verification Badge & Info Toggle */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Truthful Profile</span>
            </span>

            <button
              onClick={() => setShowEditorTip(!showEditorTip)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 border border-gray-200 dark:border-dark-border"
              title="How to customize skills"
              aria-label="How to customize skills"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tip Banner (Togglable) */}
        {showEditorTip && (
          <div className="mb-8 p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-800 dark:text-sky-200 flex items-start gap-3">
            <Info className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold mb-1">Developer Customization Guide:</p>
              <p>
                You can easily add, update, or reorganize any skill in{' '}
                <code className="bg-sky-500/20 px-1 py-0.5 rounded font-mono">
                  src/data/portfolioData.ts
                </code>
                . As you learn new languages (like Python, Java) or frameworks, simply add them to their respective category array.
              </p>
            </div>
          </div>
        )}

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border hover:border-sky-500/30 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 bg-gray-100 dark:bg-dark-card px-2 py-0.5 rounded">
                    {category.skills.length} verified
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-dark-card text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-dark-border/80 hover:border-sky-400/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-sky-500" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Editable placeholder slot hint */}
              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-dark-border/50 text-[11px] text-gray-400 font-mono">
                + editable slot in data config
              </div>
            </div>
          ))}
        </div>

        {/* Foundational Note */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-surface dark:to-[#161a25] border border-gray-200 dark:border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Active Learning Queue
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Currently practicing Data Structures in C, advanced TypeScript architecture, and exploring introductory PyTorch & Scikit-Learn workflows.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-sky-500 dark:text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full whitespace-nowrap">
            2nd Year Curriculum
          </span>
        </div>
      </div>
    </section>
  );
}

