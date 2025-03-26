'use client';

import Sidebar from './Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <main className="pl-16 lg:pl-64 py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 