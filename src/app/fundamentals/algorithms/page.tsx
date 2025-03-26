import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function AlgorithmsPage() {
  return (
    <ContentLayout
      title="Algorithms"
      description="Learn about fundamental algorithms and their implementations in programming."
    >
      <ContentSection title="Introduction to Algorithms">
        <p>
          An algorithm is a step-by-step procedure or formula for solving a problem. Understanding algorithms is crucial for writing efficient and scalable code.
        </p>
      </ContentSection>

      <ContentSection title="Searching Algorithms">
        <h3 className="text-lg font-medium text-white mb-2">Linear Search</h3>
        <p>
          Linear search sequentially checks each element in a list until a match is found.
        </p>
        <CodeExample
          title="Linear Search Implementation"
          code={`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`}
          description="Basic linear search implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Binary Search</h3>
        <p>
          Binary search efficiently finds an element in a sorted array by repeatedly dividing the search interval in half.
        </p>
        <CodeExample
          title="Binary Search Implementation"
          code={`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`}
          description="Binary search implementation for sorted arrays"
        />
      </ContentSection>

      <ContentSection title="Sorting Algorithms">
        <h3 className="text-lg font-medium text-white mb-2">Bubble Sort</h3>
        <p>
          Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
        </p>
        <CodeExample
          title="Bubble Sort Implementation"
          code={`function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`}
          description="Bubble sort implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Quick Sort</h3>
        <p>
          Quick sort is an efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.
        </p>
        <CodeExample
          title="Quick Sort Implementation"
          code={`function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}`}
          description="Quick sort implementation"
        />
      </ContentSection>

      <ContentSection title="Graph Algorithms">
        <h3 className="text-lg font-medium text-white mb-2">Depth-First Search (DFS)</h3>
        <p>
          DFS explores a graph by going as deep as possible along each branch before backtracking.
        </p>
        <CodeExample
          title="DFS Implementation"
          code={`function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`}
          description="Depth-first search implementation for graphs"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Breadth-First Search (BFS)</h3>
        <p>
          BFS explores a graph level by level, visiting all vertices at the current depth before moving to vertices at the next depth level.
        </p>
        <CodeExample
          title="BFS Implementation"
          code={`function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`}
          description="Breadth-first search implementation for graphs"
        />
      </ContentSection>

      <ContentSection title="Algorithm Analysis">
        <p>
          Understanding algorithm complexity is crucial for choosing the right algorithm:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Time Complexity:</strong> How the running time grows with input size</li>
          <li><strong>Space Complexity:</strong> How the memory usage grows with input size</li>
          <li><strong>Big O Notation:</strong> Describes the upper bound of an algorithm's growth rate</li>
          <li><strong>Big Omega Notation:</strong> Describes the lower bound of an algorithm's growth rate</li>
          <li><strong>Big Theta Notation:</strong> Describes both upper and lower bounds</li>
        </ul>
      </ContentSection>

      <ContentSection title="Algorithm Design Techniques">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Divide and Conquer:</strong> Break problem into smaller subproblems</li>
          <li><strong>Dynamic Programming:</strong> Solve complex problems by breaking them down into simpler subproblems</li>
          <li><strong>Greedy Algorithms:</strong> Make locally optimal choices at each step</li>
          <li><strong>Backtracking:</strong> Try different solutions and backtrack when needed</li>
          <li><strong>Recursion:</strong> Solve problems by breaking them into smaller instances</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 