export interface Skill {
  name: string;
  icon: string;
  darkIcon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    icon: "💻",
    skills: [
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Go",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg",
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Rust",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Lua",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Astro",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg",
      },
      {
        name: "Svelte",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Bun.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bun/bun-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Fiber",
        icon: "https://gofiber.io/assets/images/logo.svg",
        darkIcon: "https://docs.gofiber.io/img/logo-dark.svg",
      },
      {
        name: "Echo",
        icon: "https://avatars.githubusercontent.com/u/2624634?s=400&v=4",
      },
      {
        name: "GraphQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  {
    title: "Database",
    icon: "💾",
    skills: [
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },

      {
        name: "MySQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
      },
      {
        name: "Gorm",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg",
      },
    ],
  },
  {
    title: "DevOps",
    icon: "🚀",
    skills: [
      {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "GCP",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Azure",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
      },
    ],
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: [
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
    ],
  },
];
