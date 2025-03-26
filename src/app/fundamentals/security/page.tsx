import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function SecurityPage() {
  return (
    <ContentLayout
      title="Security"
      description="Learn about web security principles, common vulnerabilities, and best practices for secure development."
    >
      <ContentSection title="Introduction to Web Security">
        <p>
          Web security is crucial for protecting applications, data, and users from various threats and vulnerabilities. Understanding security principles helps build more robust and trustworthy applications.
        </p>
      </ContentSection>

      <ContentSection title="Common Security Vulnerabilities">
        <h3 className="text-lg font-medium text-white mb-2">Cross-Site Scripting (XSS)</h3>
        <p>
          XSS attacks inject malicious scripts into web pages viewed by other users.
        </p>
        <CodeExample
          title="XSS Prevention"
          code={`// Bad: Vulnerable to XSS
function displayUserInput(input: string): void {
  document.getElementById('output').innerHTML = input;
}

// Good: Sanitize input
function displayUserInput(input: string): void {
  const sanitized = DOMPurify.sanitize(input);
  document.getElementById('output').innerHTML = sanitized;
}

// Better: Use textContent instead of innerHTML
function displayUserInput(input: string): void {
  document.getElementById('output').textContent = input;
}`}
          description="Examples of XSS prevention"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">SQL Injection</h3>
        <p>
          SQL injection attacks manipulate database queries by injecting malicious SQL code.
        </p>
        <CodeExample
          title="SQL Injection Prevention"
          code={`// Bad: Vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;

// Good: Use parameterized queries
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);

// Better: Use an ORM
const user = await User.findOne({ where: { username } });`}
          description="Examples of SQL injection prevention"
        />
      </ContentSection>

      <ContentSection title="Authentication and Authorization">
        <h3 className="text-lg font-medium text-white mb-2">Password Security</h3>
        <p>
          Implement secure password handling practices.
        </p>
        <CodeExample
          title="Password Security Implementation"
          code={`import bcrypt from 'bcrypt';

class UserService {
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}`}
          description="Secure password handling example"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">JWT Implementation</h3>
        <p>
          Use JSON Web Tokens for secure authentication.
        </p>
        <CodeExample
          title="JWT Implementation"
          code={`import jwt from 'jsonwebtoken';

class AuthService {
  private readonly secretKey = process.env.JWT_SECRET;

  generateToken(userId: string): string {
    return jwt.sign({ userId }, this.secretKey, {
      expiresIn: '24h'
    });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}`}
          description="JWT implementation example"
        />
      </ContentSection>

      <ContentSection title="HTTPS and SSL/TLS">
        <p>
          Secure communication over the internet using HTTPS and SSL/TLS protocols.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Always use HTTPS in production</li>
          <li>Keep SSL/TLS certificates up to date</li>
          <li>Use strong cipher suites</li>
          <li>Implement HSTS (HTTP Strict Transport Security)</li>
          <li>Regularly update SSL/TLS configurations</li>
        </ul>
      </ContentSection>

      <ContentSection title="Data Security">
        <h3 className="text-lg font-medium text-white mb-2">Data Encryption</h3>
        <p>
          Protect sensitive data using encryption.
        </p>
        <CodeExample
          title="Data Encryption Example"
          code={`import crypto from 'crypto';

class EncryptionService {
  private readonly algorithm = 'aes-256-gcm';
  private readonly key = process.env.ENCRYPTION_KEY;

  encrypt(text: string): { encrypted: string; iv: string; tag: string } {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      tag: cipher.getAuthTag().toString('hex')
    };
  }

  decrypt(encrypted: string, iv: string, tag: string): string {
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.key,
      Buffer.from(iv, 'hex')
    );
    
    decipher.setAuthTag(Buffer.from(tag, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}`}
          description="Data encryption implementation example"
        />
      </ContentSection>

      <ContentSection title="Security Headers">
        <p>
          Implement important security headers in your web application.
        </p>
        <CodeExample
          title="Security Headers Configuration"
          code={`// Express.js security headers middleware
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  dnsPrefetchControl: true,
  frameguard: { action: 'deny' },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));`}
          description="Security headers configuration example"
        />
      </ContentSection>

      <ContentSection title="Security Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Keep dependencies up to date</li>
          <li>Implement rate limiting</li>
          <li>Use secure session management</li>
          <li>Implement proper error handling</li>
          <li>Regular security audits</li>
          <li>Input validation and sanitization</li>
          <li>Secure file upload handling</li>
          <li>Implement proper logging</li>
          <li>Use security scanning tools</li>
          <li>Follow the principle of least privilege</li>
        </ul>
      </ContentSection>

      <ContentSection title="Security Testing">
        <p>
          Regular security testing is essential for maintaining application security:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Automated security scanning</li>
          <li>Penetration testing</li>
          <li>Vulnerability assessment</li>
          <li>Code security reviews</li>
          <li>Security-focused unit tests</li>
          <li>Load testing for security</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 