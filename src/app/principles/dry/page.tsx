import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DRYPrinciplePage() {
  return (
    <ContentLayout
      title="DRY Principle"
      description="Learn about the Don't Repeat Yourself (DRY) principle and how to apply it effectively in your code."
    >
      <ContentSection title="Introduction to DRY">
        <p>
          The DRY (Don't Repeat Yourself) principle states that every piece of knowledge must have a single, unambiguous, authoritative representation within a system. This principle helps reduce code duplication and makes maintenance easier.
        </p>
      </ContentSection>

      <ContentSection title="Basic DRY Examples">
        <h3 className="text-lg font-medium text-white mb-2">Code Duplication</h3>
        <CodeExample
          title="DRY Example"
          code={`// Bad: Repeated code
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}

function calculateSubtotal(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal += item.price;
  }
  return subtotal;
}

// Good: DRY implementation
function calculateSum(items, key = 'price') {
  return items.reduce((sum, item) => sum + item[key], 0);
}

function calculateTotal(items) {
  return calculateSum(items);
}

function calculateSubtotal(items) {
  return calculateSum(items);
}`}
          description="Example of applying DRY principle to avoid code duplication"
        />
      </ContentSection>

      <ContentSection title="DRY in Configuration">
        <h3 className="text-lg font-medium text-white mb-2">Configuration Management</h3>
        <CodeExample
          title="Configuration DRY Example"
          code={`// Bad: Duplicated configuration
const developmentConfig = {
  apiUrl: 'http://localhost:3000',
  databaseUrl: 'mongodb://localhost:27017/dev',
  logLevel: 'debug'
};

const productionConfig = {
  apiUrl: 'https://api.example.com',
  databaseUrl: 'mongodb://prod.example.com:27017/prod',
  logLevel: 'info'
};

// Good: DRY configuration
const baseConfig = {
  development: {
    apiUrl: 'http://localhost:3000',
    databaseUrl: 'mongodb://localhost:27017/dev',
    logLevel: 'debug'
  },
  production: {
    apiUrl: 'https://api.example.com',
    databaseUrl: 'mongodb://prod.example.com:27017/prod',
    logLevel: 'info'
  }
};

const getConfig = (env) => baseConfig[env] || baseConfig.development;`}
          description="Example of applying DRY principle to configuration management"
        />
      </ContentSection>

      <ContentSection title="DRY in Component Design">
        <h3 className="text-lg font-medium text-white mb-2">Component Reuse</h3>
        <CodeExample
          title="Component DRY Example"
          code={`// Bad: Duplicated form components
function LoginForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

// Good: Reusable components
function Input({ type, placeholder, ...props }) {
  return <input type={type} placeholder={placeholder} {...props} />;
}

function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

function LoginForm() {
  return (
    <Form onSubmit={handleLogin}>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </Form>
  );
}

function RegisterForm() {
  return (
    <Form onSubmit={handleRegister}>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </Form>
  );
}`}
          description="Example of applying DRY principle to component design"
        />
      </ContentSection>

      <ContentSection title="DRY in API Calls">
        <h3 className="text-lg font-medium text-white mb-2">API Request Handling</h3>
        <CodeExample
          title="API DRY Example"
          code={`// Bad: Duplicated API calls
async function fetchUsers() {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
}

async function fetchUserById(id) {
  const response = await fetch('/api/users/' + id);
  const data = await response.json();
  return data;
}

async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  return data;
}

// Good: DRY API handling
const api = {
  async request(endpoint, options = {}) {
    const response = await fetch('/api' + endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
    return response.json();
  },
  
  users: {
    getAll: () => api.request('/users'),
    getById: (id) => api.request('/users/' + id),
    create: (data) => api.request('/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
};`}
          description="Example of applying DRY principle to API calls"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Identify patterns of code duplication</li>
          <li>Create reusable functions and components</li>
          <li>Use configuration files for shared values</li>
          <li>Implement shared utilities and helpers</li>
          <li>Use inheritance and composition appropriately</li>
          <li>Keep abstractions at the right level</li>
          <li>Document shared code and patterns</li>
          <li>Regularly review and refactor duplicated code</li>
          <li>Consider the impact of changes</li>
          <li>Get feedback from team members</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 