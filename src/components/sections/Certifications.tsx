"use client";

import { motion } from "framer-motion";
import { RevealHeader } from "@/components/ui/reveal-header";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025 - May 2028",
    credentialId: "b720be53a3e04c708232a9957b378d9a",
    category: "Cloud Computing",
    verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/b720be53a3e04c708232a9957b378d9a"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Sep 2024",
    credentialId: "3704B85AF99B7AD6",
    category: "Cloud Computing",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Manodayanilahire-2413/3704B85AF99B7AD6?sharingId=9E58F2402D2F731C"
  },
  {
    title: "GHCI 2025 - Hackathon Participation Certificate",
    issuer: "AnitaB.org India",
    date: "Dec 2025",
    credentialId: "",
    category: "Hackathon",
    verifyUrl: "https://www.verix.io/credential/8f85838e-ef24-416f-86f4-d22e3684e490/"
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Nov 2024",
    credentialId: "vZKnQdLmrtMDGcPzF",
    category: "Cloud Computing",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS_vZKnQdLmrtMDGcPzF_1731398400.pdf"
  },
  {
    title: "Linux for Cloud & DevOps Engineers",
    issuer: "Udemy",
    date: "Completed",
    credentialId: "UC-803bea71-ea17-4080-9401-8104048fb1e8",
    category: "DevOps",
    verifyUrl: "https://ude.my/UC-803bea71-ea17-4e80-9401-8104048fb1e8"
  },
  {
    title: "AWS Educate Getting Started with Security",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2025",
    credentialId: "",
    category: "Security",
    verifyUrl: "https://www.credly.com/badges/4261bb72-9fb1-4420-a750-7fc28f479e0c/linked_in_profile"
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2025",
    credentialId: "",
    category: "Cloud Computing",
    verifyUrl: "https://www.credly.com/badges/670a3589-1c75-4e9c-b44f-ae224799d051/linked_in_profile"
  },
  {
    title: "HackerRank Certified Python Developer",
    issuer: "HackerRank",
    date: "Completed",
    credentialId: "D0774E810FC3",
    category: "Programming",
    verifyUrl: "https://www.hackerrank.com/certificates/d0774e810fc3"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-accent/10 border-y border-black/5 dark:border-white/5 mt-20">
      <div className="container mx-auto px-6">
        <RevealHeader className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16 text-center">
          Certifications
        </RevealHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => cert.verifyUrl && window.open(cert.verifyUrl, '_blank')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-accent/20 rounded-full text-muted-foreground">
                  {cert.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-xs text-muted-foreground mb-4">
                {cert.date}
              </p>

              {cert.credentialId && (
                <div className="text-xs text-muted-foreground font-mono">
                  ID: {cert.credentialId}
                </div>
              )}

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.verifyUrl ? (
                  <ExternalLink className="w-4 h-4 text-secondary" />
                ) : (
                  <Award className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}