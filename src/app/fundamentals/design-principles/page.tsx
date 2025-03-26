'use client';

import React from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DesignPrinciplesPage() {
  return (
    <ContentLayout
      title="Design Principles"
      description="Learn about fundamental software design principles including SOLID, DRY, KISS, YAGNI, and Separation of Concerns."
    >
      <ContentSection title="Introduction to Design Principles">
        <p>
          Software design principles are guidelines that help developers create maintainable, scalable, and efficient code. Understanding and applying these principles is crucial for building high-quality software systems.
        </p>
      </ContentSection>

      <ContentSection title="SOLID Principles">
        <h3 className="text-lg font-medium text-white mb-2">Single Responsibility Principle (SRP)</h3>
        <p>
          A class should have only one reason to change, meaning it should have only one job or responsibility.
        </p>
        <CodeExample
          title="SRP Example"
          code={`// Bad: Class has multiple responsibilities
class UserManager {
  saveUser(user) { /* ... */ }
  sendEmail(user) { /* ... */ }
  generateReport(user) { /* ... */ }
}

// Good: Separate classes for each responsibility
class UserRepository {
  saveUser(user) { /* ... */ }
}

class EmailService {
  sendEmail(user) { /* ... */ }
}

class ReportGenerator {
  generateReport(user) { /* ... */ }
}`}
          description="Example of applying Single Responsibility Principle"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Open/Closed Principle (OCP)</h3>
        <p>
          Software entities should be open for extension but closed for modification.
        </p>
        <CodeExample
          title="OCP Example"
          code={`// Bad: Modifying existing code
class Rectangle {
  width: number;
  height: number;
}

class AreaCalculator {
  calculateArea(shape: Rectangle) {
    return shape.width * shape.height;
  }
}

// Good: Open for extension
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}`}
          description="Example of applying Open/Closed Principle"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Liskov Substitution Principle (LSP)</h3>
        <p>
          Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
        </p>
        <CodeExample
          title="LSP Example"
          code={`// Bad: Violating LSP
class Bird {
  fly() { /* ... */ }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

// Good: Following LSP
interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Sparrow implements FlyingBird {
  fly() { /* ... */ }
}

class Penguin implements SwimmingBird {
  swim() { /* ... */ }
}`}
          description="Example of applying Liskov Substitution Principle"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Interface Segregation Principle (ISP)</h3>
        <p>
          A client should not be forced to implement interfaces they don't use.
        </p>
        <CodeExample
          title="ISP Example"
          code={`// Bad: Large interface
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// Good: Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
  work() { /* ... */ }
  eat() { /* ... */ }
  sleep() { /* ... */ }
}

class Robot implements Workable {
  work() { /* ... */ }
}`}
          description="Example of applying Interface Segregation Principle"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Dependency Inversion Principle (DIP)</h3>
        <p>
          High-level modules should not depend on low-level modules. Both should depend on abstractions.
        </p>
        <CodeExample
          title="DIP Example"
          code={`// Bad: Direct dependency
class EmailNotifier {
  sendEmail(user: User) { /* ... */ }
}

class OrderProcessor {
  private notifier = new EmailNotifier();
  
  processOrder(order: Order) {
    // Process order
    this.notifier.sendEmail(order.user);
  }
}

// Good: Dependency injection
interface Notifier {
  notify(user: User): void;
}

class EmailNotifier implements Notifier {
  notify(user: User) { /* ... */ }
}

class OrderProcessor {
  constructor(private notifier: Notifier) {}
  
  processOrder(order: Order) {
    // Process order
    this.notifier.notify(order.user);
  }
}`}
          description="Example of applying Dependency Inversion Principle"
        />
      </ContentSection>

      <ContentSection title="DRY (Don't Repeat Yourself)">
        <p>
          DRY principle states that every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
        </p>
        <CodeExample
          title="DRY Example"
          code={`// Bad: Code duplication
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

function calculateAverage(items) {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total / items.length;
}

// Good: DRY code
function sum(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

function calculateTotal(items) {
  return sum(items);
}

function calculateAverage(items) {
  return sum(items) / items.length;
}`}
          description="Example of applying DRY principle"
        />
      </ContentSection>

      <ContentSection title="KISS (Keep It Simple, Stupid)">
        <p>
          The KISS principle states that most systems work best if they are kept simple rather than made complicated.
        </p>
        <CodeExample
          title="KISS Example"
          code={`// Bad: Overcomplicated solution
function processUserData(user) {
  const processedData = {
    personalInfo: {
      fullName: \`\${user.firstName} \${user.lastName}\`,
      age: calculateAge(user.dateOfBirth),
      address: formatAddress(user.address)
    },
    preferences: {
      theme: user.theme || 'default',
      notifications: user.notifications || false
    }
  };
  return processedData;
}

// Good: Simple solution
function processUserData(user) {
  return {
    name: \`\${user.firstName} \${user.lastName}\`,
    age: user.age,
    address: user.address
  };
}`}
          description="Example of applying KISS principle"
        />
      </ContentSection>

      <ContentSection title="YAGNI (You Aren't Gonna Need It)">
        <p>
          YAGNI principle states that you should not add functionality until it is necessary.
        </p>
        <CodeExample
          title="YAGNI Example"
          code={`// Bad: Adding unnecessary features
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.preferences = {};
    this.socialMedia = {};
    this.notificationSettings = {};
  }
  
  // Adding features that might not be needed
  setNotificationPreferences() { /* ... */ }
  connectSocialMedia() { /* ... */ }
  setTheme() { /* ... */ }
}

// Good: Only what's needed
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  // Only essential methods
  updateProfile(name, email) {
    this.name = name;
    this.email = email;
  }
}`}
          description="Example of applying YAGNI principle"
        />
      </ContentSection>

      <ContentSection title="Separation of Concerns (SOC)">
        <p>
          Separation of Concerns is a design principle that separates a computer program into distinct sections, each addressing a specific concern.
        </p>
        <CodeExample
          title="SOC Example"
          code={`// Bad: Mixed concerns
class UserManager {
  constructor() {
    this.db = new Database();
    this.emailService = new EmailService();
  }
  
  async registerUser(userData) {
    // Database operation
    const user = await this.db.createUser(userData);
    
    // Email operation
    await this.emailService.sendWelcomeEmail(user.email);
    
    // Logging
    console.log(`User registered: ${user.id}`);
    
    return user;
  }
}

// Good: Separated concerns
class UserRepository {
  constructor(private db: Database) {}
  
  async createUser(userData) {
    return this.db.createUser(userData);
  }
}

class EmailService {
  async sendWelcomeEmail(email) {
    // Email sending logic
  }
}

class Logger {
  log(message) {
    console.log(message);
  }
}

class UserManager {
  constructor(
    private userRepo: UserRepository,
    private emailService: EmailService,
    private logger: Logger
  ) {}
  
  async registerUser(userData) {
    const user = await this.userRepo.createUser(userData);
    await this.emailService.sendWelcomeEmail(user.email);
    this.logger.log(`User registered: ${user.id}`);
    return user;
  }
}`}
          description="Example of applying Separation of Concerns"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Apply principles based on context and requirements</li>
          <li>Balance between principles and practical needs</li>
          <li>Consider the trade-offs of each principle</li>
          <li>Use principles as guidelines, not strict rules</li>
          <li>Regularly review and refactor code</li>
          <li>Document design decisions</li>
          <li>Consider team expertise and maintainability</li>
          <li>Focus on code clarity and readability</li>
          <li>Test thoroughly after applying principles</li>
          <li>Get feedback from team members</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 