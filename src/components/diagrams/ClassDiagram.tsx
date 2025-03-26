'use client';

interface ClassNode {
  id: string;
  label: string;
  type: 'class' | 'interface' | 'abstract';
  attributes?: string[];
  methods?: string[];
  connections: {
    target: string;
    type: 'extends' | 'implements' | 'uses';
  }[];
}

interface ClassDiagramProps {
  nodes: ClassNode[];
}

export default function ClassDiagram({ nodes }: ClassDiagramProps) {
  // Calculate positions for nodes
  const positionedNodes = nodes.map((node, index) => ({
    ...node,
    x: 100 + (index * 300),
    y: 100,
  }));

  return (
    <svg width="1000" height="400" className="w-full h-full">
      {/* Render connections */}
      {positionedNodes.map((node) =>
        node.connections.map((connection) => {
          const start = positionedNodes.find((n) => n.id === node.id);
          const end = positionedNodes.find((n) => n.id === connection.target);
          if (!start || !end) return null;

          // Calculate arrow position
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const angle = Math.atan2(dy, dx);
          const arrowSize = 10;

          return (
            <g key={`${node.id}-${connection.target}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#4F46E5"
                strokeWidth="2"
                strokeDasharray={connection.type === 'implements' ? "5,5" : "none"}
              />
              {/* Arrow */}
              <path
                d={`M ${end.x - arrowSize * Math.cos(angle - Math.PI / 6)} ${
                  end.y - arrowSize * Math.sin(angle - Math.PI / 6)
                } L ${end.x} ${end.y} L ${
                  end.x - arrowSize * Math.cos(angle + Math.PI / 6)
                } ${end.y - arrowSize * Math.sin(angle + Math.PI / 6)}`}
                fill="#4F46E5"
              />
              {/* Connection label */}
              <text
                x={(start.x + end.x) / 2}
                y={(start.y + end.y) / 2 - 10}
                textAnchor="middle"
                fill="#4F46E5"
                fontSize="12"
                fontWeight="500"
              >
                {connection.type}
              </text>
            </g>
          );
        })
      )}

      {/* Render nodes */}
      {positionedNodes.map((node) => (
        <g key={node.id}>
          {/* Class box */}
          <rect
            x={node.x - 100}
            y={node.y - 60}
            width="200"
            height={40 + (node.attributes?.length || 0) * 20 + (node.methods?.length || 0) * 20}
            fill="#1F2937"
            stroke="#4F46E5"
            strokeWidth="2"
            rx="8"
            filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"
          />
          {/* Class name */}
          <text
            x={node.x}
            y={node.y - 40}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="600"
          >
            {node.type === 'interface' ? '«interface»' : node.type === 'abstract' ? '«abstract»' : ''} {node.label}
          </text>
          {/* Separator line */}
          <line
            x1={node.x - 100}
            y1={node.y - 30}
            x2={node.x + 100}
            y2={node.y - 30}
            stroke="#4F46E5"
            strokeWidth="1"
          />
          {/* Attributes */}
          {node.attributes?.map((attr, index) => (
            <text
              key={`attr-${index}`}
              x={node.x - 90}
              y={node.y - 10 + index * 20}
              fill="#9CA3AF"
              fontSize="12"
            >
              {attr}
            </text>
          ))}
          {/* Methods separator */}
          {node.methods && node.methods.length > 0 && (
            <line
              x1={node.x - 100}
              y1={node.y - 10 + (node.attributes?.length || 0) * 20}
              x2={node.x + 100}
              y2={node.y - 10 + (node.attributes?.length || 0) * 20}
              stroke="#4F46E5"
              strokeWidth="1"
            />
          )}
          {/* Methods */}
          {node.methods?.map((method, index) => (
            <text
              key={`method-${index}`}
              x={node.x - 90}
              y={node.y + 10 + (node.attributes?.length || 0) * 20 + index * 20}
              fill="#9CA3AF"
              fontSize="12"
            >
              {method}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
} 