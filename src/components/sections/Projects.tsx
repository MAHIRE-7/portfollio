"use client";

import { memo, useRef } from "react";
import Image from "next/image";
import { RevealHeader } from "@/components/ui/reveal-header";
import { Github, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GrapeVault on AWS",
    category: "Cloud Infrastructure",
    image: "/images/projects/elite-hotel.png",
    description: "Successfully deployed and managed GrapeVault on AWS infrastructure achieving 99.99% uptime and 30% cost reduction. Automated deployments with CloudFormation and implemented robust security measures.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "CET Mock Test Platform",
    category: "Cloud Hosting Solution",
    image: "/images/projects/nxtcart.png",
    description: "Deployed robust hosting solution with auto-start/stop EC2 scripts for cost optimization. Implemented role-based access with user and admin dashboards using AWS EC2, Apache, RDS MySQL, and S3.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "3-Tier Quiz Application (Quizzy)",
    category: "Microservices Architecture",
    image: "/images/projects/dropbox-clone.png",
    description: "Interactive quiz application with separated presentation, logic, and data layers. Built with REST APIs and relational database for scalable architecture using Node.js, Express, MySQL, and AWS.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "3-Tier Web Application Infrastructure IaC",
    category: "Infrastructure as Code",
    image: "/images/projects/blog-platform.png",
    description: "Terraform configurations for three-tier application architecture on AWS. Modular and maintainable infrastructure with networking, compute, and database resources.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "E-commerce Microservices on AWS EKS",
    category: "Kubernetes & Cloud-Native",
    image: "/images/projects/pixabay-gallery.png",
    description: "Production-ready microservices architecture demonstrating enterprise-grade patterns with Kubernetes and AWS services following cloud-native best practices.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "Wanderlust DevSecOps Pipeline",
    category: "DevOps & Security",
    image: "/images/projects/elite-hotel.png",
    description: "MERN travel blog with comprehensive DevSecOps pipeline including automated testing, security scanning, and deployment automation using Docker and CI/CD.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "Docker Learning Projects",
    category: "Containerization",
    image: "/images/projects/nxtcart.png",
    description: "Comprehensive collection demonstrating containerization concepts from beginner Dockerfiles to advanced multi-container setups with database integrations.",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "Todo List App with Amazon Q",
    category: "AWS AI Platform",
    image: "/images/projects/dropbox-clone.png",
    description: "Lightweight task management application demonstrating CRUD operations and web development fundamentals, developed using AWS Q Agentic AI Platform.",
    liveUrl: "",
    githubUrl: ""
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only enable horizontal scroll on larger screens for better performance/UX on mobile
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xMovement = -(totalWidth - viewportWidth + 100); // 100px buffer

      gsap.to(containerRef.current, {
        x: xMovement,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${Math.max(containerRef.current!.scrollWidth - window.innerWidth, 2000)}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Force refresh to ensure accurate sizing
      setTimeout(() => ScrollTrigger.refresh(), 100);
    });

  }, { scope: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-20 bg-background overflow-hidden"
    >
      <div className="py-20 md:h-screen md:flex md:flex-col justify-center">
        {/* Header - Now part of flex flow, no absolute positioning */}
        <div className="container mx-auto px-6 mb-12">
          <div className="pl-6">
            <RevealHeader className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-foreground/30 dark:text-white/30 dark:mix-blend-overlay">
              Selected Works
            </RevealHeader>
            <div className="flex items-center gap-4 opacity-90 pl-2">
              <div className="w-24 h-1 bg-secondary" />
              <p className="text-lg text-muted-foreground uppercase tracking-widest font-medium">Interactive Gallery</p>
            </div>
          </div>
        </div>

        {/* Projects Container - Added margin top for spacing */}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-20 md:gap-32 px-6 md:px-0 md:pl-[10vw]"
        >
          {projects.map((project, index) => (
            <div key={index} className="shrink-0 w-full md:w-[60vw] lg:w-[50vw]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
          {/* Extra spacer for horizontal scroll end feel */}
          <div className="shrink-0 w-0 md:w-[10vw]" />
        </div>
      </div>
    </section>
  );
}

const ProjectCard = memo(function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <div className="group relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
        <div className="transform transition-transform duration-500 md:group-hover:-translate-y-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 border border-white/20 rounded-full bg-white/10 text-neon-blue backdrop-blur-sm">
              {project.category}
            </span>
            <span className="text-6xl font-black text-white/10 pointer-events-none select-none absolute top-8 right-8 md:top-12 md:right-12 z-0">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-white relative z-10 group-hover:text-neon-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl relative z-10 line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          {/* Action Buttons - Always visible on mobile, fade in/slide up on desktop hover */}
          <div className="flex items-center gap-6 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
            {project.liveUrl && (
              <a href={project.liveUrl} className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors uppercase text-sm font-bold tracking-wider">
                View Project <ArrowRight size={16} />
              </a>
            )}
            {project.liveUrl && <div className="h-4 w-px bg-white/20" />}
            <a href={project.githubUrl} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">
              <Github size={20} />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

