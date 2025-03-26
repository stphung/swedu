export interface Node {
  id: string;
  label: string;
  type: string;
  color: string;
  size: number;
  font: {
    size: number;
  };
  connections: string[];
} 