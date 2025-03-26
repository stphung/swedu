import React from 'react';

interface ContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ContentLayout({ title, description, children }: ContentLayoutProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-300">
          {description}
        </p>
      </header>
      <div className="space-y-8">
        {children}
      </div>
    </article>
  );
} 