'use client';

import React from 'react';
import { PERSONAL_INFO, NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolioData';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-[#07080d] py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100 dark:border-dark-border/60">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                {PERSONAL_INFO.title} • Gujarat, India
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.platform}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-dark-surface border border-gray-200 dark:border-dark-border transition-colors"
              >
                {item.icon === 'github' && <GithubIcon className="w-3.5 h-3.5" />}
                {item.icon === 'linkedin' && <LinkedinIcon className="w-3.5 h-3.5" />}
                {item.icon === 'mail' && <Mail className="w-3.5 h-3.5" />}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-sky-500 hover:bg-sky-500/10 border border-sky-500/20 transition-colors ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-[11px] gap-2">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with care, curiosity, and code.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
