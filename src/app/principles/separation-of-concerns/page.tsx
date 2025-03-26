'use client';

import React from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function SeparationOfConcernsPage() {
  return (
    <ContentLayout
      title="Separation of Concerns"
      description="Learn about the Separation of Concerns (SOC) principle and how to organize code into distinct sections that address specific concerns."
    >
      <ContentSection title="Introduction to Separation of Concerns">
        <p>
          Separation of Concerns (SOC) is a design principle that separates a computer program into distinct sections, each addressing a specific concern. This principle helps make code more maintainable, testable, and easier to understand.
        </p>
      </ContentSection>

      <ContentSection title="Basic SOC Examples">
        <h3 className="text-lg font-medium text-white mb-2">Component Separation</h3>
        <CodeExample
          title="SOC Example"
          code={'// Bad: Mixed concerns\nclass UserManager {\n  constructor() {\n    this.db = new Database();\n    this.emailService = new EmailService();\n  }\n  \n  async registerUser(userData) {\n    // Database operation\n    const user = await this.db.createUser(userData);\n    \n    // Email operation\n    await this.emailService.sendWelcomeEmail(user.email);\n    \n    // Logging\n    console.log(\'User registered: \' + user.id);\n    \n    return user;\n  }\n}\n\n// Good: Separated concerns\nclass UserRepository {\n  constructor(private db: Database) {}\n  \n  async createUser(userData) {\n    return this.db.createUser(userData);\n  }\n}\n\nclass EmailService {\n  async sendWelcomeEmail(email) {\n    // Email sending logic\n  }\n}\n\nclass Logger {\n  log(message) {\n    console.log(message);\n  }\n}\n\nclass UserManager {\n  constructor(\n    private userRepo: UserRepository,\n    private emailService: EmailService,\n    private logger: Logger\n  ) {}\n  \n  async registerUser(userData) {\n    const user = await this.userRepo.createUser(userData);\n    await this.emailService.sendWelcomeEmail(user.email);\n    this.logger.log(\'User registered: \' + user.id);\n    return user;\n  }\n}'}
          description="Example of applying Separation of Concerns principle"
        />
      </ContentSection>

      <ContentSection title="SOC in Frontend Architecture">
        <h3 className="text-lg font-medium text-white mb-2">UI Component Structure</h3>
        <CodeExample
          title="Frontend SOC Example"
          code={'// Bad: Mixed concerns in component\nfunction UserProfile({ user }) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    async function fetchData() {\n      setLoading(true);\n      try {\n        const response = await fetch(\'/api/users/\' + user.id);\n        const data = await response.json();\n        setData(data);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    }\n    \n    fetchData();\n  }, [user.id]);\n  \n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  \n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.email}</p>\n      <button onClick={() => handleEdit(data)}>Edit</button>\n    </div>\n  );\n}\n\n// Good: Separated concerns\nfunction useUserData(userId) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    async function fetchData() {\n      setLoading(true);\n      try {\n        const response = await fetch(\'/api/users/\' + userId);\n        const data = await response.json();\n        setData(data);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    }\n    \n    fetchData();\n  }, [userId]);\n  \n  return { data, loading, error };\n}\n\nfunction UserProfileView({ user }) {\n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <p>{user.email}</p>\n    </div>\n  );\n}\n\nfunction UserProfile({ userId }) {\n  const { data, loading, error } = useUserData(userId);\n  \n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  \n  return (\n    <div>\n      <UserProfileView user={data} />\n      <button onClick={() => handleEdit(data)}>Edit</button>\n    </div>\n  );\n}'}
          description="Example of applying Separation of Concerns principle to frontend architecture"
        />
      </ContentSection>

      <ContentSection title="SOC in Backend Architecture">
        <h3 className="text-lg font-medium text-white mb-2">Service Layer Structure</h3>
        <CodeExample
          title="Backend SOC Example"
          code={'// Bad: Mixed concerns in service\nclass OrderService {\n  constructor() {\n    this.db = new Database();\n    this.paymentGateway = new PaymentGateway();\n    this.emailService = new EmailService();\n  }\n  \n  async processOrder(orderData) {\n    // Validate order\n    if (!this.validateOrder(orderData)) {\n      throw new Error(\'Invalid order\');\n    }\n    \n    // Save to database\n    const order = await this.db.saveOrder(orderData);\n    \n    // Process payment\n    const payment = await this.paymentGateway.processPayment(order);\n    \n    // Send confirmation email\n    await this.emailService.sendOrderConfirmation(order, payment);\n    \n    return order;\n  }\n  \n  validateOrder(orderData) {\n    // Validation logic\n  }\n}\n\n// Good: Separated concerns\nclass OrderValidator {\n  validate(orderData) {\n    // Validation logic\n  }\n}\n\nclass OrderRepository {\n  constructor(private db: Database) {}\n  \n  async save(orderData) {\n    return this.db.saveOrder(orderData);\n  }\n}\n\nclass PaymentService {\n  constructor(private gateway: PaymentGateway) {}\n  \n  async process(order) {\n    return this.gateway.processPayment(order);\n  }\n}\n\nclass NotificationService {\n  constructor(private emailService: EmailService) {}\n  \n  async sendOrderConfirmation(order, payment) {\n    return this.emailService.sendOrderConfirmation(order, payment);\n  }\n}\n\nclass OrderService {\n  constructor(\n    private validator: OrderValidator,\n    private repository: OrderRepository,\n    private paymentService: PaymentService,\n    private notificationService: NotificationService\n  ) {}\n  \n  async processOrder(orderData) {\n    if (!this.validator.validate(orderData)) {\n      throw new Error(\'Invalid order\');\n    }\n    \n    const order = await this.repository.save(orderData);\n    const payment = await this.paymentService.process(order);\n    await this.notificationService.sendOrderConfirmation(order, payment);\n    \n    return order;\n  }\n}'}
          description="Example of applying Separation of Concerns principle to backend architecture"
        />
      </ContentSection>

      <ContentSection title="SOC in Data Access">
        <h3 className="text-lg font-medium text-white mb-2">Data Layer Structure</h3>
        <CodeExample
          title="Data Access SOC Example"
          code={'// Bad: Mixed data access concerns\nclass DataManager {\n  constructor() {\n    this.db = new Database();\n    this.cache = new Cache();\n  }\n  \n  async getUser(id) {\n    // Check cache\n    const cached = await this.cache.get(\'user:\' + id);\n    if (cached) return cached;\n    \n    // Get from database\n    const user = await this.db.getUser(id);\n    \n    // Update cache\n    await this.cache.set(\'user:\' + id, user);\n    \n    return user;\n  }\n  \n  async updateUser(id, data) {\n    // Update database\n    const user = await this.db.updateUser(id, data);\n    \n    // Invalidate cache\n    await this.cache.delete(\'user:\' + id);\n    \n    return user;\n  }\n}\n\n// Good: Separated concerns\nclass CacheManager {\n  constructor(private cache: Cache) {}\n  \n  async get(key) {\n    return this.cache.get(key);\n  }\n  \n  async set(key, value) {\n    return this.cache.set(key, value);\n  }\n  \n  async delete(key) {\n    return this.cache.delete(key);\n  }\n}\n\nclass DatabaseManager {\n  constructor(private db: Database) {}\n  \n  async getUser(id) {\n    return this.db.getUser(id);\n  }\n  \n  async updateUser(id, data) {\n    return this.db.updateUser(id, data);\n  }\n}\n\nclass DataManager {\n  constructor(\n    private cacheManager: CacheManager,\n    private dbManager: DatabaseManager\n  ) {}\n  \n  async getUser(id) {\n    const cached = await this.cacheManager.get(\'user:\' + id);\n    if (cached) return cached;\n    \n    const user = await this.dbManager.getUser(id);\n    await this.cacheManager.set(\'user:\' + id, user);\n    \n    return user;\n  }\n  \n  async updateUser(id, data) {\n    const user = await this.dbManager.updateUser(id, data);\n    await this.cacheManager.delete(\'user:\' + id);\n    \n    return user;\n  }\n}'}
          description="Example of applying Separation of Concerns principle to data access"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Identify distinct concerns in your code</li>
          <li>Create separate modules for each concern</li>
          <li>Use dependency injection for better separation</li>
          <li>Keep modules focused and single-purpose</li>
          <li>Use interfaces to define boundaries</li>
          <li>Consider the level of abstraction</li>
          <li>Document module responsibilities</li>
          <li>Regularly review and refactor code</li>
          <li>Consider the impact of changes</li>
          <li>Get feedback from team members</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 