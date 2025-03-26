'use client';

import { Node } from '@/types/diagram';

interface LSPDiagramProps {
  nodes: Node[];
}

export default function LSPDiagram({ nodes }: LSPDiagramProps) {
  // Calculate positions for nodes
  const positionedNodes = nodes.map((node, index) => ({
    ...node,
    x: 100 + (index * 200),
    y: 100,
  }));

  return (
    <svg width="800" height="200" className="w-full h-full">
      {/* Render connections */}
      {positionedNodes.map((node) =>
        node.connections.map((connectionId) => {
          const start = positionedNodes.find((n) => n.id === node.id);
          const end = positionedNodes.find((n) => n.id === connectionId);
          if (!start || !end) return null;
          
          return (
            <line
              key={`${node.id}-${connectionId}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#4F46E5"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          );
        })
      )}

      {/* Render nodes */}
      {positionedNodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size / 2}
            fill={node.color}
            stroke="#4F46E5"
            strokeWidth="2"
            filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
          />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={node.font.size}
            fontWeight="500"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
} 