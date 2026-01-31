"use client";

import { motion } from "framer-motion";

const skills = [
  "AWS", "Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Jenkins",
  "Terraform", "GitLab", "GitHub", "Git", "EC2", "S3", "IAM", "RDS", "VPC", "EKS",
  "SQS", "Auto Scaling", "Elastic Load Balancing", "Nginx", "Apache2", "Tomcat", "IIS",
  "Artifactory", "Infrastructure as Code", "CI/CD", "Site Reliability Engineering", "Microservices",
  "3-Tier Architecture", "Solution Architecture", "Cloud Infrastructure", "MySQL", "DynamoDB",
  "Database Management", "Python", "Shell Scripting", "YAML", "JSON", "CloudWatch",
  "CloudTrail", "Grafana", "Azure Monitor", "Security Groups", "KMS", "WAF",
  "Network Security", "Microsoft Entra ID", "Subnets", "Route Tables", "NAT Gateway",
  "Virtual Networks", "Load Balancing", "Linux", "Red Hat Linux", "Windows",
  "Linux Server", "Maven", "Gradle", "AWS Q"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-accent/20 border-y border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Tech Stack
        </h2>
        <div className="w-full h-px bg-black/10 dark:bg-white/10" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative px-6 py-3 border border-black/10 dark:border-white/10 rounded-full hover:border-black dark:hover:border-white transition-colors cursor-default bg-background"
            >
              <span className="text-lg md:text-xl font-medium uppercase tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
