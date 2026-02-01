"use client";

import { motion } from "framer-motion";
import { RevealHeader } from "@/components/ui/reveal-header";
import { useState } from "react";
import { ArticleModal } from "@/components/ui/article-modal";
import Image from "next/image";

const posts = [
  {
    category: "DevOps",
    readTime: "8 min read",
    title: "Building CI/CD Pipelines with Jenkins & Docker",
    image: "/images/insights/commerce_to_code.png",
    excerpt: "How I implemented automated deployment pipelines for cloud-native applications using Jenkins, Docker, and Kubernetes orchestration.",
    content: `Building robust CI/CD pipelines transformed how I deploy applications to production. Moving from manual deployments to automated pipelines reduced deployment time from hours to minutes.
    
My pipeline architecture includes:
- **Source Control Integration**: GitHub webhooks trigger Jenkins builds automatically
- **Automated Testing**: Unit tests, integration tests, and security scans with Trivy
- **Containerization**: Docker builds create consistent, portable application images
- **Orchestration**: Kubernetes deployments with rolling updates and health checks

This DevSecOps approach ensures code quality, security, and reliability in every deployment.`
  },
  {
    category: "Cloud Architecture",
    readTime: "10 min read",
    title: "Scaling Applications on AWS with Auto Scaling",
    image: "/images/insights/microservices_architecture.png",
    excerpt: "Deep dive into AWS Auto Scaling, Load Balancers, and VPC design for high-availability cloud infrastructure that scales with demand.",
    content: `Designing scalable cloud infrastructure on AWS requires understanding the interplay between multiple services.

For the GrapeVault project, I implemented:
- **Auto Scaling Groups**: Automatically adjust EC2 instances based on CPU and memory metrics
- **Application Load Balancer**: Distributes traffic across healthy instances with health checks
- **VPC Design**: Multi-AZ deployment with public/private subnets for security
- **RDS Multi-AZ**: Database high availability with automatic failover
- **CloudWatch Monitoring**: Real-time metrics and alerting for proactive scaling

This architecture achieved 99.99% uptime and 30% cost reduction through intelligent resource management.`
  },
  {
    category: "Infrastructure as Code",
    readTime: "7 min read",
    title: "Terraform: Managing Cloud Infrastructure as Code",
    image: "/images/insights/nextjs_ecommerce.png",
    excerpt: "Why Infrastructure as Code with Terraform revolutionized my cloud deployments. From manual provisioning to automated, version-controlled infrastructure.",
    content: `Manual cloud resource provisioning was error-prone and time-consuming. Terraform changed everything by treating infrastructure as code.

Key benefits I discovered:
- **Version Control**: Infrastructure changes tracked in Git with proper review processes
- **Reproducibility**: Identical environments across dev, staging, and production
- **Modularity**: Reusable modules for VPC, security groups, and compute resources
- **State Management**: Terraform state files ensure infrastructure consistency
- **Collaboration**: Team members can safely make infrastructure changes

My 3-tier application Terraform modules now deploy complete AWS environments in under 10 minutes.`
  },
  {
    category: "Container Orchestration",
    readTime: "9 min read",
    title: "Kubernetes in Production: Lessons Learned",
    image: "/images/insights/minimalist_ui.png",
    excerpt: "From Docker containers to Kubernetes orchestration. How I deployed microservices on AWS EKS with proper monitoring and security.",
    content: `Moving from Docker containers to Kubernetes orchestration was a significant learning curve, but essential for production-grade microservices.

Key Kubernetes concepts I mastered:
- **Deployments & ReplicaSets**: Ensuring application availability and scaling
- **Services & Ingress**: Network routing and load balancing within the cluster
- **ConfigMaps & Secrets**: Secure configuration management
- **Persistent Volumes**: Stateful application data management
- **RBAC**: Role-based access control for cluster security

AWS EKS simplified cluster management while providing enterprise-grade security and monitoring capabilities.`
  },
  {
    category: "Monitoring & Observability",
    readTime: "6 min read",
    title: "Implementing Observability with Grafana & Prometheus",
    image: "/images/insights/docker_k8s.png",
    excerpt: "Building comprehensive monitoring solutions for cloud infrastructure. From metrics collection to alerting and incident response.",
    content: `Effective monitoring is crucial for maintaining reliable cloud services. I implemented a complete observability stack using Prometheus and Grafana.

My monitoring strategy includes:
- **Metrics Collection**: Prometheus scrapes application and infrastructure metrics
- **Visualization**: Grafana dashboards for real-time system health monitoring
- **Alerting**: Automated alerts for critical thresholds and anomalies
- **Log Aggregation**: ELK stack for centralized log management and analysis
- **Distributed Tracing**: Understanding request flows across microservices

This observability foundation enables proactive issue detection and faster incident resolution.`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-background border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <RevealHeader className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Insights
          </RevealHeader>
          <div className="hidden md:block text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Read my latest thoughts
          </div>
        </div>

        {/* Bento / Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer bg-accent/5 border border-black/5 dark:border-white/5 ${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              onClick={() => setSelectedPost(post)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 lg:bg-black/40 lg:group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                  <span className="px-2 py-1 border border-white/20 rounded-full bg-white/10 backdrop-blur-md">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className={`font-bold text-neon-blue lg:text-white mb-3 leading-tight lg:group-hover:text-neon-blue transition-colors ${index === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {post.title}
                </h3>

                {index === 0 && (
                  <p className="text-white/80 text-base md:text-lg font-serif italic line-clamp-2 max-w-xl">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-6 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-bold uppercase tracking-wider text-neon-blue flex items-center gap-2">
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <ArticleModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          article={selectedPost}
        />
      </div>
    </section>
  );
}
