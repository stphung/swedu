'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  diagram: string;
}

export default function MermaidDiagram({ diagram }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('');
  const mermaidRef = useRef<HTMLDivElement>(null);
  const diagramId = useRef(`mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    // Reset mermaid's state
    mermaid.contentLoaded();

    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#4F46E5',
        primaryTextColor: '#fff',
        primaryBorderColor: '#4F46E5',
        lineColor: '#4F46E5',
        secondaryColor: '#1F2937',
        tertiaryColor: '#1F2937',
        fontFamily: 'monospace',
      },
    });

    // Render the diagram
    mermaid.render(diagramId.current, diagram).then(({ svg }) => {
      setSvg(svg);
    });

    // Cleanup
    return () => {
      setSvg('');
    };
  }, [diagram]);

  return (
    <div 
      ref={mermaidRef} 
      className="w-full overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
      key={diagram} // Force remount when diagram changes
    />
  );
} 