import aws from "@/assets/skills-icons/aws.png";
import angular from "@/assets/skills-icons/angular.png";
import bootstrap from "@/assets/skills-icons/bootstrap.svg";
import docker from "@/assets/skills-icons/docker.png";
import html from "@/assets/skills-icons/html.png";
import javascript from "@/assets/skills-icons/java-script.png";
import java from "@/assets/skills-icons/java.png";
import mongo from "@/assets/skills-icons/mongo.png";
import mysql from "@/assets/skills-icons/mysql.png";
import react from "@/assets/skills-icons/react.png";
import flutter from "@/assets/skills-icons/flutter.png";
import python from "@/assets/skills-icons/python.png";
import typescript from "@/assets/skills-icons/typescript.png";
import nextjs from "@/assets/skills-icons/next.png";
import redux from "@/assets/skills-icons/redux.png";
import jquery from "@/assets/skills-icons/jquery.png";
import nodejs from "@/assets/skills-icons/nodejs.jpg";
import git from "@/assets/skills-icons/git.png";
import Kubernetes from "@/assets/skills-icons/kubernatives.png";
import firebase from "@/assets/skills-icons/firebase.png";
import dart from "@/assets/skills-icons/dart.png";
import { Briefcase, Code, Server, Rocket } from "lucide-react";



import blog from "@/assets/projects/blog-app1.png"

export const skills = [
  {
    id: 1,
    image: aws,
    name: "AWS",
    link: "https://aws.amazon.com/",
  },
  {
    id: 2,
    image: angular,
    name: "Angular",
    link: "https://angular.dev/overview",
  },
  {
    id: 3,
    image: bootstrap,
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    id: 4,
    image: docker,
    name: "Docker",
    link: "https://www.docker.com/",
  },
  {
    id: 5,
    image: html,
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    id: 6,
    image: javascript,
    name: "Java Script",
    link: "https://www.w3schools.com/js/",
  },
  {
    id: 7,
    image: java,
    name: "Java",
    link: "https://www.java.com/en/",
  },
  {
    id: 8,
    image: mongo,
    name: "Mongo DB",
    link: "https://www.mongodb.com/",
  },
  {
    id: 9,
    image: mysql,
    name: "My SQL",
    link: "https://www.mysql.com/",
  },
  {
    id: 10,
    image: react,
    name: "React",
    link: "https://react.dev/",
  },
  {
    id: 11,
    image: typescript,
    name: "Typescript",
    link: "https://react.dev/",
  },
  {
    id: 11,
    image: python,
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    id: 12,
    image: flutter,
    name: "Flutter",
    link: "https://flutter.dev/",
  },
  {
    id: 13,
    image: nextjs,
    name: "Next Js",
    link: "https://nextjs.org/",
  },
  {
    id: 14,
    image: jquery,
    name: "JQuery",
    link: "https://jquery.com/",
  },

  {
    id: 15,
    image: redux,
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    id: 16,
    image: react,
    name: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    id: 17,
    image: nodejs,
    name: "Node Js",
    link: "https://nodejs.org/",
  },
  {
    id: 18,
    image: git,
    name: "Git",
    link: "https://git-scm.com/",
  },
  {
    id: 19,
    image: Kubernetes,
    name: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    id: 20,
    image: firebase,
    name: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    id: 21,
    image: dart,
    name: "Dart",
    link: "https://dart.dev/",
  },
];

export const experiences = [
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

export const projects = [
  {
    id: 1,
    image: blog,
    name: "Blog app",
    description: "Using EJS templates and Node.js, hosted on AWS",
    link: "https://aws.amazon.com/",
  },
  {
    id: 2,
    image: angular,
    name: "Angular",
    link: "https://angular.dev/overview",
  },
  {
    id: 3,
    image: bootstrap,
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    id: 4,
    image: docker,
    name: "Docker",
    link: "https://www.docker.com/",
  },
  {
    id: 5,
    image: html,
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    id: 6,
    image: javascript,
    name: "Java Script",
    link: "https://www.w3schools.com/js/",
  },

];
