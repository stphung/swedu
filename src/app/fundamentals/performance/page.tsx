import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function PerformancePage() {
  return (
    <ContentLayout
      title="Performance"
      description="Learn about web performance optimization techniques and best practices for building fast applications."
    >
      <ContentSection title="Introduction to Web Performance">
        <p>
          Web performance optimization is crucial for providing a better user experience, improving SEO, and reducing server costs. It involves various techniques to make web applications load and run faster.
        </p>
      </ContentSection>

      <ContentSection title="Frontend Performance">
        <h3 className="text-lg font-medium text-white mb-2">Code Splitting</h3>
        <p>
          Split your code into smaller chunks to reduce initial load time.
        </p>
        <CodeExample
          title="Code Splitting Example"
          code={`// Without code splitting
import HeavyComponent from './HeavyComponent';

// With code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}`}
          description="Example of code splitting in React"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Image Optimization</h3>
        <p>
          Optimize images to reduce load time and bandwidth usage.
        </p>
        <CodeExample
          title="Image Optimization Example"
          code={`// Using Next.js Image component
import Image from 'next/image';

function OptimizedImage() {
  return (
    <Image
      src="/large-image.jpg"
      alt="Optimized image"
      width={800}
      height={600}
      quality={75}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}`}
          description="Example of image optimization"
        />
      </ContentSection>

      <ContentSection title="Caching Strategies">
        <h3 className="text-lg font-medium text-white mb-2">Browser Caching</h3>
        <p>
          Implement effective caching strategies to improve performance.
        </p>
        <CodeExample
          title="Cache Control Headers"
          code={`// Express.js cache control middleware
app.use((req, res, next) => {
  // Cache static assets for 1 year
  if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  
  // Cache API responses for 5 minutes
  if (req.url.startsWith('/api/')) {
    res.setHeader('Cache-Control', 'public, max-age=300');
  }
  
  next();
});`}
          description="Example of cache control headers"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Service Worker Caching</h3>
        <p>
          Use service workers for offline functionality and caching.
        </p>
        <CodeExample
          title="Service Worker Implementation"
          code={`// service-worker.js
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`}
          description="Service worker caching implementation"
        />
      </ContentSection>

      <ContentSection title="Backend Performance">
        <h3 className="text-lg font-medium text-white mb-2">Database Optimization</h3>
        <p>
          Optimize database queries and indexes for better performance.
        </p>
        <CodeExample
          title="Database Query Optimization"
          code={`// Bad: N+1 query problem
async function getUsersWithPosts() {
  const users = await User.findAll();
  for (const user of users) {
    user.posts = await Post.findAll({ where: { userId: user.id } });
  }
  return users;
}

// Good: Eager loading
async function getUsersWithPosts() {
  return User.findAll({
    include: [{
      model: Post,
      required: true
    }]
  });
}`}
          description="Example of database query optimization"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Caching Layer</h3>
        <p>
          Implement a caching layer to reduce database load.
        </p>
        <CodeExample
          title="Redis Caching Implementation"
          code={`import Redis from 'ioredis';

class CacheService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT)
    });
  }

  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async set(key: string, value: string, ttl: number): Promise<void> {
    await this.redis.set(key, value, 'EX', ttl);
  }
}`}
          description="Redis caching implementation"
        />
      </ContentSection>

      <ContentSection title="Performance Monitoring">
        <p>
          Monitor and measure application performance:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Use performance monitoring tools (e.g., Lighthouse, WebPageTest)</li>
          <li>Implement real user monitoring (RUM)</li>
          <li>Track key performance metrics (FCP, LCP, TTI, TBT)</li>
          <li>Set up performance budgets</li>
          <li>Monitor server metrics</li>
          <li>Use error tracking and logging</li>
        </ul>
      </ContentSection>

      <ContentSection title="Performance Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Minify and compress assets</li>
          <li>Use CDN for static assets</li>
          <li>Implement lazy loading</li>
          <li>Optimize critical rendering path</li>
          <li>Use appropriate image formats</li>
          <li>Implement proper error handling</li>
          <li>Use performance profiling tools</li>
          <li>Optimize third-party scripts</li>
          <li>Implement proper database indexing</li>
          <li>Use connection pooling</li>
        </ul>
      </ContentSection>

      <ContentSection title="Performance Testing">
        <p>
          Regular performance testing is essential:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Load testing</li>
          <li>Stress testing</li>
          <li>Endurance testing</li>
          <li>Spike testing</li>
          <li>Volume testing</li>
          <li>Scalability testing</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 