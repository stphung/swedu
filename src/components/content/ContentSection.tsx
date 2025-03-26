import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function ContentSection({ title, children, id }: ContentSectionProps) {
  return (
    <section id={id} className="card hover-lift">
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        {title}
      </h2>
      <div className="space-y-4 text-gray-300">
        {children}
      </div>
    </section>
  );
} 