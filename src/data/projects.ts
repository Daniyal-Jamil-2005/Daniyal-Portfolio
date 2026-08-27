import inboxCopilotPreview from "../imports/inboxcopilot.png";

export type ProjectLink = {
  live?: string;
  liveLabel?: string;
  apk?: string;
  github: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  tagline: string;
  blurb: string;
  domain: string;
  preview?: string;
  tech: string[];
  links: ProjectLink;
  overview: string;
  highlights: string[];
  stack: { label: string; items: string[] }[];
  architecture?: string;
};

export const projects: Project[] = [
  {
    slug: "reddits-feelings",
    name: "Reddit's Feelings",
    year: "2026",
    tagline: "Skip the endless scrolling — see what Reddit really thinks.",
    blurb:
      "A real-time sentiment consensus engine that scans Reddit discussions and returns a single 0–100 verdict score.",
    domain: "NLP · Data",
    preview:
      "https://raw.githubusercontent.com/Daniyal-Jamil-2005/Reddit-s-Feelings/main/ScreenShots/case%201.PNG",
    tech: ["Python", "Streamlit", "PRAW", "NLTK VADER", "Plotly"],
    links: {
      live: "https://reddits-feelings.streamlit.app/",
      liveLabel: "Live App",
      github: "https://github.com/Daniyal-Jamil-2005/Reddit-s-Feelings",
    },
    overview:
      "Enter any product, brand, person or topic and Reddit's Feelings scans hundreds of community discussions in real time, extracts sentiment vectors, weights opinions by engagement (upvotes + comments), and delivers a definitive 0–100 verdict score alongside key themes and critical feedback — no account login, read-only and privacy-first.",
    highlights: [
      "0–100 community verdict score replaces ambiguous sentiment metrics",
      "Logarithmic engagement weighting so top voices shape the verdict over noise",
      "Automatic theme extraction: 'What Reddit Loves' vs 'Main Complaints'",
      "N-gram phrase mining surfaces recurring keywords and hot topics",
      "Read-only application-only auth — never touches user accounts",
    ],
    stack: [
      { label: "Core", items: ["Python 3.9+", "Streamlit 1.37+"] },
      { label: "Data & NLP", items: ["PRAW 7.7", "NLTK (VADER + WordNet)", "Pandas", "NumPy"] },
      { label: "Viz & Config", items: ["Plotly", "python-dotenv"] },
    ],
    architecture:
      "Search query → read-only Reddit scraper → NLTK sanitizer → VADER sentiment → logarithmic engagement weighting → executive verdict & insights dashboard.",
  },
  {
    slug: "inbox-copilot",
    name: "Inbox Copilot",
    year: "2026",
    tagline: "Turn your inbox from a storage bin into an action dashboard.",
    blurb:
      "AI email intelligence that parses, classifies and deterministically ranks opportunities against a student profile.",
    domain: "AI Agent · Full-stack",
    preview: inboxCopilotPreview,
    tech: ["FastAPI", "React 19", "Cerebras LLM", "IMAP/OAuth"],
    links: {
      live: "https://inbox-copilot-sigma.vercel.app/",
      liveLabel: "Live Demo",
      github: "https://github.com/Daniyal-Jamil-2005/Inbox_Copilot_Demo_version",
    },
    overview:
      "An AI-powered inbox intelligence app for students that automatically parses, classifies and ranks opportunities — internships, scholarships, hackathons, grants — against a student's vector profile. This recruiter-friendly demo edition runs database-free with a synthetic inbox of 38 realistic emails plus optional live Gmail/Outlook scanning.",
    highlights: [
      "Real LLM extraction via Cerebras llama3.1-8b with server-side secret hiding",
      "6-dimensional deterministic scoring engine (out of 105 points)",
      "Noise elimination with explicit rejection reasons for discarded mail",
      "Live inbox scanning via IMAP (Gmail App Passwords) and Outlook OAuth",
      "SlowAPI rate-limiting to protect the backend and AI quota",
    ],
    stack: [
      { label: "Frontend", items: ["React 19"] },
      { label: "Backend", items: ["FastAPI 0.100+", "SlowAPI", "In-memory sessions"] },
      { label: "AI", items: ["Cerebras llama3.1-8b", "Deterministic scoring"] },
    ],
    architecture:
      "React 19 client → HTTPS API → FastAPI (rate limiting + session manager + deterministic engine) → synthetic dataset / server-side AI agent engine.",
  },
  {
    slug: "skillsync",
    name: "SkillSync",
    year: "2026",
    tagline: "AI that assigns tasks to the right people, automatically.",
    blurb:
      "An AI-powered workforce operating system on serverless AWS that matches employees to tasks and balances workloads.",
    domain: "Cloud · AWS Serverless",
    preview:
      "https://github.com/user-attachments/assets/0fb724c8-b4c8-423d-8fb3-9def1dadc7a8",
    tech: ["AWS Lambda", "DynamoDB", "Cognito", "API Gateway", "React"],
    links: {
      live: "https://daniyal-jamil-2005.github.io/Skill-Sync/",
      liveLabel: "Live Demo",
      github: "https://github.com/Daniyal-Jamil-2005/Skill-Sync",
    },
    overview:
      "An end-to-end platform that turns internal work into a dynamic project marketplace: employees browse and claim skill-matched tasks, managers get real-time visibility into skill inventories and workload, and an agentic AI layer auto-routes unclaimed work to optimal candidates. Built on a scalable, multi-tenant AWS serverless architecture.",
    highlights: [
      "AI-driven task-to-employee routing when work goes unclaimed",
      "Multi-tenant isolation across companies with Cognito-managed auth",
      "15+ pre-built industry skill taxonomies for onboarding",
      "Independent Lambda microservices for variable, scalable load",
      "Skill-gap analysis and workforce productivity insights",
    ],
    stack: [
      { label: "Frontend", items: ["React + Vite", "Tailwind CSS", "TypeScript"] },
      { label: "Backend", items: ["AWS Lambda (Node.js ESM)", "API Gateway"] },
      { label: "Data & Auth", items: ["Amazon DynamoDB", "Amazon Cognito", "CloudFormation"] },
    ],
    architecture:
      "React frontends → API Gateway → Lambda microservices (auth, admin, employee, onboarding, pulse-cards) → DynamoDB, with Cognito JWT multi-tenant auth and CloudFormation-driven deploys.",
  },
  {
    slug: "ciro",
    name: "CIRO",
    year: "2026",
    tagline: "Crisis Intelligence & Response Operations.",
    blurb:
      "An autonomous multi-agent platform for real-time crisis detection, geo-mapping and coordinated response.",
    domain: "AI Agents · Mobile",
    preview:
      "https://raw.githubusercontent.com/Daniyal-Jamil-2005/CIRO/main/docs/assets/screenshots/mobile_map.png",
    tech: ["Flutter", "Python", "Firebase", "React", "Google Maps"],
    links: {
      apk: "https://github.com/Daniyal-Jamil-2005/CIRO/raw/main/base.apk",
      github: "https://github.com/Daniyal-Jamil-2005/CIRO",
    },
    overview:
      "CIRO bridges automated social and environmental signal ingestion with an autonomous 4-stage AI pipeline, keeping a Flutter mobile dispatch app and a React web command center synchronized in real time through Firebase Firestore — built for first responders and citizens during a crisis.",
    highlights: [
      "Autonomous 4-agent pipeline: Extraction → Detection → Planning → Execution",
      "Live crisis geo-mapping and severity heatmaps (Google Maps SDK)",
      "Real-time Firestore sync across mobile app and web control center",
      "AI-generated response plans with evacuation routes and dispatch",
      "Cross-platform build — Android APK, iOS, and web targets",
    ],
    stack: [
      { label: "Mobile", items: ["Flutter 3.10+", "Riverpod", "Material Design 3"] },
      { label: "Backend", items: ["Python", "Flask", "APScheduler", "Firebase Admin"] },
      { label: "Web & Data", items: ["React 18 + Vite", "Cloud Firestore", "Google Maps"] },
    ],
    architecture:
      "Signal ingestion (social + weather) → autonomous 4-agent Python pipeline → Firebase Firestore → Flutter mobile app + React web dashboard, synced in real time.",
  },
  {
    slug: "netwatch",
    name: "NetWatch",
    year: "2026",
    tagline: "Next-generation local network intelligence.",
    blurb:
      "A network intelligence tool that x-rays your Wi-Fi with parallel ping sweeps, OS fingerprinting and multicast probes.",
    domain: "Networking · Mobile",
    preview:
      "https://github.com/user-attachments/assets/de516b42-98ae-4e7a-9d18-6f3a1995a402",
    tech: ["Flutter", "Kotlin", "mDNS/UPnP", "Riverpod"],
    links: {
      github: "https://github.com/Daniyal-Jamil-2005/Net-Watch",
    },
    overview:
      "NetWatch maps the physical network layer with a hardened low-level Kotlin discovery engine behind a responsive Flutter UI — 64-thread parallel ping sweeps, TTL-based OS fingerprinting, and a cocktail of multicast probes (mDNS, UPnP/SSDP, NetBIOS, LLMNR) that cut through modern MAC-randomization to reveal hidden devices, bandwidth hogs and latency.",
    highlights: [
      "TTL-based OS fingerprinting from ICMP packet signatures",
      "Multicast meta-discovery across 40+ mDNS service types + UPnP + NetBIOS",
      "Live bandwidth monitoring via native TrafficStats polling",
      "Bandwidth-hog detection engine with activity categorization",
      "Router vulnerability scanning and gateway management dashboard",
    ],
    stack: [
      { label: "Frontend", items: ["Flutter", "Riverpod", "Dark mode UI"] },
      { label: "Native Engine", items: ["Kotlin", "MethodChannel", "UDP/Datagram sockets"] },
      { label: "Protocols", items: ["mDNS", "UPnP/SSDP", "NetBIOS", "LLMNR"] },
    ],
    architecture:
      "Native Kotlin discovery backend (parallel thread pools + raw multicast sockets) → Flutter state layer (network provider) → Flutter UI with real-time bandwidth diffs.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
