import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function ArchitecturePage() {
  return (
    <ContentLayout
      title="Architecture"
      description="Learn about software architecture principles, patterns, and best practices for building scalable applications."
    >
      <ContentSection title="Introduction to Software Architecture">
        <p>
          Software architecture defines the high-level structure of a software system, including its components, relationships, and principles. Good architecture enables scalability, maintainability, and reliability.
        </p>
      </ContentSection>

      <ContentSection title="Architectural Patterns">
        <h3 className="text-lg font-medium text-white mb-2">Monolithic Architecture</h3>
        <p>
          A traditional approach where all components are tightly coupled in a single application.
        </p>
        <CodeExample
          title="Monolithic Structure"
          code={`// Traditional monolithic structure
src/
  ├── controllers/
  │   ├── UserController.ts
  │   └── ProductController.ts
  ├── models/
  │   ├── User.ts
  │   └── Product.ts
  ├── services/
  │   ├── UserService.ts
  │   └── ProductService.ts
  ├── middleware/
  │   └── auth.ts
  └── app.ts`}
          description="Example of a monolithic application structure"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Microservices Architecture</h3>
        <p>
          An architectural style that structures an application as a collection of small, independent services.
        </p>
        <CodeExample
          title="Microservices Structure"
          code={`// Microservices structure
services/
  ├── user-service/
  │   ├── Dockerfile
  │   ├── package.json
  │   └── src/
  │       ├── index.ts
  │       └── user.controller.ts
  ├── product-service/
  │   ├── Dockerfile
  │   ├── package.json
  │   └── src/
  │       ├── index.ts
  │       └── product.controller.ts
  └── gateway-service/
      ├── Dockerfile
      ├── package.json
      └── src/
          ├── index.ts
          └── routes.ts`}
          description="Example of a microservices architecture structure"
        />
      </ContentSection>

      <ContentSection title="Clean Architecture">
        <p>
          Clean Architecture emphasizes separation of concerns and independence of frameworks.
        </p>
        <CodeExample
          title="Clean Architecture Implementation"
          code={`// Domain layer (core business logic)
interface UserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

// Use case layer (application logic)
class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: CreateUserDTO): Promise<User> {
    const user = new User(userData);
    await this.userRepository.save(user);
    return user;
  }
}

// Interface layer (controllers, presenters)
class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async createUser(req: Request, res: Response): Promise<void> {
    const user = await this.createUserUseCase.execute(req.body);
    res.json(user);
  }
}

// Infrastructure layer (external services, databases)
class PostgresUserRepository implements UserRepository {
  constructor(private pool: Pool) {}

  async findById(id: string): Promise<User> {
    const result = await this.pool.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  async save(user: User): Promise<void> {
    await this.pool.query(
      'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)',
      [user.id, user.name, user.email]
    );
  }
}`}
          description="Clean Architecture implementation example"
        />
      </ContentSection>

      <ContentSection title="Event-Driven Architecture">
        <p>
          Event-driven architecture uses events to trigger and communicate between services.
        </p>
        <CodeExample
          title="Event-Driven Implementation"
          code={`// Event publisher
class EventPublisher {
  constructor(private eventBus: EventBus) {}

  async publishOrderCreated(order: Order): Promise<void> {
    await this.eventBus.publish('order.created', {
      orderId: order.id,
      userId: order.userId,
      total: order.total,
      timestamp: new Date()
    });
  }
}

// Event subscriber
class OrderProcessor {
  constructor(private eventBus: EventBus) {
    this.eventBus.subscribe('order.created', this.handleOrderCreated.bind(this));
  }

  private async handleOrderCreated(event: OrderCreatedEvent): Promise<void> {
    // Process the order
    await this.processOrder(event.orderId);
    
    // Publish new event
    await this.eventBus.publish('order.processed', {
      orderId: event.orderId,
      status: 'processed',
      timestamp: new Date()
    });
  }
}`}
          description="Event-driven architecture implementation example"
        />
      </ContentSection>

      <ContentSection title="Hexagonal Architecture">
        <p>
          Hexagonal Architecture (Ports and Adapters) emphasizes the separation of the application's core logic from external concerns.
        </p>
        <CodeExample
          title="Hexagonal Architecture Implementation"
          code={`// Core domain
interface UserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

// Ports (interfaces)
interface EmailService {
  sendWelcomeEmail(user: User): Promise<void>;
}

// Adapters (implementations)
class PostgresUserRepository implements UserRepository {
  constructor(private pool: Pool) {}

  async findById(id: string): Promise<User> {
    const result = await this.pool.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  async save(user: User): Promise<void> {
    await this.pool.query(
      'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)',
      [user.id, user.name, user.email]
    );
  }
}

class SendGridEmailService implements EmailService {
  constructor(private client: SendGridClient) {}

  async sendWelcomeEmail(user: User): Promise<void> {
    await this.client.send({
      to: user.email,
      subject: 'Welcome!',
      text: \`Welcome \${user.name}!\`
    });
  }
}`}
          description="Hexagonal Architecture implementation example"
        />
      </ContentSection>

      <ContentSection title="Architecture Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Follow SOLID principles</li>
          <li>Implement proper separation of concerns</li>
          <li>Use dependency injection</li>
          <li>Keep components loosely coupled</li>
          <li>Design for scalability</li>
          <li>Consider security in architecture</li>
          <li>Plan for maintainability</li>
          <li>Document architectural decisions</li>
          <li>Use appropriate design patterns</li>
          <li>Consider performance implications</li>
        </ul>
      </ContentSection>

      <ContentSection title="Architecture Documentation">
        <p>
          Document your architecture effectively:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Create architecture decision records (ADRs)</li>
          <li>Maintain system diagrams</li>
          <li>Document component interactions</li>
          <li>Include deployment architecture</li>
          <li>Document security considerations</li>
          <li>Maintain API documentation</li>
          <li>Include scaling strategies</li>
          <li>Document failure scenarios</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 