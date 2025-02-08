export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Thai Bad Words",
    description: "A library for detecting inappropriate Thai words in text content.",
    tags: ["TypeScript", "Library"],
    image: "/img/projects/thai-bad-words.png",
    link: "https://www.npmjs.com/package/@sit-sandbox/thai-bad-words",
    repo: "https://github.com/SIT-SandBox/thai-bad-words"
  },
  {
    title: "CodingType",
    description: "A coding speed test.",
    tags: ["Svelte", "TypeScript", "TailwindCSS"],
    image: "/img/projects/codingtype.png",
    link: "https://codingtype.vercel.app/",
    repo: "https://github.com/Supakornn/codingtype"
  },
  {
    title: "SYN Flood",
    description: "Basic SYN-Flood attack in go.",
    tags: ["Golang", "DDos", "Network"],
    image: "/img/projects/sys-flood.png",
    link: "",
    repo: "https://github.com/Supakornn/syn-flood"
  },
  {
    title: "Reverse Shell Generator",
    description: "A CLI reverse shell generator.",
    tags: ["Golang", "Hacking"],
    image: "/img/projects/reverse-shell.jpg",
    link: "",
    repo: "https://github.com/Supakornn/reverse-shell-gen"
  }
];
