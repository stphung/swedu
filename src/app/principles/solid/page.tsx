import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function SOLIDPrinciplesPage() {
  return (
    <ContentLayout
      title="SOLID Principles"
      description="Learn about the SOLID principles of object-oriented design: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."
    >
      <ContentSection title="Introduction to SOLID">
        <p>
          SOLID is an acronym for five design principles in object-oriented programming that help make software designs more understandable, flexible, and maintainable.
        </p>
      </ContentSection>

      <ContentSection title="Single Responsibility Principle (SRP)">
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
      </ContentSection>

      <ContentSection title="Open/Closed Principle (OCP)">
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
      </ContentSection>

      <ContentSection title="Liskov Substitution Principle (LSP)">
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
      </ContentSection>

      <ContentSection title="Interface Segregation Principle (ISP)">
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
      </ContentSection>

      <ContentSection title="Dependency Inversion Principle (DIP)">
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

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Apply SOLID principles together, not in isolation</li>
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