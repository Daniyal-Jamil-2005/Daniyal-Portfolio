import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiLinux,
  SiGithubactions,
  SiGitlab,
  SiAnsible,
  SiArgo,
  SiDjango,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; tag: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    tag: "infra",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    title: "CI/CD & Automation",
    tag: "pipelines",
    skills: [
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "ArgoCD", icon: SiArgo, color: "#EF7B4D" },
    ],
  },
  {
    title: "Backend",
    tag: "backend",
    skills: [
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "REST APIs", icon: TbApi, color: "#38e0d4" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    ],
  },
  {
    title: "Frontend",
    tag: "frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Software Development",
    tag: "dev",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];
