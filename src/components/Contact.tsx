'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean submission handling without misleading backend claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Generate mailto link with current input values
  const mailtoLink = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Rahul,\n\nMy name is ${formData.name || '[Name]'}.\n\n${formData.message || ''}\n\nFrom: ${
      formData.email || ''
    }`
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-gray-50/50 dark:bg-[#0c0e15]/60 border-t border-gray-200/60 dark:border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-500 font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            06. Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s Build Something Together.
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Whether you want to discuss software engineering, potential internships, project collaborations, or open-source ideas, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Get in Touch Directly
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Feel free to email me directly or connect through professional networks.
              </p>

              <div className="space-y-4 text-xs">
                {/* Email item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="truncate font-mono text-gray-700 dark:text-gray-300">
                      {PERSONAL_INFO.contact.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-gray-400 hover:text-sky-500 transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{PERSONAL_INFO.contact.location}</span>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-hover border border-gray-200 dark:border-dark-border text-gray-800 dark:text-gray-200 font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-hover border border-gray-200 dark:border-dark-border text-gray-800 dark:text-gray-200 font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Note on Response Time */}
            <div className="p-4 rounded-xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/20 text-xs text-gray-600 dark:text-gray-300 flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Quick Response Guarantee
                </p>
                <p className="mt-0.5 text-gray-500 dark:text-gray-400">
                  I typically respond within 24 hours to inquiries regarding projects, internships, and engineering discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-dark-border">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-gray-400 bg-gray-100 dark:bg-dark-card px-2.5 py-1 rounded">
                  Active Form with Validation
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      Message Successfully Validated!
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Since this is currently running as a static demonstration, click below to open your preferred mail app with your message pre-filled.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Default Mail Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
                    >
                      Compose Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Alex Johnson"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-card border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.name
                            ? 'border-rose-500 ring-1 ring-rose-500'
                            : 'border-gray-200 dark:border-dark-border'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-card border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.email
                            ? 'border-rose-500 ring-1 ring-rose-500'
                            : 'border-gray-200 dark:border-dark-border'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Internship Inquiry / Software Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-card border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.subject
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-gray-200 dark:border-dark-border'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Write your note or project requirements here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-dark-card border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.message
                          ? 'border-rose-500 ring-1 ring-rose-500'
                          : 'border-gray-200 dark:border-dark-border'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Actions */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Client-validated • No spam or trackers.
                    </p>

                    <div className="flex items-center gap-3">
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card font-medium transition-colors"
                        title="Draft directly in mail client"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Mail Client</span>
                      </a>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Validating...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
