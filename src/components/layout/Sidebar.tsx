'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      title: 'Fundamentals',
      items: [
        { title: 'Programming Basics', href: '/fundamentals/programming-basics' },
        { title: 'Version Control', href: '/fundamentals/version-control' },
        { title: 'Data Structures', href: '/fundamentals/data-structures' },
        { title: 'Debugging', href: '/fundamentals/debugging' },
        { title: 'Testing', href: '/fundamentals/testing' },
      ],
    },
    {
      title: 'Design Principles',
      items: [
        { title: 'SOLID', href: '/principles/solid' },
        { title: 'DRY', href: '/principles/dry' },
        { title: 'KISS', href: '/principles/kiss' },
        { title: 'YAGNI', href: '/principles/yagni' },
        { title: 'Separation of Concerns', href: '/principles/separation-of-concerns' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { title: 'Technical Writing', href: '/communication/technical-writing' },
        { title: 'Documentation', href: '/communication/documentation' },
        { title: 'Code Reviews', href: '/communication/code-reviews' },
        { title: 'Presentations', href: '/communication/presentations' },
      ],
    },
    {
      title: 'SDLC',
      items: [
        { title: 'Agile', href: '/sdlc/agile' },
        { title: 'Scrum', href: '/sdlc/scrum' },
        { title: 'Kanban', href: '/sdlc/kanban' },
        { title: 'CI/CD', href: '/sdlc/ci-cd' },
      ],
    },
    {
      title: 'Design Patterns',
      items: [
        { title: 'Creational Patterns', href: '/patterns/creational' },
        { title: 'Structural Patterns', href: '/patterns/structural' },
        { title: 'Behavioral Patterns', href: '/patterns/behavioral' },
      ],
    },
    {
      title: 'Database',
      items: [
        { title: 'SQL vs NoSQL', href: '/database/sql-vs-nosql' },
        { title: 'Database Design', href: '/database/design' },
        { title: 'ORMs', href: '/database/orms' },
      ],
    },
    {
      title: 'Concurrency',
      items: [
        { title: 'Threads', href: '/concurrency/threads' },
        { title: 'Synchronization', href: '/concurrency/synchronization' },
        { title: 'Async Programming', href: '/concurrency/async' },
      ],
    },
    {
      title: 'Cloud',
      items: [
        { title: 'IaaS', href: '/cloud/iaas' },
        { title: 'PaaS', href: '/cloud/paas' },
        { title: 'SaaS', href: '/cloud/saas' },
        { title: 'Containers', href: '/cloud/containers' },
        { title: 'Serverless', href: '/cloud/serverless' },
      ],
    },
    {
      title: 'System Design',
      items: [
        { title: 'Scalability', href: '/system-design/scalability' },
        { title: 'Microservices', href: '/system-design/microservices' },
        { title: 'Caching', href: '/system-design/caching' },
        { title: 'API Design', href: '/system-design/api-design' },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          SWE Guide
        </h1>
      </div>
      
      <nav className="space-y-8">
        {navItems.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 relative group ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-l-2 border-indigo-400'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }`}
                    >
                      <span className="relative z-10">{item.title}</span>
                      {!isActive && (
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
} 