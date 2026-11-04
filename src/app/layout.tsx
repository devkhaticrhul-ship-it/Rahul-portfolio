import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/ThemeContext';

export const metadata: Metadata = {
  title: 'Rahul Kumar | Aspiring Software Engineer',
  description:
    'Portfolio of Rahul Kumar, 2nd-year B.Tech CSE student passionate about Software Engineering, Full-Stack Development, AI/ML, and Problem Solving.',
  keywords: [
    'Rahul Kumar',
    'Software Engineer',
    'Portfolio',
    'B.Tech CSE',
    'Pacific School of Engineering',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript'
  ],
  authors: [{ name: 'Rahul Kumar' }],
  creator: 'Rahul Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rahul Kumar | Aspiring Software Engineer',
    description:
      'Computer Science Engineering student passionate about software development, emerging technologies, and solving real-world problems.',
    siteName: 'Rahul Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Kumar | Aspiring Software Engineer',
    description:
      'Computer Science Engineering student passionate about software development, emerging technologies, and solving real-world problems.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

