import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function TestingPage() {
  return (
    <ContentLayout
      title="Testing"
      description="Learn about software testing principles, types of tests, and testing best practices."
    >
      <ContentSection title="Introduction to Testing">
        <p>
          Software testing is the process of evaluating a program to identify bugs and ensure it meets specified requirements. It's a crucial part of software development that helps maintain code quality and reliability.
        </p>
      </ContentSection>

      <ContentSection title="Types of Testing">
        <h3 className="text-lg font-medium text-white mb-2">Unit Testing</h3>
        <p>
          Unit testing involves testing individual components or functions in isolation.
        </p>
        <CodeExample
          title="Unit Test Example"
          code={`// Function to test
function add(a: number, b: number): number {
  return a + b;
}

// Unit test
describe('add function', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
});`}
          description="Basic unit test example using Jest"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Integration Testing</h3>
        <p>
          Integration testing verifies that different components work together correctly.
        </p>
        <CodeExample
          title="Integration Test Example"
          code={`// API endpoint test
describe('User API', () => {
  test('creates and retrieves user', async () => {
    // Create user
    const createResponse = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'John' })
    });
    const user = await createResponse.json();

    // Retrieve user
    const getResponse = await fetch(\`/api/users/\${user.id}\`);
    const retrievedUser = await getResponse.json();

    expect(retrievedUser.name).toBe('John');
  });
});`}
          description="Integration test example for an API endpoint"
        />
      </ContentSection>

      <ContentSection title="Testing Frameworks">
        <h3 className="text-lg font-medium text-white mb-2">Jest</h3>
        <p>
          Jest is a popular JavaScript testing framework that provides a comprehensive testing solution.
        </p>
        <CodeExample
          title="Jest Test Examples"
          code={`// Basic assertions
test('basic assertions', () => {
  expect(2 + 2).toBe(4);
  expect({}).toEqual({});
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
});

// Async testing
test('async function', async () => {
  const result = await fetchData();
  expect(result).toBeDefined();
});

// Mocking
test('mocked function', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});`}
          description="Various Jest testing features"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">React Testing Library</h3>
        <p>
          React Testing Library provides utilities for testing React components in a way that resembles how users interact with your app.
        </p>
        <CodeExample
          title="React Component Test"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalled();
});`}
          description="React component testing example"
        />
      </ContentSection>

      <ContentSection title="Test-Driven Development (TDD)">
        <p>
          TDD is a development approach where tests are written before the actual code. The process follows these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Write a failing test</li>
          <li>Write the minimum code to make the test pass</li>
          <li>Refactor the code while keeping tests green</li>
        </ol>
        <CodeExample
          title="TDD Example"
          code={`// Step 1: Write failing test
test('calculate fibonacci number', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
});

// Step 2: Write implementation
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Step 3: Refactor (if needed)
function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`}
          description="TDD process example with Fibonacci implementation"
        />
      </ContentSection>

      <ContentSection title="Testing Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Write tests that are independent of each other</li>
          <li>Use meaningful test descriptions</li>
          <li>Follow the Arrange-Act-Assert pattern</li>
          <li>Test edge cases and error conditions</li>
          <li>Keep tests simple and focused</li>
          <li>Use appropriate test doubles (mocks, stubs, spies)</li>
          <li>Maintain a good balance of test coverage</li>
        </ul>
      </ContentSection>

      <ContentSection title="Continuous Integration and Testing">
        <p>
          Continuous Integration (CI) involves automatically running tests whenever code changes are pushed to the repository. This helps catch issues early and ensures code quality.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Automate test execution</li>
          <li>Run tests in different environments</li>
          <li>Generate and track test coverage reports</li>
          <li>Set up automated deployment pipelines</li>
          <li>Configure test notifications and alerts</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 