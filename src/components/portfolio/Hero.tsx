import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const stats = [
  { v: "Languages", l: "Python · Java · TypeScript · JavaScript · SQL · C" },
  { v: "Backend", l: "Spring Boot · FastAPI · Next.js · Node.js · REST APIs" },
  { v: "Databases", l: "PostgreSQL · MongoDB · SQLite · Prisma · S3" },
  { v: "AI & DevOps", l: "LLMs · RAG · LangChain · OpenCV · AWS · Docker" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-semibold tracking-wide text-foreground bg-primary/10 border border-primary/25 px-4 py-2 rounded-full mb-12 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Open to Summer 2027 Software Engineering Internships</span>
        </motion.div>

        {/* Title */}
        <div className="grid grid-cols-12 gap-4 items-end">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="col-span-12 font-display font-light leading-[0.85] tracking-[-0.04em] text-[clamp(4rem,15vw,12rem)]"
          >
            <motion.span
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="block"
            >
              Aditya
            </motion.span>
            <motion.span
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.25 }}
              className="block italic font-normal text-primary pl-[4vw]"
            >
              Verma.
            </motion.span>
          </motion.h1>
        </div>

        {/* Tagline + CTA */}
        <div className="grid grid-cols-12 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="col-span-12 md:col-span-7 md:col-start-1"
          >
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-muted-foreground mb-4 font-medium">
              <span className="text-primary">//</span> CS @ MARYLAND · SOFTWARE ENGINEER · PRODUCT BUILDER
            </p>
            <div className="space-y-3 text-lg md:text-xl text-pretty leading-relaxed text-foreground/85">
              <p>
                I build <em className="font-display text-primary not-italic font-normal">full-stack software</em> and <em className="font-display italic font-normal">AI-powered applications</em>, from backend APIs and databases to retrieval systems and user-facing products.
              </p>
              <p className="text-foreground/75 font-light">
                I enjoy turning complex problems into practical, reliable software.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "Java", "TypeScript", "Spring Boot", "FastAPI", "Next.js", "RAG & LLMs", "PostgreSQL", "Docker", "AWS"].map((skill) => (
                <span key={skill} className="font-sans text-sm font-semibold px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/25 shadow-sm hover:bg-primary/20 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-2.5 self-end"
          >
            <a
              href="#work"
              className="group flex items-center justify-between px-6 py-3.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all font-sans font-semibold text-base shadow-md cursor-pointer border-2 border-primary"
            >
              <span>View selected work</span>
              <ArrowDownRight className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform" />
            </a>

            {/* Direct High-Visibility Contact & Profile Links */}
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href="https://github.com/aditya-verma25"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-6 py-3.5 rounded-xl bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-primary/50 border border-border/70 font-sans font-medium text-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>GitHub</span>
                  <span className="text-xs font-mono font-normal text-muted-foreground">/aditya-verma25</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://linkedin.com/in/adityaverma25"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-6 py-3.5 rounded-xl bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-primary/50 border border-border/70 font-sans font-medium text-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>LinkedIn</span>
                  <span className="text-xs font-mono font-normal text-muted-foreground">/in/adityaverma25</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:adityavermaus@outlook.com"
                className="group flex items-center justify-between px-6 py-3.5 rounded-xl bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-primary/50 border border-border/70 font-sans font-medium text-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>Email</span>
                  <span className="text-xs font-mono font-normal text-muted-foreground">adityavermaus@outlook.com</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-24 border hairline"
        >
          {stats.map((s) => (
            <div key={s.v} className="bg-background p-6 md:p-8 group hover:bg-secondary/40 transition-colors">
              <div className="font-display text-2xl md:text-3xl font-medium tracking-tight text-primary">{s.v}</div>
              <div className="font-sans text-sm md:text-base font-medium text-foreground/80 mt-3 leading-relaxed">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Big background mark */}
      <div aria-hidden className="absolute -bottom-32 -right-20 font-display text-[30vw] leading-none text-primary/[0.04] select-none pointer-events-none">
        AV
      </div>
    </section>
  );
};
