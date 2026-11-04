'use client';

import React from 'react';
import { ACHIEVEMENTS_CONFIG } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

export default function Certifications() {
  if (!ACHIEVEMENTS_CONFIG.enabled) {
    // Discreet placeholder notice respecting the accuracy rule
    return (
      <section className="py-8 bg-gray-50/30 dark:bg-dark-surface/30 border-y border-dashed border-gray-200 dark:border-dark-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/60 dark:bg-dark-surface/60 border border-gray-200 dark:border-dark-border text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-sky-500 shrink-0" />
              <span>
                <strong className="text-gray-900 dark:text-gray-200 font-medium">
                  Achievements & Certifications:
                </strong>{' '}
                Currently preparing for verified software engineering and cloud certifications.
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-400 bg-gray-100 dark:bg-dark-card px-2 py-0.5 rounded">
              Configurable in src/data/portfolioData.ts
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            05. Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_CONFIG.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <Award className="w-6 h-6 text-sky-500 mb-3" />
                <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Issued by {item.issuer} • {item.date}
                </p>
              </div>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-600 font-medium"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

