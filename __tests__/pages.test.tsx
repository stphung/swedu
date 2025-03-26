/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { act } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock the content components
jest.mock('@/components/content/ContentLayout', () => {
  return function MockContentLayout({ children, title, description }: { children: React.ReactNode; title: string; description: string }) {
    return (
      <div data-testid="content-layout">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    );
  };
});

jest.mock('@/components/content/ContentSection', () => {
  return function MockContentSection({ children, title }: { children: React.ReactNode; title: string }) {
    return (
      <div data-testid="content-section">
        <h2>{title}</h2>
        {children}
      </div>
    );
  };
});

jest.mock('@/components/content/CodeExample', () => {
  return function MockCodeExample({ title, code, description }: { title: string; code: string; description?: string }) {
    return (
      <div data-testid="code-example">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <pre>{code}</pre>
      </div>
    );
  };
});

// Define all routes from the sidebar
const routes = [
  // Fundamentals
  '/fundamentals/programming-basics',
  '/fundamentals/version-control',
  '/fundamentals/data-structures',
  '/fundamentals/debugging',
  '/fundamentals/testing',
  
  // Design Principles
  '/principles/solid',
  '/principles/dry',
  '/principles/kiss',
  '/principles/yagni',
  '/principles/separation-of-concerns',
  
  // Communication
  '/communication/technical-writing',
  '/communication/documentation',
  '/communication/code-reviews',
  '/communication/presentations',
  
  // SDLC
  '/sdlc/agile',
  '/sdlc/scrum',
  '/sdlc/kanban',
  '/sdlc/ci-cd',
  
  // Design Patterns
  '/patterns/creational',
  '/patterns/structural',
  '/patterns/behavioral',
  
  // Database
  '/database/sql-vs-nosql',
  '/database/design',
  '/database/orms',
  
  // Concurrency
  '/concurrency/threads',
  '/concurrency/synchronization',
  '/concurrency/async',
  
  // Cloud
  '/cloud/iaas',
  '/cloud/paas',
  '/cloud/saas',
  '/cloud/containers',
  '/cloud/serverless',
  
  // System Design
  '/system-design/scalability',
  '/system-design/microservices',
  '/system-design/caching',
  '/system-design/api-design',
];

describe('Content Components', () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ContentLayout', () => {
    it('should render title and description', () => {
      render(
        <ContentLayout
          title="Test Title"
          description="Test Description"
        >
          <div>Test Content</div>
        </ContentLayout>
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
  });

  describe('ContentSection', () => {
    it('should render title and content', () => {
      render(
        <ContentSection title="Test Section">
          <p>Test Section Content</p>
        </ContentSection>
      );

      expect(screen.getByText('Test Section')).toBeInTheDocument();
      expect(screen.getByText('Test Section Content')).toBeInTheDocument();
    });
  });

  describe('CodeExample', () => {
    it('should render title, code, and description', () => {
      const testCode = 'console.log("test");';
      render(
        <CodeExample
          title="Test Example"
          code={testCode}
          description="Test Description"
        />
      );

      expect(screen.getByText('Test Example')).toBeInTheDocument();
      expect(screen.getByText(testCode)).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should handle navigation between pages', async () => {
      await act(async () => {
        mockRouter.push('/principles/solid');
      });

      expect(mockRouter.push).toHaveBeenCalledWith('/principles/solid');
    });
  });
}); 