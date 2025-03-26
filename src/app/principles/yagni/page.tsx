'use client';

import React from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function YAGNIPrinciplePage() {
  return (
    <ContentLayout
      title="YAGNI Principle"
      description="Learn about the You Aren't Gonna Need It (YAGNI) principle and how to avoid over-engineering in your code."
    >
      <ContentSection title="Introduction to YAGNI">
        <p>
          The YAGNI (You Aren't Gonna Need It) principle states that you should not add functionality until it is necessary. This principle helps prevent over-engineering and keeps code focused on current requirements.
        </p>
      </ContentSection>

      <ContentSection title="Basic YAGNI Examples">
        <h3 className="text-lg font-medium text-white mb-2">Avoiding Premature Features</h3>
        <CodeExample
          title="YAGNI Example"
          code={'// Bad: Adding unnecessary features\nclass User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.preferences = {};\n    this.socialMedia = {};\n    this.notificationSettings = {};\n  }\n  \n  // Adding features that might not be needed\n  setNotificationPreferences() { /* ... */ }\n  connectSocialMedia() { /* ... */ }\n  setTheme() { /* ... */ }\n}\n\n// Good: Only what\'s needed\nclass User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n  \n  // Only essential methods\n  updateProfile(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n}'}
          description="Example of applying YAGNI principle to class design"
        />
      </ContentSection>

      <ContentSection title="YAGNI in API Design">
        <h3 className="text-lg font-medium text-white mb-2">API Endpoints</h3>
        <CodeExample
          title="API YAGNI Example"
          code={'// Bad: Over-engineered API\nclass UserAPI {\n  // Current requirements only need basic CRUD\n  async createUser(userData) { /* ... */ }\n  async getUser(id) { /* ... */ }\n  async updateUser(id, userData) { /* ... */ }\n  async deleteUser(id) { /* ... */ }\n  \n  // Adding endpoints that might be needed later\n  async getUserPreferences(id) { /* ... */ }\n  async updateUserPreferences(id, preferences) { /* ... */ }\n  async getUserActivity(id) { /* ... */ }\n  async getUserAnalytics(id) { /* ... */ }\n}\n\n// Good: Focused on current requirements\nclass UserAPI {\n  async createUser(userData) { /* ... */ }\n  async getUser(id) { /* ... */ }\n  async updateUser(id, userData) { /* ... */ }\n  async deleteUser(id) { /* ... */ }\n}'}
          description="Example of applying YAGNI principle to API design"
        />
      </ContentSection>

      <ContentSection title="YAGNI in Data Models">
        <h3 className="text-lg font-medium text-white mb-2">Database Schema</h3>
        <CodeExample
          title="Data Model YAGNI Example"
          code={'// Bad: Over-engineered schema\ninterface Product {\n  id: string;\n  name: string;\n  price: number;\n  description: string;\n  category: string;\n  // Adding fields that might be needed later\n  metadata: {\n    tags: string[];\n    attributes: Record<string, any>;\n    ratings: {\n      average: number;\n      count: number;\n    };\n    analytics: {\n      views: number;\n      sales: number;\n      conversion: number;\n    };\n  };\n  social: {\n    likes: number;\n    shares: number;\n    comments: number;\n  };\n  inventory: {\n    stock: number;\n    reserved: number;\n    reorderPoint: number;\n    supplier: string;\n  };\n}\n\n// Good: Focused on current requirements\ninterface Product {\n  id: string;\n  name: string;\n  price: number;\n  description: string;\n  category: string;\n  stock: number;\n}'}
          description="Example of applying YAGNI principle to data models"
        />
      </ContentSection>

      <ContentSection title="YAGNI in Component Design">
        <h3 className="text-lg font-medium text-white mb-2">UI Components</h3>
        <CodeExample
          title="Component YAGNI Example"
          code={'// Bad: Over-engineered component\nfunction Button({\n  children,\n  variant = \'primary\',\n  size = \'medium\',\n  disabled = false,\n  loading = false,\n  icon,\n  tooltip,\n  onClick,\n  onHover,\n  onFocus,\n  onBlur,\n  className,\n  style,\n  dataTestId,\n  ariaLabel,\n  role,\n  tabIndex\n}) {\n  // Complex implementation with many features\n}\n\n// Good: Focused on current requirements\nfunction Button({\n  children,\n  variant = \'primary\',\n  disabled = false,\n  onClick\n}) {\n  return (\n    <button\n      className={\'btn btn-\' + variant}\n      disabled={disabled}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}'}
          description="Example of applying YAGNI principle to component design"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Focus on current requirements only</li>
          <li>Implement features when they are actually needed</li>
          <li>Avoid speculative development</li>
          <li>Keep code simple and focused</li>
          <li>Regularly review and remove unused code</li>
          <li>Consider the maintenance cost of features</li>
          <li>Get feedback from stakeholders</li>
          <li>Document why features were added</li>
          <li>Use feature flags for experimental features</li>
          <li>Consider the impact of premature optimization</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 