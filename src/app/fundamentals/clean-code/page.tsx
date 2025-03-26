import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function CleanCodePage() {
  return (
    <ContentLayout
      title="Clean Code"
      description="Learn principles and practices for writing clean, maintainable, and readable code."
    >
      <ContentSection title="Introduction to Clean Code">
        <p>
          Clean code is code that is easy to understand, maintain, and modify. It follows a set of principles and practices that make code more readable and efficient.
        </p>
      </ContentSection>

      <ContentSection title="Naming Conventions">
        <h3 className="text-lg font-medium text-white mb-2">Meaningful Names</h3>
        <p>
          Use descriptive names that clearly indicate the purpose of variables, functions, and classes.
        </p>
        <CodeExample
          title="Good vs Bad Naming"
          code={`// Bad naming
const d = new Date();
const arr = [];
function fn() {}

// Good naming
const currentDate = new Date();
const userList = [];
function calculateTotalPrice() {}`}
          description="Examples of good and bad naming practices"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Consistent Naming</h3>
        <p>
          Follow consistent naming patterns throughout your codebase.
        </p>
        <CodeExample
          title="Consistent Naming Example"
          code={`// Use consistent naming patterns
class UserService {
  private userRepository: UserRepository;
  
  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findById(userId);
  }
  
  async createUser(userData: UserData): Promise<User> {
    return this.userRepository.create(userData);
  }
}`}
          description="Example of consistent naming in a class"
        />
      </ContentSection>

      <ContentSection title="Functions">
        <h3 className="text-lg font-medium text-white mb-2">Single Responsibility</h3>
        <p>
          Functions should do one thing and do it well.
        </p>
        <CodeExample
          title="Function Responsibility Example"
          code={`// Bad: Multiple responsibilities
function processUserData(user: User): void {
  // Validate user
  if (!user.email || !user.name) {
    throw new Error('Invalid user data');
  }
  
  // Format data
  user.name = user.name.trim();
  user.email = user.email.toLowerCase();
  
  // Save to database
  saveToDatabase(user);
  
  // Send welcome email
  sendWelcomeEmail(user.email);
}

// Good: Single responsibility
function validateUser(user: User): boolean {
  return user.email && user.name;
}

function formatUserData(user: User): User {
  return {
    ...user,
    name: user.name.trim(),
    email: user.email.toLowerCase()
  };
}

function processUser(user: User): void {
  if (!validateUser(user)) {
    throw new Error('Invalid user data');
  }
  
  const formattedUser = formatUserData(user);
  saveToDatabase(formattedUser);
  sendWelcomeEmail(formattedUser.email);
}`}
          description="Example of single responsibility principle in functions"
        />
      </ContentSection>

      <ContentSection title="Code Organization">
        <h3 className="text-lg font-medium text-white mb-2">File Structure</h3>
        <p>
          Organize code into logical files and directories.
        </p>
        <CodeExample
          title="File Structure Example"
          code={`// src/
//   components/
//     Button/
//       Button.tsx
//       Button.test.tsx
//       Button.styles.ts
//   services/
//     api/
//       userApi.ts
//       productApi.ts
//   utils/
//     validation.ts
//     formatting.ts
//   types/
//     user.ts
//     product.ts`}
          description="Example of a clean file structure"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Module Organization</h3>
        <p>
          Organize code within files in a logical manner.
        </p>
        <CodeExample
          title="Module Organization Example"
          code={`// 1. Imports
import React from 'react';
import { useAuth } from '@/hooks/useAuth';

// 2. Types
interface UserProps {
  id: string;
  name: string;
  email: string;
}

// 3. Constants
const MAX_RETRIES = 3;
const API_ENDPOINT = '/api/users';

// 4. Component
export function UserProfile({ id, name, email }: UserProps) {
  const { user } = useAuth();
  
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}`}
          description="Example of clean module organization"
        />
      </ContentSection>

      <ContentSection title="Comments and Documentation">
        <p>
          Write clear and helpful comments that explain why, not what.
        </p>
        <CodeExample
          title="Good vs Bad Comments"
          code={`// Bad comments
// This function adds two numbers
function add(a: number, b: number): number {
  return a + b;
}

// Good comments
// Calculates the total price including tax and discounts
// Returns 0 if the price is negative or invalid
function calculateTotalPrice(price: number, tax: number, discount: number): number {
  if (price < 0 || tax < 0 || discount < 0) {
    return 0;
  }
  return price * (1 + tax) - discount;
}`}
          description="Examples of good and bad comments"
        />
      </ContentSection>

      <ContentSection title="Error Handling">
        <p>
          Handle errors gracefully and provide meaningful error messages.
        </p>
        <CodeExample
          title="Error Handling Example"
          code={`// Bad error handling
function fetchUser(id: string) {
  try {
    const response = fetch(\`/api/users/\${id}\`);
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Good error handling
class UserNotFoundError extends Error {
  constructor(userId: string) {
    super(\`User with ID \${userId} not found\`);
    this.name = 'UserNotFoundError';
  }
}

async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new UserNotFoundError(id);
    }
    return response.json();
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      // Handle specific error
      console.error(\`User not found: \${error.message}\`);
    } else {
      // Handle unexpected errors
      console.error('An unexpected error occurred:', error);
    }
    throw error;
  }
}`}
          description="Example of good error handling practices"
        />
      </ContentSection>

      <ContentSection title="Testing and Clean Code">
        <p>
          Clean code principles apply to tests as well. Tests should be:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Readable and maintainable</li>
          <li>Independent of each other</li>
          <li>Focused on testing one thing</li>
          <li>Well-organized and structured</li>
          <li>Free of code duplication</li>
        </ul>
      </ContentSection>

      <ContentSection title="Code Review Guidelines">
        <p>
          When reviewing code, look for:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clear and meaningful names</li>
          <li>Single responsibility principle</li>
          <li>Proper error handling</li>
          <li>Code duplication</li>
          <li>Test coverage</li>
          <li>Documentation quality</li>
          <li>Code organization</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 