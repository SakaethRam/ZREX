import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "FEATURES", href: "#features" },
  { label: "WORKFLOW", href: "#workflow" },
  { label: "FORUM", href: "#forum" },
  { label: "BLOGS", href: "#articles" },
];

export const FORUM = [
  {
    user: "@sam0724",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `C++ enhances workflows by offering high-performance execution, reducing processing time for complex tasks. Its robust memory management and multi-threading capabilities optimize resource utilization, making applications more efficient. With STL and advanced libraries, C++ streamlines development, boosting productivity in real-world projects! `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    user: "@charles4593",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Python automates repetitive tasks, reducing manual effort and boosting efficiency. Its vast libraries like Pandas, NumPy, and Selenium streamline data processing, analysis, and web automation. With simple scripting and AI integration, Python optimizes workflows across industries!`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    user: "@elizabeth75",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Node.js streamlines workflows by enabling asynchronous, non-blocking operations, reducing execution time for complex tasks. Its event-driven architecture enhances scalability, making it ideal for handling real-time applications and microservices. With a vast ecosystem of libraries, it accelerates development, allowing seamless automation and integration across various processes.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    user: "@tyla8976",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const BLOGS = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Node.js follows an event-driven, non-blocking architecture, efficiently handling multiple requests using its single-threaded event loop. ",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "MongoDB's workflow revolves around a document-based approach, where data is stored in flexible JSON-like BSON format.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: " With a unidirectional data flow and efficient reconciliation via the Virtual DOM, React ensures high performance and maintainability in modern web app.",
  },
  
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "C++ development follows a structured workflow: write code in a .cpp file, compile it using a compiler like g++, and execute the generated binary.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Hive Blockchain streamlines transactions with a fast, feeless, and decentralized structure, leveraging DPoS (Delegated Proof of Stake) for efficient scalability.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
