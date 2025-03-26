import React from 'react';

interface CodeExampleProps {
  title: string;
  code: string;
  language?: string;
  description?: string;
}

export default function CodeExample({ title, code, language = 'typescript', description }: CodeExampleProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      {description && (
        <p className="text-gray-300">{description}</p>
      )}
      <pre className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
} 