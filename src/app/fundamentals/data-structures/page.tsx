import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DataStructuresPage() {
  return (
    <ContentLayout
      title="Data Structures"
      description="Learn about fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs."
    >
      <ContentSection title="Introduction to Data Structures">
        <p>
          Data structures are specialized formats for organizing, processing, retrieving, and storing data. Understanding data structures is crucial for writing efficient and scalable code.
        </p>
      </ContentSection>

      <ContentSection title="Arrays and Strings">
        <h3 className="text-lg font-medium text-white mb-2">Array Operations</h3>
        <CodeExample
          title="Array Implementation"
          code={`// Array operations in JavaScript
const arr = [1, 2, 3, 4, 5];

// Access elements
console.log(arr[0]);  // 1
console.log(arr[arr.length - 1]);  // 5

// Add elements
arr.push(6);  // [1, 2, 3, 4, 5, 6]
arr.unshift(0);  // [0, 1, 2, 3, 4, 5, 6]

// Remove elements
arr.pop();  // [0, 1, 2, 3, 4, 5]
arr.shift();  // [1, 2, 3, 4, 5]

// Array methods
const doubled = arr.map(x => x * 2);  // [2, 4, 6, 8, 10]
const filtered = arr.filter(x => x > 3);  // [4, 5]
const sum = arr.reduce((acc, curr) => acc + curr, 0);  // 15`}
          description="Examples of array operations"
        />
      </ContentSection>

      <ContentSection title="Linked Lists">
        <h3 className="text-lg font-medium text-white mb-2">Singly Linked List</h3>
        <CodeExample
          title="Linked List Implementation"
          code={`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Remove a node
  remove(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // Print the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}`}
          description="Implementation of a singly linked list"
        />
      </ContentSection>

      <ContentSection title="Stack and Queue">
        <h3 className="text-lg font-medium text-white mb-2">Stack Implementation</h3>
        <CodeExample
          title="Stack Implementation"
          code={`class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}`}
          description="Implementation of a stack data structure"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Queue Implementation</h3>
        <CodeExample
          title="Queue Implementation"
          code={`class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}`}
          description="Implementation of a queue data structure"
        />
      </ContentSection>

      <ContentSection title="Trees">
        <h3 className="text-lg font-medium text-white mb-2">Binary Tree</h3>
        <CodeExample
          title="Binary Tree Implementation"
          code={`class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inorderTraversal(node) {
    if (node) {
      this.inorderTraversal(node.left);
      console.log(node.value);
      this.inorderTraversal(node.right);
    }
  }

  // Pre-order traversal
  preorderTraversal(node) {
    if (node) {
      console.log(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  }

  // Post-order traversal
  postorderTraversal(node) {
    if (node) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      console.log(node.value);
    }
  }
}`}
          description="Implementation of a binary tree"
        />
      </ContentSection>

      <ContentSection title="Graphs">
        <h3 className="text-lg font-medium text-white mb-2">Graph Implementation</h3>
        <CodeExample
          title="Graph Implementation"
          code={`class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.vertices.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.vertices.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1); // For undirected graph
  }

  // Depth-First Search
  dfs(startVertex) {
    const visited = new Set();
    this.dfsUtil(startVertex, visited);
  }

  dfsUtil(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);
    for (const neighbor of this.vertices.get(vertex)) {
      if (!visited.has(neighbor)) {
        this.dfsUtil(neighbor, visited);
      }
    }
  }

  // Breadth-First Search
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      for (const neighbor of this.vertices.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}`}
          description="Implementation of a graph with DFS and BFS"
        />
      </ContentSection>

      <ContentSection title="Hash Tables">
        <h3 className="text-lg font-medium text-white mb-2">Hash Table Implementation</h3>
        <CodeExample
          title="Hash Table Implementation"
          code={`class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists
    const existingItem = bucket.find(item => item[0] === key);
    if (existingItem) {
      existingItem[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const item = bucket.find(item => item[0] === key);
    return item ? item[1] : undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const itemIndex = bucket.findIndex(item => item[0] === key);
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
    }
  }
}`}
          description="Implementation of a hash table"
        />
      </ContentSection>

      <ContentSection title="Time Complexity">
        <ul className="list-disc list-inside space-y-2">
          <li>Arrays: O(1) access, O(n) insertion/deletion</li>
          <li>Linked Lists: O(n) access, O(1) insertion/deletion</li>
          <li>Stacks: O(1) push/pop</li>
          <li>Queues: O(1) enqueue/dequeue</li>
          <li>Binary Trees: O(log n) average case operations</li>
          <li>Hash Tables: O(1) average case operations</li>
          <li>Graphs: O(V + E) for traversal</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 