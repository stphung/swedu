import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function CloudComputingPage() {
  return (
    <ContentLayout
      title="Cloud Computing"
      description="Learn about cloud computing concepts, services, and best practices for building scalable applications in the cloud."
    >
      <ContentSection title="Introduction to Cloud Computing">
        <p>
          Cloud computing is the delivery of computing services over the internet, offering scalable resources and pay-as-you-go pricing. It enables organizations to build and deploy applications without managing physical infrastructure.
        </p>
      </ContentSection>

      <ContentSection title="Cloud Service Models">
        <h3 className="text-lg font-medium text-white mb-2">Infrastructure as a Service (IaaS)</h3>
        <p>
          Provides virtualized computing resources over the internet.
        </p>
        <CodeExample
          title="AWS EC2 Instance Configuration"
          code={`resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main.id

  tags = {
    Name = "web-server"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y httpd
              systemctl start httpd
              systemctl enable httpd
              EOF
}`}
          description="Example of IaaS configuration using Terraform"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Platform as a Service (PaaS)</h3>
        <p>
          Provides a platform for developing, testing, and deploying applications.
        </p>
        <CodeExample
          title="Heroku Configuration"
          code={`{
  "name": "my-app",
  "version": "1.0.0",
  "engines": {
    "node": "16.x"
  },
  "scripts": {
    "start": "node server.js",
    "build": "npm install"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.0"
  }
}`}
          description="Example of PaaS configuration using Heroku"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Software as a Service (SaaS)</h3>
        <p>
          Delivers software applications over the internet.
        </p>
        <CodeExample
          title="SaaS Integration Example"
          code={`import { OAuth2Client } from 'google-auth-library';

class GoogleCalendarService {
  private client: OAuth2Client;

  constructor() {
    this.client = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI
    });
  }

  async getEvents(accessToken: string): Promise<Event[]> {
    this.client.setCredentials({ access_token: accessToken });
    const calendar = google.calendar({ version: 'v3', auth: this.client });
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString()
    });
    return response.data.items;
  }
}`}
          description="Example of SaaS integration with Google Calendar"
        />
      </ContentSection>

      <ContentSection title="Cloud Deployment Models">
        <h3 className="text-lg font-medium text-white mb-2">Public Cloud</h3>
        <p>
          Services are delivered over the public internet and shared across multiple customers.
        </p>
        <CodeExample
          title="AWS S3 Configuration"
          code={`resource "aws_s3_bucket" "website" {
  bucket = "my-website-bucket"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
    expose_headers  = ["ETag"]
  }
}`}
          description="Example of public cloud configuration using AWS S3"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Private Cloud</h3>
        <p>
          Infrastructure is dedicated to a single organization.
        </p>
        <CodeExample
          title="OpenStack Configuration"
          code={`# OpenStack configuration example
provider "openstack" {
  auth_url    = "https://api.openstack.example.com/v3"
  project_name = "my-project"
  user_name   = "admin"
  password    = "secret"
  region      = "RegionOne"
}

resource "openstack_compute_instance_v2" "app_server" {
  name            = "app-server"
  image_name      = "Ubuntu 20.04"
  flavor_name     = "m1.small"
  key_pair        = "my-key-pair"
  security_groups = ["default"]

  network {
    name = "private-network"
  }
}`}
          description="Example of private cloud configuration using OpenStack"
        />
      </ContentSection>

      <ContentSection title="Cloud Security">
        <h3 className="text-lg font-medium text-white mb-2">Identity and Access Management</h3>
        <p>
          Manage user access and permissions in the cloud.
        </p>
        <CodeExample
          title="AWS IAM Policy"
          code={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*",
      "Condition": {
        "StringEquals": {
          "aws:PrincipalType": "IAMUser"
        }
      }
    }
  ]
}`}
          description="Example of IAM policy configuration"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Network Security</h3>
        <p>
          Configure network security in the cloud.
        </p>
        <CodeExample
          title="AWS Security Group"
          code={`resource "aws_security_group" "web" {
  name        = "web-security-group"
  description = "Security group for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`}
          description="Example of security group configuration"
        />
      </ContentSection>

      <ContentSection title="Cloud Cost Optimization">
        <p>
          Strategies for optimizing cloud costs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Use auto-scaling to match demand</li>
          <li>Implement resource scheduling</li>
          <li>Choose appropriate instance types</li>
          <li>Use reserved instances for predictable workloads</li>
          <li>Implement cost monitoring and alerts</li>
          <li>Clean up unused resources</li>
          <li>Use serverless computing where appropriate</li>
          <li>Optimize storage usage</li>
        </ul>
      </ContentSection>

      <ContentSection title="Cloud Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Design for scalability and high availability</li>
          <li>Implement proper security measures</li>
          <li>Use infrastructure as code</li>
          <li>Monitor and log everything</li>
          <li>Implement disaster recovery</li>
          <li>Use managed services when possible</li>
          <li>Follow the principle of least privilege</li>
          <li>Regularly backup data</li>
          <li>Implement proper error handling</li>
          <li>Use cloud-native services</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 