import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  TH,
  veda,
  latecomers
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "DSA Intern",
    company_name: "Technical Hub Pvt. Ltd",
    icon: TH,
    iconBg: "#E6DEDD",
    date: "March 2024 - June 2024",
    points: [
      "Worked on enhancing problem-solving skills by resolving algorithm challenges.",
      "Collaborated with team members to optimize data structures and algorithms.",
      "Contributed to code reviews and shared best practices in algorithm design.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Technical Hub Pvt. Ltd",
    icon: TH,
    iconBg: "#383E56",
    date: "June 2024 - Dec 2024",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Implemented user-friendly interfaces that increased user engagement.",
      "Optimized JavaScript code to enhance performance.",
      "Collaborated with team members to resolve cross-browser compatibility issues and improve code quality.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Late Comers Management",
    description:
      "A real-time dashboard application for Aditya University to track the late arrivals students and professors. Integrated weekly reports, automated notifications, and a visitor management system for 500+ campus  visitors using React.js,Mongo Db.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: latecomers, 
    source_code_link: "https://adityauniversity.in/latecomers", 
  },

  {
    name: "VEDA Website",
    description:
      "A responsive and secure website developed for the VEDA college event. Features include automated email confirmations and a customizable organizer dashboard, enhancing user experience and event management. Built using React.js, ExpressJS, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: veda, // Replace with your actual image asset for VEDA Website
    project_link: "https://adityauniversity.in/veda2024", // Replace with your source code link
  },
];

export { services, technologies, experiences, testimonials, projects };

// const projects = [
//   
// ];