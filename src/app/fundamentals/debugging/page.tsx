import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DebuggingPage() {
  return (
    <ContentLayout
      title="Debugging"
      description="Learn about debugging techniques, tools, and best practices for identifying and fixing code issues."
    >
      <ContentSection title="Introduction to Debugging">
        <p>
          Debugging is the process of finding and fixing bugs or defects in computer programs. It's an essential skill for developers to identify, analyze, and resolve issues in their code.
        </p>
      </ContentSection>

      <ContentSection title="Debugging Tools">
        <h3 className="text-lg font-medium text-white mb-2">Browser DevTools</h3>
        <p>
          Browser Developer Tools are essential for debugging web applications.
        </p>
        <CodeExample
          title="Using Console Methods"
          code={`// Console methods for debugging
console.log('Basic logging');
console.info('Informational message');
console.warn('Warning message');
console.error('Error message');

// Grouping console messages
console.group('User Authentication');
console.log('Checking credentials...');
console.log('Validating input...');
console.groupEnd();

// Timing operations
console.time('Operation');
// ... some code ...
console.timeEnd('Operation');

// Table display
console.table([
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 }
]);`}
          description="Examples of console methods for debugging"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Debugger Statement</h3>
        <CodeExample
          title="Using Debugger"
          code={`function calculateTotal(items) {
  let total = 0;
  
  debugger; // Code execution will pause here
  
  for (const item of items) {
    total += item.price;
  }
  
  return total;
}

// Example usage
const items = [
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 }
];

calculateTotal(items);`}
          description="Example of using the debugger statement"
        />
      </ContentSection>

      <ContentSection title="Common Debugging Techniques">
        <h3 className="text-lg font-medium text-white mb-2">Logging and Tracing</h3>
        <CodeExample
          title="Logging Implementation"
          code={`class Logger {
  static log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logMessage = {
      timestamp,
      level,
      message,
      data
    };
    
    // Log to console
    console.log(JSON.stringify(logMessage, null, 2));
    
    // Could also log to file or send to logging service
  }
  
  static info(message, data) {
    this.log('INFO', message, data);
  }
  
  static error(message, error) {
    this.log('ERROR', message, {
      error: error.message,
      stack: error.stack
    });
  }
}

// Usage example
try {
  Logger.info('Processing user data', { userId: 123 });
  // ... some code ...
} catch (error) {
  Logger.error('Failed to process user data', error);
}`}
          description="Example of a logging implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Error Handling</h3>
        <CodeExample
          title="Error Handling Example"
          code={`async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error
    console.error('Error fetching user data:', error);
    
    // Handle specific error types
    if (error instanceof TypeError) {
      console.error('Network error occurred');
    } else if (error instanceof SyntaxError) {
      console.error('Invalid JSON response');
    }
    
    // Rethrow or return error state
    throw error;
  }
}

// Usage with error handling
async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    // Display user data
  } catch (error) {
    // Show error message to user
    showErrorMessage('Failed to load user data');
  }
}`}
          description="Example of comprehensive error handling"
        />
      </ContentSection>

      <ContentSection title="Debugging Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Use systematic debugging approach</li>
          <li>Start with the simplest possible case</li>
          <li>Use version control to track changes</li>
          <li>Write test cases to reproduce bugs</li>
          <li>Use appropriate logging levels</li>
          <li>Document known issues and solutions</li>
          <li>Use debugging tools effectively</li>
          <li>Take breaks when stuck</li>
          <li>Review code with fresh eyes</li>
          <li>Ask for help when needed</li>
        </ul>
      </ContentSection>

      <ContentSection title="Common Debugging Scenarios">
        <h3 className="text-lg font-medium text-white mb-2">Network Issues</h3>
        <CodeExample
          title="Network Debugging"
          code={`async function debugNetworkRequest(url) {
  try {
    console.time('Request');
    const response = await fetch(url);
    console.timeEnd('Request');
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));
    
    const data = await response.json();
    console.log('Response data:', data);
    
    return data;
  } catch (error) {
    console.error('Network error:', error);
    throw error;
  }
}

// Usage
debugNetworkRequest('https://api.example.com/data');`}
          description="Example of network request debugging"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Performance Issues</h3>
        <CodeExample
          title="Performance Debugging"
          code={`function debugPerformance() {
  // Start performance measurement
  performance.mark('start');
  
  // Your code here
  for (let i = 0; i < 1000000; i++) {
    // Some expensive operation
  }
  
  // End performance measurement
  performance.mark('end');
  
  // Measure the duration
  performance.measure('Operation Duration', 'start', 'end');
  
  // Get the measurements
  const measurements = performance.getEntriesByName('Operation Duration');
  console.log('Duration:', measurements[0].duration);
  
  // Clear measurements
  performance.clearMarks();
  performance.clearMeasures();
}`}
          description="Example of performance debugging"
        />
      </ContentSection>

      <ContentSection title="Debugging Tools and Extensions">
        <ul className="list-disc list-inside space-y-2">
          <li>Chrome DevTools</li>
          <li>Firefox Developer Tools</li>
          <li>VS Code Debugger</li>
          <li>React Developer Tools</li>
          <li>Redux DevTools</li>
          <li>Network monitoring tools</li>
          <li>Memory profilers</li>
          <li>Performance profilers</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 