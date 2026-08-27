import { SiGithub } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-faint">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          all systems operational
        </div>
        <p className="font-mono text-xs text-faint">
          © 2026 Daniyal Jamil · built with react + tailwind
        </p>
        <div className="flex items-center gap-4 text-muted">
          <a
            href="https://github.com/Daniyal-Jamil-2005"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniyal-jamil-060b66261/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground"
          >
            <SiLinkedin />
          </a>
          <a
            href="mailto:daniyaljamil2005@gmail.com"
            aria-label="Email"
            className="hover:text-foreground"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
