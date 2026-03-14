export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percentage: number;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    emoji: "⚙️",
    skills: [
      { name: "Python", level: "Intermediate", percentage: 70 },
      { name: "SQL", level: "Intermediate", percentage: 60 },
      { name: "Typescript", level: "Beginner", percentage: 45 },
      { name: "Flutter", level: "Beginner", percentage: 35 },
      { name: "MongoDB", level: "Intermediate", percentage: 70 },
      { name: "Git", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    title: "AI & Machine Learning",
    emoji: "🤖",
    skills: [
      { name: "Scikit-Learn", level: "Beginner", percentage: 42 },
      { name: "Computer Vision", level: "Intermediate", percentage: 65 },
      { name: "NLP", level: "Beginner", percentage: 40 },
      { name: "TensorFlow", level: "Beginner", percentage: 35 },
      { name: "TensorFlow Lite", level: "Beginner", percentage: 35 },
      { name: "Statistics", level: "Intermediate", percentage: 75 },
    ],
  },
];

export const services = [
  {
    title: "Software Development",
    emoji: "🖥️",
    description:
      "I bridge user needs and technical capabilities by leveraging scenario analysis and programming languages to deliver user-centric solutions.",
    highlights: [
      "Backend Script Writing",
      "Front end Development",
      "API Integrations",
      "Automation & Tooling",
    ],
  },
  {
    title: "AI & Machine Learning",
    emoji: "🧠",
    description:
      "Building intelligent systems that learn from data — from food waste prediction models to computer vision pipelines.",
    highlights: [
      "Predictive Modelling",
      "Computer Vision Pipelines",
      "NLP Applications",
      "ML Model Deployment",
    ],
  },
  {
    title: "Data Engineering",
    emoji: "📊",
    description:
      "Transforming messy data into clean, actionable insights through robust pipelines and clear visualisations.",
    highlights: [
      "Data Migration & Scripting",
      "ETL Pipelines",
      "Dashboard & Reports",
      "Data Quality Auditing",
    ],
  },
];
