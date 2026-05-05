import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">/ portfolio'26</span>
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
        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-[0.18em] px-4 py-2 border hairline rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 align-middle blink" />
          Available
        </a>
      </div>
    </motion.header>
  );
};
