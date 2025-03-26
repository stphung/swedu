'use client';

import React from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function DevOpsPage() {
  return (
    <ContentLayout
      title="DevOps"
      description="Learn about DevOps practices, tools, and methodologies for efficient software development and deployment."
    >
      <ContentSection title="Introduction to DevOps">
        <p>
          DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
        </p>
      </ContentSection>

      <ContentSection title="Version Control and CI/CD">
        <h3 className="text-lg font-medium text-white mb-2">Git Workflows</h3>
        <p>
          Common Git workflows for team collaboration.
        </p>
        <CodeExample
          title="Git Flow Example"
          code={'# Create a new feature branch\ngit checkout -b feature/new-feature\n\n# Make changes and commit\ngit add .\ngit commit -m "Add new feature"\n\n# Push to remote\ngit push origin feature/new-feature\n\n# Create pull request\n# After review, merge to develop\ngit checkout develop\ngit merge feature/new-feature\n\n# Create release branch\ngit checkout -b release/v1.0.0\n\n# Merge to main and tag\ngit checkout main\ngit merge release/v1.0.0\ngit tag -a v1.0.0 -m "Release v1.0.0"'}
          description="Example of Git Flow workflow"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">CI/CD Pipeline</h3>
        <p>
          Example of a CI/CD pipeline configuration.
        </p>
        <CodeExample
          title="GitHub Actions Workflow"
          code={'name: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main, develop ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: \'16\'\n      \n      - name: Install dependencies\n        run: npm ci\n      \n      - name: Run tests\n        run: npm test\n      \n      - name: Run linting\n        run: npm run lint\n\n  build:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: \'16\'\n      \n      - name: Build application\n        run: npm run build\n      \n      - name: Build Docker image\n        run: docker build -t myapp:${{ github.sha }} .\n\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Deploy to production\n        run: echo "Deploying to production..."\n      - name: Notify team\n        run: echo "Deployment complete!"'}
          description="Example of GitHub Actions workflow"
        />
      </ContentSection>

      <ContentSection title="Containerization">
        <h3 className="text-lg font-medium text-white mb-2">Docker Basics</h3>
        <p>
          Example of a Dockerfile configuration.
        </p>
        <CodeExample
          title="Dockerfile Example"
          code={'# Use Node.js LTS version\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm ci\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN npm run build\n\n# Expose port\nEXPOSE 3000\n\n# Start application\nCMD ["npm", "start"]'}
          description="Example of Dockerfile configuration"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Docker Compose</h3>
        <p>
          Define multi-container applications with Docker Compose.
        </p>
        <CodeExample
          title="Docker Compose Example"
          code={`version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:13-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:`}
          description="Example of a Docker Compose configuration"
        />
      </ContentSection>

      <ContentSection title="Infrastructure as Code">
        <h3 className="text-lg font-medium text-white mb-2">Terraform Example</h3>
        <p>
          Example of infrastructure configuration using Terraform.
        </p>
        <CodeExample
          title="Terraform Configuration"
          code={'# Configure AWS provider\nprovider "aws" {\n  region = "us-east-1"\n}\n\n# Create VPC\nresource "aws_vpc" "main" {\n  cidr_block = "10.0.0.0/16"\n  \n  tags = {\n    Name = "main-vpc"\n  }\n}\n\n# Create subnet\nresource "aws_subnet" "main" {\n  vpc_id     = aws_vpc.main.id\n  cidr_block = "10.0.1.0/24"\n  \n  tags = {\n    Name = "main-subnet"\n  }\n}\n\n# Create EC2 instance\nresource "aws_instance" "app" {\n  ami           = "ami-0c7217cdde317cfec"\n  instance_type = "t2.micro"\n  subnet_id     = aws_subnet.main.id\n  \n  tags = {\n    Name = "app-server"\n  }\n}'}
          description="Example of Terraform configuration"
        />
      </ContentSection>

      <ContentSection title="Monitoring and Logging">
        <h3 className="text-lg font-medium text-white mb-2">Application Monitoring</h3>
        <p>
          Example of application monitoring setup.
        </p>
        <CodeExample
          title="Monitoring Configuration"
          code={'// Example of monitoring setup\nconst monitoring = {\n  metrics: {\n    enabled: true,\n    interval: 60000, // 1 minute\n    endpoints: [\n      "/metrics",\n      "/health"\n    ]\n  },\n  logging: {\n    level: "info",\n    format: "json",\n    transports: [\n      "console",\n      "file"\n    ]\n  },\n  alerts: {\n    enabled: true,\n    channels: [\n      "email",\n      "slack"\n    ],\n    thresholds: {\n      cpu: 80,\n      memory: 85,\n      disk: 90\n    }\n  }\n};'}
          description="Example of monitoring configuration"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">ELK Stack</h3>
        <p>
          Configure logging with ELK Stack.
        </p>
        <CodeExample
          title="Logstash Configuration"
          code={`input {
  beats {
    port => 5044
  }
}

filter {
  json {
    source => "message"
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}`}
          description="Example of Logstash configuration"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Automate everything possible</li>
          <li>Use version control for all code and configurations</li>
          <li>Implement continuous integration and deployment</li>
          <li>Monitor and log everything</li>
          <li>Use infrastructure as code</li>
          <li>Implement security best practices</li>
          <li>Regularly update dependencies</li>
          <li>Document processes and procedures</li>
          <li>Use containerization for consistency</li>
          <li>Implement automated testing</li>
        </ul>
      </ContentSection>

      <ContentSection title="DevOps Tools">
        <p>
          Common DevOps tools and their purposes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Version Control: Git, GitHub, GitLab</li>
          <li>CI/CD: Jenkins, GitHub Actions, GitLab CI</li>
          <li>Containerization: Docker, Kubernetes</li>
          <li>Infrastructure as Code: Terraform, CloudFormation</li>
          <li>Configuration Management: Ansible, Puppet, Chef</li>
          <li>Monitoring: Prometheus, Grafana, ELK Stack</li>
          <li>Logging: ELK Stack, Graylog</li>
          <li>Artifact Management: Nexus, Artifactory</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 