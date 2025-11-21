import { Category } from "./interfaces";

export interface Project {
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
    title: "Rails Scroll Effects",
    shortBio:
      "A collection of scroll-based animations and effects for Ruby on Rails applications",
    description:
      "The idea behind this project was to create a set of scroll-based animations and effects that could be easily integrated into Ruby on Rails applications. Heavily inspired by AOS.JS, this project includes a variety of effects such as fade-ins, slide-ins, and more. Each effect is implemented using JavaScript and CSS through Stimulus.",
    githubRepo: "https://github.com/agustinlopez9/rails-scroll-effects",
    website: "https://rails-scroll-effects.onrender.com/",
    techStack: ["Ruby on Rails", "Javascript", "CSS", "Stimulus"],
    image: "rails-scroll-effects.png",
    category: Category.frontend,
  },
  // Backend Project
  // Design Project
  // Challenge Project
];
