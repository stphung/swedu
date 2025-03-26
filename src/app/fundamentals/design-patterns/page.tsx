import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DesignPatternsPage() {
  return (
    <ContentLayout
      title="Design Patterns"
      description="Learn about common design patterns and their applications in software development."
    >
      <ContentSection title="Introduction to Design Patterns">
        <p>
          Design patterns are reusable solutions to common problems in software design. They provide a template for solving similar problems in different contexts.
        </p>
      </ContentSection>

      <ContentSection title="Creational Patterns">
        <h3 className="text-lg font-medium text-white mb-2">Singleton Pattern</h3>
        <p>
          Ensures a class has only one instance and provides a global point of access to it.
        </p>
        <CodeExample
          title="Singleton Implementation"
          code={`class Database {
  private static instance: Database;
  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public connect(): void {
    console.log('Connected to database');
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`}
          description="Singleton pattern implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Factory Pattern</h3>
        <p>
          Provides an interface for creating objects without specifying their exact classes.
        </p>
        <CodeExample
          title="Factory Pattern Implementation"
          code={`interface Button {
  render(): void;
}

class PrimaryButton implements Button {
  render(): void {
    console.log('Rendering primary button');
  }
}

class SecondaryButton implements Button {
  render(): void {
    console.log('Rendering secondary button');
  }
}

class ButtonFactory {
  createButton(type: 'primary' | 'secondary'): Button {
    switch (type) {
      case 'primary':
        return new PrimaryButton();
      case 'secondary':
        return new SecondaryButton();
      default:
        throw new Error('Invalid button type');
    }
  }
}

// Usage
const factory = new ButtonFactory();
const primaryButton = factory.createButton('primary');
const secondaryButton = factory.createButton('secondary');`}
          description="Factory pattern implementation"
        />
      </ContentSection>

      <ContentSection title="Structural Patterns">
        <h3 className="text-lg font-medium text-white mb-2">Adapter Pattern</h3>
        <p>
          Allows incompatible interfaces to work together by wrapping an object with a new interface.
        </p>
        <CodeExample
          title="Adapter Pattern Implementation"
          code={`// Old interface
interface OldAPI {
  getData(): string;
}

// New interface
interface NewAPI {
  fetchData(): Promise<string>;
}

// Adapter
class APIAdapter implements NewAPI {
  constructor(private oldAPI: OldAPI) {}

  async fetchData(): Promise<string> {
    return this.oldAPI.getData();
  }
}

// Usage
const oldAPI: OldAPI = {
  getData: () => 'data from old API'
};

const adapter = new APIAdapter(oldAPI);
adapter.fetchData().then(console.log);`}
          description="Adapter pattern implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Decorator Pattern</h3>
        <p>
          Attaches additional responsibilities to an object dynamically.
        </p>
        <CodeExample
          title="Decorator Pattern Implementation"
          code={`interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements Component {
  constructor(protected component: Component) {}

  operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return \`ConcreteDecoratorA(\${super.operation()})\`;
  }
}

// Usage
const component = new ConcreteComponent();
const decorator = new ConcreteDecoratorA(component);
console.log(decorator.operation());`}
          description="Decorator pattern implementation"
        />
      </ContentSection>

      <ContentSection title="Behavioral Patterns">
        <h3 className="text-lg font-medium text-white mb-2">Observer Pattern</h3>
        <p>
          Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.
        </p>
        <CodeExample
          title="Observer Pattern Implementation"
          code={`interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(data: any): void {
    console.log(\`\${this.name} received: \${data}\`);
  }
}

// Usage
const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

subject.attach(observer1);
subject.attach(observer2);
subject.notify('Hello observers!');`}
          description="Observer pattern implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Strategy Pattern</h3>
        <p>
          Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
        </p>
        <CodeExample
          title="Strategy Pattern Implementation"
          code={`interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid \${amount} using credit card\`);
  }
}

class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid \${amount} using PayPal\`);
  }
}

class ShoppingCart {
  constructor(private paymentStrategy: PaymentStrategy) {}

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart(new CreditCardStrategy());
cart.checkout(100);
cart.setPaymentStrategy(new PayPalStrategy());
cart.checkout(200);`}
          description="Strategy pattern implementation"
        />
      </ContentSection>

      <ContentSection title="When to Use Design Patterns">
        <p>
          Design patterns should be used when:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You have a recurring problem that needs a proven solution</li>
          <li>You want to improve code reusability and maintainability</li>
          <li>You need to communicate design decisions to other developers</li>
          <li>You want to follow established best practices</li>
        </ul>
      </ContentSection>

      <ContentSection title="Anti-patterns">
        <p>
          Be aware of common anti-patterns that should be avoided:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>God Object - A class that knows or does too much</li>
          <li>Spaghetti Code - Unstructured and difficult to follow code</li>
          <li>Golden Hammer - Using the same solution for every problem</li>
          <li>Copy-Paste Programming - Duplicating code instead of reusing it</li>
          <li>Premature Optimization - Optimizing before it's necessary</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 