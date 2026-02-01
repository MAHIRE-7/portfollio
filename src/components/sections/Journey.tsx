"use client";

import { useRef } from "react";
import { RevealHeader } from "@/components/ui/reveal-header";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    year: "Oct 2025 - Present",
    role: "Infrastructure Engineer Intern",
    company: "Excellon Software",
    description: "Manage and support production Azure cloud infrastructure for internal and client-facing applications. Work with Azure cloud, Grafana monitoring, and infrastructure automation tools. Perform daily cloud health checks and support deployment processes."
  },
  {
    year: "Jun 2025 - Oct 2025",
    role: "Jr. Cloud Engineer Intern",
    company: "Cravita Technologies India Private Limited",
    description: "Worked with Amazon Web Services (AWS) and DevOps practices. Gained hands-on experience in cloud infrastructure management and deployment automation processes."
  },
  {
    year: "Jun 2024 - Jul 2024",
    role: "Cloud Engineer Intern",
    company: "Acmegrade",
    description: "Focused on solution architecture and cloud infrastructure design. Gained experience in designing scalable cloud solutions and architectural best practices for enterprise applications."
  },
  {
    year: "Jun 2024 - Jul 2024",
    role: "Cloud Engineer Intern",
    company: "Devskillhub Training and Consultancy",
    description: "Enhanced skills in cloud services and cloud infrastructure development. Worked on cloud platform management and infrastructure automation projects."
  },
  {
    year: "Oct 2023 - Nov 2023",
    role: "Cloud Engineer",
    company: "Pantechelearning",
    description: "Worked with cloud services and gained foundational experience in cloud computing platforms. Built expertise in cloud service management and deployment strategies."
  }
];

const volunteering = [
  {
    year: "Aug 2024 - Present",
    role: "President Students Welfare & Cloud Visioners Club",
    company: "Dr. D. Y. Patil College of Engineering",
    description: "Leading student initiatives and academic programs at the college level. President of Cloud Visioners Club organizing cloud technology community and technical events."
  },
  {
    year: "Aug 2023 - May 2024",
    role: "Treasurer Students Welfare",
    company: "Dr. D. Y. Patil College of Engineering",
    description: "Managed financial operations and budget planning for college activities. Coordinated student welfare programs and initiatives."
  }
];

const education = [
  {
    year: "Nov 2022 - Jun 2025",
    role: "Bachelor of Computer Engineering",
    company: "Dr. D. Y. Patil College of Engineering",
    description: "CGPA: 8.69. Strong focus on cloud technologies and DevOps practices with active leadership roles in student organizations."
  },
  {
    year: "Aug 2019 - Jul 2022",
    role: "Diploma in Computer Engineering",
    company: "Government Polytechnic, Nandurbar",
    description: "Percentage: 85.26%. Built strong foundation in computer engineering fundamentals and programming concepts."
  }
];

const allJourney = [...experience, ...volunteering, ...education];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Pinning and Timeline Animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
      });

      const line = containerRef.current?.querySelector(".timeline-line-fill");
      if (line) {
        gsap.fromTo(line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        );
      }
    });

    // Universal: Item Reveal (works on both but simple on mobile)
    const items = gsap.utils.toArray(".journey-item");
    items.forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => mm.revert();

  }, { scope: containerRef });

  return (
    <section id="journey" className="bg-background relative">
      <div
        ref={containerRef}
        className="container mx-auto px-6 flex flex-col md:flex-row min-h-screen"
      >
        {/* Left Column - Pinned */}
        <div
          ref={leftRef}
          className="w-full md:w-1/2 flex flex-col justify-center relative"
        >
          <RevealHeader className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 md:mb-0 text-foreground/20">
            Experience & Education
          </RevealHeader>
          <div className="w-24 h-1 bg-secondary mt-4 hidden md:block" />
        </div>

        {/* Right Column - Scrolling Content */}
        <div ref={rightRef} className="w-full md:w-1/2 flex flex-col justify-center py-20 md:py-32 relative">

          {/* Thread/Timeline Line */}
          <div className="absolute left-0 top-24 bottom-20 w-[2px] bg-black/5 dark:bg-white/5 hidden md:block overflow-hidden rounded-full">
            <div className="timeline-line-fill w-full h-full bg-secondary origin-top shadow-[0_0_15px_var(--secondary)]" />
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-secondary">Experience</h3>
            <div className="space-y-16 pl-0 md:pl-12">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="journey-item relative flex flex-col gap-4 border-l-2 md:border-l-0 border-black/10 dark:border-white/10 pl-8 md:pl-0"
                >
                  <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-secondary md:hidden origin-top scale-y-0 transition-transform duration-1000" />
                  <div className="relative">
                    <div className="absolute -left-[54px] top-2 w-3 h-3 bg-background border-2 border-secondary rounded-full hidden md:block z-10 box-content shadow-[0_0_10px_var(--secondary)]" />
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                      {item.role}
                    </h4>
                    <p className="text-lg font-medium text-muted-foreground uppercase mb-4 tracking-wide">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-secondary">Leadership & Volunteering</h3>
            <div className="space-y-16 pl-0 md:pl-12">
              {volunteering.map((item, index) => (
                <div
                  key={index}
                  className="journey-item relative flex flex-col gap-4 border-l-2 md:border-l-0 border-black/10 dark:border-white/10 pl-8 md:pl-0"
                >
                  <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-secondary md:hidden origin-top scale-y-0 transition-transform duration-1000" />
                  <div className="relative">
                    <div className="absolute -left-[54px] top-2 w-3 h-3 bg-background border-2 border-secondary rounded-full hidden md:block z-10 box-content shadow-[0_0_10px_var(--secondary)]" />
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                      {item.role}
                    </h4>
                    <p className="text-lg font-medium text-muted-foreground uppercase mb-4 tracking-wide">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-secondary">Education</h3>
            <div className="space-y-16 pl-0 md:pl-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="journey-item relative flex flex-col gap-4 border-l-2 md:border-l-0 border-black/10 dark:border-white/10 pl-8 md:pl-0"
                >
                  <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-secondary md:hidden origin-top scale-y-0 transition-transform duration-1000" />
                  <div className="relative">
                    <div className="absolute -left-[54px] top-2 w-3 h-3 bg-background border-2 border-secondary rounded-full hidden md:block z-10 box-content shadow-[0_0_10px_var(--secondary)]" />
                    <span className="text-secondary font-bold text-sm uppercase tracking-widest block mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                      {item.role}
                    </h4>
                    <p className="text-lg font-medium text-muted-foreground uppercase mb-4 tracking-wide">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
