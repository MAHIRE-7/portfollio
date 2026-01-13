const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const portfolio = {
    name: 'Manoday Anil Ahire',
    title: 'Cloud & DevOps Engineer',
    location: 'Pune',
    email: 'manodayahire786@gmail.com',
    phone: '+91 85300 58107',
    linkedin: 'https://linkedin.com/in/manodayAhire',
    github: 'https://github.com/MAHIRE-7',
    summary: 'Cloud and DevOps Engineer with hands-on experience designing, deploying, and operating cloud-native infrastructure on AWS and Azure. Strong expertise in infrastructure automation using Terraform, CI/CD pipeline implementation using Jenkins and GitHub Actions, containerization with Docker, and Kubernetes orchestration.',
    summary2: 'Cloud Infrastructure Engineer Intern at Excellon Softwares with strong hands-on experience in AWS cloud services, Linux system administration, Docker, Kubernetes, and CI/CD pipelines. Actively working on cloud infrastructure provisioning, containerized workloads, monitoring and logging using Grafana, Prometheus, and ELK, along with security and performance optimization. Focused on building highly available, scalable, and secure cloud environments, with a strong interest in DevOps and Site Reliability Engineering practices.',
    skills: ['AWS', 'Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab', 'GitHub', 'Git', 'EC2', 'S3', 'IAM', 'RDS', 'VPC', 'EKS', 'SQS', 'Auto Scaling', 'Elastic Load Balancing', 'Nginx', 'Apache2', 'Tomcat', 'IIS', 'Artifactory', 'Infrastructure as Code', 'CI/CD', 'Site Reliability Engineering', 'Microservices', '3-Tier Architecture', 'Solution Architecture', 'Cloud Infrastructure', 'MySQL', 'DynamoDB', 'Database Management', 'Python', 'Shell Scripting', 'YAML', 'JSON', 'CloudWatch', 'CloudTrail', 'Grafana', 'Azure Monitor', 'Security Groups', 'KMS', 'WAF', 'Network Security', 'Microsoft Entra ID', 'Subnets', 'Route Tables', 'NAT Gateway', 'Virtual Networks', 'Load Balancing', 'Linux', 'Red Hat Linux', 'Windows', 'Linux Server', 'Maven', 'Gradle', 'AWS Q'],
    experience: [
      {
        title: 'Infrastructure Engineer Intern',
        company: 'Excellon Software',
        duration: 'Oct 2025 – Present (4 months)',
        location: 'Pune, Maharashtra, India · On-site',
        description: 'Manage and support production Azure cloud infrastructure for internal and client-facing applications. Perform daily cloud health checks, monitoring using Azure Monitor and logging tools. Support deployment and monitoring of cloud applications ensuring high availability and performance.'
      },
      {
        title: 'Cloud Engineer Intern',
        company: 'Acmegrade',
        duration: 'Jun 2024 – Jul 2024 (2 months)',
        location: 'Bengaluru, Karnataka, India · Remote',
        description: 'Worked on solution architecture and cloud infrastructure design. Gained hands-on experience with cloud services and architectural best practices.'
      },
      {
        title: 'Cloud Engineer Intern',
        company: 'Devskillhub Training and Consultancy',
        duration: 'Jun 2024 – Jul 2024 (2 months)',
        location: 'Remote',
        description: 'Focused on cloud services and cloud infrastructure development. Enhanced skills in cloud platform management and infrastructure automation.'
      },
      {
        title: 'Cloud Engineer',
        company: 'Pantechelearning',
        duration: 'Oct 2023 – Nov 2023 (2 months)',
        location: 'India · Remote',
        description: 'Worked with Amazon Cloud Services, gaining foundational experience in cloud computing and AWS platform services.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Engineering',
        institution: 'Dr. D. Y. Patil College of Engineering and Innovation, Talegaon, Pune',
        duration: 'Nov 2022 – Jun 2025',
        grade: 'CGPA: 8.69'
      },
      {
        degree: 'Diploma in Computer Engineering',
        institution: 'Government Polytechnic, Nandurbar',
        duration: 'Aug 2019 – Jul 2022',
        grade: 'Percentage: 85.26%'
      }
    ],
    projects: [
      {
        name: 'GrapeVault on AWS',
        duration: 'Oct 2024 – Feb 2025',
        tech: 'AWS EC2, S3, Auto Scaling, VPC, CloudFormation, IAM',
        description: 'Successfully deployed and managed GrapeVault on AWS infrastructure achieving 99.99% uptime and 30% cost reduction. Automated deployments with CloudFormation and implemented robust security measures.',
        github: 'https://github.com/MAHIRE-7/GrapeVault'
      },
      {
        name: 'Cloud-Based CET Mock Test Platform',
        duration: 'Nov 2024 – Dec 2024',
        tech: 'AWS EC2, Apache, RDS MySQL, S3',
        description: 'Deployed robust hosting solution with auto-start/stop EC2 scripts for cost optimization. Implemented role-based access with user and admin dashboards.',
        github: '#'
      },
      {
        name: '3-Tier Quiz Application (Quizzy)',
        duration: '2024',
        tech: 'Node.js, Express, MySQL, Microservices, AWS',
        description: 'Interactive quiz application with separated presentation, logic, and data layers. Built with REST APIs and relational database for scalable architecture.',
        github: 'https://github.com/MAHIRE-7/Quizzy'
      },
      {
        name: '3-Tier Web Application Infrastructure IaC',
        duration: '2024',
        tech: 'Terraform, AWS, Infrastructure as Code',
        description: 'Terraform configurations for three-tier application architecture on AWS. Modular and maintainable infrastructure with networking, compute, and database resources.',
        github: 'https://github.com/MAHIRE-7/3-Tier-App-Terraform-Code'
      },
      {
        name: 'E-commerce Microservices on AWS EKS',
        duration: '2024',
        tech: 'AWS EKS, Kubernetes, Microservices, Cloud-Native',
        description: 'Production-ready microservices architecture demonstrating enterprise-grade patterns with Kubernetes and AWS services following cloud-native best practices.',
        github: 'https://github.com/MAHIRE-7/microservice-architecture'
      },
      {
        name: 'Wanderlust DevSecOps Pipeline',
        duration: '2024',
        tech: 'DevOps, Docker, CI/CD, Security Scanning',
        description: 'MERN travel blog with comprehensive DevSecOps pipeline including automated testing, security scanning, and deployment automation.',
        github: 'https://github.com/MAHIRE-7/Wanderlust-Mega-Project'
      },
      {
        name: 'Docker Learning Projects',
        duration: '2024',
        tech: 'Docker, Containerization, Docker Compose',
        description: 'Comprehensive collection demonstrating containerization concepts from beginner Dockerfiles to advanced multi-container setups with database integrations.',
        github: 'https://github.com/MAHIRE-7/docker-projects'
      },
      {
        name: 'Todo List App with Amazon Q',
        duration: '2024',
        tech: 'AWS Q, Web Development, CRUD Operations',
        description: 'Lightweight task management application demonstrating CRUD operations and web development fundamentals, developed using AWS Q Agentic AI Platform.',
        github: 'https://github.com/MAHIRE-7/todo-list-app'
      }
    ],
    volunteering: [
      {
        title: 'President',
        organization: 'Dr. D. Y. Patil College of Engineering and Innovation (DYPCOEI)',
        duration: 'Aug 2024 - Jun 2025 (11 months)',
        description: 'Leading student initiatives and academic programs at the college level.'
      },
      {
        title: 'President',
        organization: 'Cloud Visioners',
        duration: 'Aug 2024 - Jul 2025 (1 year)',
        description: 'Leading cloud technology community and organizing technical events.'
      },
      {
        title: 'Treasurer',
        organization: 'Dr. D. Y. Patil College of Engineering and Innovation (DYPCOEI)',
        duration: 'Aug 2023 - May 2024 (10 months)',
        description: 'Managed financial operations and budget planning for college activities.'
      }
    ],
    certifications: [
      'AWS Certified Cloud Practitioner (CLF-C02)',
      'Microsoft Certified: Azure Fundamentals (AZ-900)',
      'Linux for Cloud and DevOps Engineers'
    ]
  };
  
  res.render('index', { portfolio });
});

app.listen(PORT, () => {
  console.log(`Portfolio website running on http://localhost:${PORT}`);
});