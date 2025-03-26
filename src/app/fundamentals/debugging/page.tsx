'use client';

import React from 'react';
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
          code={'// Console methods for debugging\nconsole.log(\'Basic logging\');\nconsole.info(\'Informational message\');\nconsole.warn(\'Warning message\');\nconsole.error(\'Error message\');\n\n// Grouping console messages\nconsole.group(\'User Authentication\');\nconsole.log(\'Checking credentials...\');\nconsole.log(\'Validating input...\');\nconsole.groupEnd();\n\n// Timing operations\nconsole.time(\'Operation\');\n// ... some code ...\nconsole.timeEnd(\'Operation\');\n\n// Table display\nconsole.table([\n  { id: 1, name: \'John\', age: 30 },\n  { id: 2, name: \'Jane\', age: 25 }\n]);'}
          description="Examples of console methods for debugging"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Debugger Statement</h3>
        <CodeExample
          title="Using Debugger"
          code={'function calculateTotal(items) {\n  let total = 0;\n  \n  debugger; // Code execution will pause here\n  \n  for (const item of items) {\n    total += item.price;\n  }\n  \n  return total;\n}\n\n// Example usage\nconst items = [\n  { name: \'Item 1\', price: 10 },\n  { name: \'Item 2\', price: 20 }\n];\n\ncalculateTotal(items);'}
          description="Example of using the debugger statement"
        />
      </ContentSection>

      <ContentSection title="Common Debugging Techniques">
        <h3 className="text-lg font-medium text-white mb-2">Logging and Tracing</h3>
        <CodeExample
          title="Logging Implementation"
          code={'class Logger {\n  static log(level, message, data = null) {\n    const timestamp = new Date().toISOString();\n    const logMessage = {\n      timestamp,\n      level,\n      message,\n      data\n    };\n    \n    // Log to console\n    console.log(JSON.stringify(logMessage, null, 2));\n    \n    // Could also log to file or send to logging service\n  }\n  \n  static info(message, data) {\n    this.log(\'INFO\', message, data);\n  }\n  \n  static error(message, error) {\n    this.log(\'ERROR\', message, {\n      error: error.message,\n      stack: error.stack\n    });\n  }\n}\n\n// Usage example\ntry {\n  Logger.info(\'Processing user data\', { userId: 123 });\n  // ... some code ...\n} catch (error) {\n  Logger.error(\'Failed to process user data\', error);\n}'}
          description="Example of a logging implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Error Handling</h3>
        <CodeExample
          title="Error Handling Example"
          code={'async function fetchUserData(userId) {\n  try {\n    const response = await fetch(\'/api/users/\' + userId);\n    if (!response.ok) {\n      throw new Error(\'HTTP error! status: \' + response.status);\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    // Log the error\n    console.error(\'Error fetching user data:\', error);\n    \n    // Handle specific error types\n    if (error instanceof TypeError) {\n      console.error(\'Network error occurred\');\n    } else if (error instanceof SyntaxError) {\n      console.error(\'Invalid JSON response\');\n    }\n    \n    // Rethrow or return error state\n    throw error;\n  }\n}\n\n// Usage with error handling\nasync function displayUser(userId) {\n  try {\n    const user = await fetchUserData(userId);\n    // Display user data\n  } catch (error) {\n    // Show error message to user\n    showErrorMessage(\'Failed to load user data\');\n  }\n}'}
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
          code={'async function debugNetworkRequest(url) {\n  try {\n    console.time(\'Request\');\n    const response = await fetch(url);\n    console.timeEnd(\'Request\');\n    \n    console.log(\'Response status:\', response.status);\n    console.log(\'Response headers:\', Object.fromEntries(response.headers));\n    \n    const data = await response.json();\n    console.log(\'Response data:\', data);\n    \n    return data;\n  } catch (error) {\n    console.error(\'Network error:\', error);\n    throw error;\n  }\n}\n\n// Usage\ndebugNetworkRequest(\'https://api.example.com/data\');'}
          description="Example of network request debugging"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Performance Issues</h3>
        <CodeExample
          title="Performance Debugging"
          code={'function debugPerformance() {\n  // Start performance measurement\n  performance.mark(\'start\');\n  \n  // Your code here\n  for (let i = 0; i < 1000000; i++) {\n    // Some expensive operation\n  }\n  \n  // End performance measurement\n  performance.mark(\'end\');\n  \n  // Measure the duration\n  performance.measure(\'Operation Duration\', \'start\', \'end\');\n  \n  // Get the measurements\n  const measurements = performance.getEntriesByName(\'Operation Duration\');\n  console.log(\'Duration:\', measurements[0].duration);\n  \n  // Clear measurements\n  performance.clearMarks();\n  performance.clearMeasures();\n}'}
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