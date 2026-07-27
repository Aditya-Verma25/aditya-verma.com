import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b hairline">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-xl tracking-tight">Aditya<span className="text-primary">.</span></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">/ portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              <span className="text-primary mr-1">0{i + 1}</span>{l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://github.com/aditya-verma25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 rounded-full font-sans text-xs font-medium border border-border/80 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/adityaverma25"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 rounded-full font-sans text-xs font-medium border border-border/80 transition-all"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:adityavermaus@outlook.com"
            aria-label="Send Email"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-background/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 rounded-full font-sans text-xs font-medium border border-border/80 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="/Aditya_Verma_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs font-medium px-4 py-1.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
};
