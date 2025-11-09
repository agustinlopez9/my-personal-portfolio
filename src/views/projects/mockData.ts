import { Category } from "./interfaces";

export interface Project {
  id: number;
  title: string;
  shortBio: string;
  description: string;
  githubRepo: string;
  website?: string;
  techStack: string[];
  image: string;
  category: Category;
}

export const projects: Project[] = [
  // Frontend Projects
  {
    id: 1,
    title: "E-Commerce Dashboard",
    shortBio:
      "Modern admin dashboard for e-commerce management with real-time analytics",
    description:
      "A comprehensive e-commerce administration dashboard built with React and TypeScript. Features include real-time sales analytics, inventory management, customer insights, and order tracking. The dashboard implements advanced data visualization with interactive charts, responsive design for mobile and desktop, and seamless API integration for live data updates.",
    githubRepo: "https://www.google.com",
    website: "https://www.google.com",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "React Query",
      "Zustand",
    ],
    image:
      "https://images.pexels.com/photos/34155611/pexels-photo-34155611.jpeg",
    category: Category.frontend,
  },
  {
    id: 2,
    title: "Social Media Platform",
    shortBio:
      "Full-featured social media app with real-time messaging and content sharing",
    description:
      "A modern social media platform featuring user authentication, real-time chat, post creation with image/video upload, likes and comments system, user profiles, and a dynamic news feed. Built with React and integrated with Firebase for real-time functionality. Includes dark/light mode themes, responsive design, and optimized performance with lazy loading and infinite scrolling.",
    githubRepo: "https://www.google.com",
    website: "https://www.google.com",
    techStack: ["React", "Firebase", "Material-UI", "Framer Motion"],
    image:
      "https://images.pexels.com/photos/33359035/pexels-photo-33359035.jpeg",
    category: Category.frontend,
  },
  {
    id: 3,
    title: "Weather Forecast App",
    shortBio:
      "Beautiful weather application with location-based forecasts and interactive maps",
    description:
      "An elegant weather application that provides detailed weather forecasts, interactive weather maps, and location-based weather alerts. Features include 7-day forecasts, hourly weather data, weather radar maps, and personalized weather notifications. The app uses geolocation services and integrates with multiple weather APIs for accurate data. Includes animated weather icons and smooth transitions.",
    githubRepo: "https://www.google.com",
    website: "https://www.google.com",
    techStack: ["React", "TypeScript", "Styled Components", "OpenWeather API"],
    image:
      "https://images.pexels.com/photos/34192189/pexels-photo-34192189.jpeg",
    category: Category.frontend,
  },

  // Backend Project
  {
    id: 4,
    title: "Task Management API",
    shortBio:
      "RESTful API for team collaboration and project management with real-time updates",
    description:
      "A robust RESTful API built with Node.js and Express for managing teams, projects, and tasks. Features include user authentication with JWT, role-based access control, real-time updates via WebSockets, file upload handling, email notifications, and comprehensive task management with deadlines, priorities, and status tracking. Includes API documentation with Swagger and comprehensive test coverage.",
    githubRepo: "https://www.google.com",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Multer",
      "Jest",
      "Swagger",
    ],
    image: "/images/task-api.jpg",
    category: Category.backend,
  },

  // Design Project
  /*   {
    id: 5,
    title: "Brand Identity & UI Kit",
    shortBio: "Complete brand identity design for a tech startup with comprehensive UI components",
    description: "A comprehensive brand identity project for a fintech startup including logo design, color palette, typography system, and a complete UI component library. The project encompasses brand guidelines, business card designs, website mockups, mobile app interfaces, and marketing materials. Created a cohesive design system with reusable components, icons, and interactive prototypes that maintain consistency across all digital touchpoints.",
    githubRepo: "https://www.google.com",
    website: "https://www.google.com",
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Principle", "InVision", "Sketch"],
    image: "/images/brand-design.jpg",
    category: Category.design
  }, */

  // Challenge Project
  {
    id: 6,
    title: "Algorithm Visualization Tool",
    shortBio:
      "Interactive web app for visualizing sorting and pathfinding algorithms in real-time",
    description:
      "An educational web application that visualizes various computer science algorithms including sorting algorithms (bubble sort, merge sort, quick sort) and pathfinding algorithms (Dijkstra's, A*). Features interactive controls for algorithm speed, data size adjustment, and step-by-step execution. Built as a coding challenge to demonstrate understanding of algorithms and data structures while creating an engaging educational tool for students learning computer science concepts.",
    githubRepo: "https://www.google.com",
    website: "https://www.google.com",
    techStack: [
      "JavaScript",
      "Canvas API",
      "HTML5",
      "CSS3",
      "Web Workers",
      "D3.js",
    ],
    image: "/images/algorithm-visualizer.jpg",
    category: Category.challenge,
  },
];
