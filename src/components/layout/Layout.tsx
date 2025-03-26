'use client';

import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'w-64' : 'w-16'
          }`}
        >
          <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        </aside>

        {/* Main Content */}
        <main 
          className={`flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 