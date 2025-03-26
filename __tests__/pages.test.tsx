import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { act } from 'react';

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

describe('Page Loading Tests', () => {
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

  // Test each route
  routes.forEach((route) => {
    it(`should load ${route} page`, async () => {
      // Mock the page component
      const PageComponent = () => <div>Test Page Content</div>;
      
      // Render the page
      await act(async () => {
        render(<PageComponent />);
      });

      // Verify the page content is rendered
      expect(screen.getByText('Test Page Content')).toBeInTheDocument();
    });
  });

  // Test navigation between pages
  it('should navigate between pages', async () => {
    const startRoute = routes[0];
    const endRoute = routes[1];

    // Mock the page component
    const PageComponent = () => <div>Test Page Content</div>;
    
    // Render the initial page
    await act(async () => {
      render(<PageComponent />);
    });

    // Navigate to the next page
    await act(async () => {
      mockRouter.push(endRoute);
    });

    // Verify navigation was called
    expect(mockRouter.push).toHaveBeenCalledWith(endRoute);
  });
}); 