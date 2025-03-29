import Container from "@/components/custom/Container";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Server, Rocket } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Gandeevan Technologies (opc) Pvt Ltd",
      period: "Sep 2024 - Present",
      description:
        "Spearheaded the development of interactive web applications using React.js. Led API integrations and optimized frontend performance for seamless user experience.",
      icon: <Code className="text-blue-400" size={24} />,
      tags: [
        "React.js",
        "Next.js",
        "Zustand",
        "TailwindCSS",
        "Redux",
        "Node.js",
        "Kafka",
        "Zookeeper",
        "AWS",
        "API Integration",
      ],
    },
    {
      role: "Prompt Engineer",
      company: "Deccan AI",
      period: "Aug 2024 - Present",
      description:
        "Developing and optimizing AI prompts to enhance the performance of large language models (LLMs). Researching and fine-tuning NLP models to improve response accuracy and contextual understanding.",
      icon: <Rocket className="text-orange-400" size={24} />,
      tags: ["Python", "LLM", "AI Model Understanding", "NLP"],
    },
    {
      role: "Front End Consultant",
      company: "ELDAAS Technologies",
      period: "Feb 2024 - Aug 2024",
      description:
        "Worked on diverse freelance projects involving frontend and backend development. Specialized in React, state management, and UI/UX enhancements.",
      icon: <Rocket className="text-orange-400" size={24} />,
      tags: ["React.js", "Redux", "REST APIs", "JavaScript"],
    },
    {
      role: "Software Developer",
      company: "TicketsQue Solutions Pvt Ltd",
      period: "Aug 2023 - Oct 2024",
      description:
        "Contributed to the development of a ticket management system, focusing on frontend architecture, API integration, and performance optimization for event-based applications.",
      icon: <Code className="text-blue-400" size={24} />,
      tags: [
        "React.js",
        "Next.js",
        "Node.js",
        "Redux",
        "AWS",
        "REST APIs",
        "JavaScript",
        "GIT",
        "HTML",
        "CSS",
      ],
    },
    {
      role: "Software Engineer (Intern)",
      company: "TicketsQue Solutions Pvt Ltd",
      period: "May 2023 - July 2023",
      description:
        "Designed and developed a super admin panel for event organizers, enhancing the management of the e-commerce platform. Focused on UI development, API integration, and improving the admin experience.",
      icon: <Server className="text-purple-400" size={24} />,
      tags: ["React.js", "Redux", "REST APIs", "JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div className="bg-black pt-20 pb-32" id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl border border-gray-800 p-6 sm:p-12 shadow-2xl shadow-blue-900/20"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/20 p-3 rounded-full mb-6"
            >
              <Briefcase className="text-blue-400" size={32} />
            </motion.div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-400 max-w-2xl">
              My career path through innovative companies and challenging
              projects that shaped my expertise.
            </p>
          </div>

          <div className="space-y-8 relative">
            {/* Timeline bar */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center pt-1 w-16">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-4 border-gray-900 z-10"></div>
                </div>

                {/* Experience card */}
                <div className="flex-1 bg-gray-900/50 hover:bg-gray-900/70 transition-all rounded-xl p-6 border border-gray-800 shadow-lg group-hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg text-purple-300 mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
