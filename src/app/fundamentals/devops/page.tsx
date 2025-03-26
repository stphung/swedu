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
          code={`# Create a new feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request
# After review, merge to develop
git checkout develop
git merge feature/new-feature

# Create release branch
git checkout -b release/v1.0.0

# Merge to main and tag
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0"`}
          description="Example of Git Flow workflow"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">CI/CD Pipeline</h3>
        <p>
          Example of a CI/CD pipeline configuration.
        </p>
        <CodeExample
          title="GitHub Actions Workflow"
          code={`name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linting
        run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Build application
        run: npm run build
      
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
          # Add deployment steps here`}
          description="Example of a CI/CD pipeline using GitHub Actions"
        />
      </ContentSection>

      <ContentSection title="Containerization">
        <h3 className="text-lg font-medium text-white mb-2">Docker</h3>
        <p>
          Containerize applications using Docker.
        </p>
        <CodeExample
          title="Dockerfile Example"
          code={`# Use Node.js LTS version
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]`}
          description="Example of a Dockerfile for a Node.js application"
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
        <h3 className="text-lg font-medium text-white mb-2">Terraform</h3>
        <p>
          Define infrastructure using Terraform.
        </p>
        <CodeExample
          title="Terraform Configuration"
          code={`# Configure AWS provider
provider "aws" {
  region = "us-west-2"
}

# Create VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main"
  }
}

# Create subnet
resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  
  tags = {
    Name = "main"
  }
}

# Create EC2 instance
resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main.id
  
  tags = {
    Name = "app"
  }
}`}
          description="Example of Terraform configuration"
        />
      </ContentSection>

      <ContentSection title="Monitoring and Logging">
        <h3 className="text-lg font-medium text-white mb-2">Prometheus and Grafana</h3>
        <p>
          Set up monitoring and visualization.
        </p>
        <CodeExample
          title="Prometheus Configuration"
          code={`global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'nodejs-app'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/metrics'

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']`}
          description="Example of Prometheus configuration"
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

      <ContentSection title="DevOps Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Automate everything possible</li>
          <li>Use infrastructure as code</li>
          <li>Implement continuous integration</li>
          <li>Practice continuous deployment</li>
          <li>Monitor and log everything</li>
          <li>Use version control for all code</li>
          <li>Implement automated testing</li>
          <li>Use containerization</li>
          <li>Practice configuration management</li>
          <li>Implement security measures</li>
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