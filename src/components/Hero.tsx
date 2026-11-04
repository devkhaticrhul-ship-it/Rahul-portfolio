'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import {
  ArrowDown,
  FileText,
  Mail,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.availability.detail}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{' '}
              <span className="text-sky-500 dark:text-sky-400">
                {PERSONAL_INFO.name}
              </span>
              .
            </h1>

            {/* Headline */}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-700 dark:text-gray-200">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Projects
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links & Placeholders */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-border/80 w-full">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium mb-3">
                <span>Connect & Profiles</span>
                <span className="text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  placeholders editable in src/data
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  return (
                    <div
                      key={item.platform}
                      className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-gray-100 dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-sky-500/50 transition-colors"
                    >
                      {item.icon === 'github' && <GithubIcon className="w-3.5 h-3.5" />}
                      {item.icon === 'linkedin' && <LinkedinIcon className="w-3.5 h-3.5" />}
                      {item.icon === 'mail' && <Mail className="w-3.5 h-3.5" />}
                      <span>{item.platform}</span>
                      <button
                        onClick={() => copyToClipboard(item.url, item.platform)}
                        title={`Copy ${item.platform} link`}
                        className="ml-1 text-gray-400 hover:text-sky-400 p-0.5"
                      >
                        {copiedLink === item.platform ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Code / Terminal Interactive Element */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0d1117] border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800 text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-gray-400 text-[11px] font-sans">
                    rahul_profile.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-sky-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 text-gray-300 space-y-2 leading-relaxed overflow-x-auto">
                <div className="text-gray-500">
                  {'// Rahul Kumar — Computer Science & Engineering'}
                </div>
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-yellow-300">SoftwareEngineer</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">name</span>:{' '}
                  <span className="text-emerald-400">&quot;Rahul Kumar&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">education</span>:{' '}
                  <span className="text-emerald-400">&quot;B.Tech CSE (2nd Year)&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">college</span>:{' '}
                  <span className="text-emerald-400">&quot;Pacific School of Engineering, Gujarat&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">interests</span>: [
                  <span className="text-amber-300">&quot;AI&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Machine Learning&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Full-Stack&quot;</span>
                  ];
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">verifiedTools</span>: [
                  <span className="text-emerald-300">&quot;C&quot;</span>,{' '}
                  <span className="text-emerald-300">&quot;Git&quot;</span>,{' '}
                  <span className="text-emerald-300">&quot;VS Code&quot;</span>
                  ];
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">activeProject</span>:{' '}
                  <span className="text-emerald-400">&quot;Carverse&quot;</span>;
                </div>
                <div>{'}'}</div>
                <div className="pt-2 text-gray-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-sky-400">$</span>
                  <span className="text-gray-200">compile --optimize</span>
                  <span className="w-1.5 h-4 bg-sky-400 inline-block animate-pulse" />
                </div>
                <div className="text-emerald-400 text-[11px] pt-1">
                  ✓ Ready to build reliable, high-performance software.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
