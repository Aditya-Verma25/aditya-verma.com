import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const skillCategories = [
  { category: "Programming Languages", skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C", "HTML", "CSS"] },
  { category: "Frameworks & Backend", skills: ["React", "Next.js", "Node.js", "FastAPI", "Spring Boot", "Flask", "Prisma", "REST APIs", "JUnit"] },
  { category: "Databases & Data", skills: ["PostgreSQL", "MongoDB", "SQLite", "NumPy", "Pandas"] },
  { category: "AI & Machine Learning", skills: ["LLMs", "OpenAI/Claude/Gemini APIs", "LangChain", "RAG", "OpenCV", "CNNs"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, IAM, RDS)", "Git", "Docker", "GitHub Actions", "CI/CD", "Vercel"] },
];

const cards = [
  { icon: "◎", title: "University of Maryland", lines: ["B.S. Computer Science (Machine Learning Track)", "President's Scholar & Dean's List", "Expected Graduation: May 2028"], badge: "3.66 GPA" },
  { icon: "⚡", title: "Full-Stack Architecture", lines: ["JobzTracker & LabLens AI production platforms", "AST-based Word (.docx) parser & Chrome extension", "Docker containerization, Sentry & Stripe"], badge: "Production SaaS" },
  { icon: "🧠", title: "AI & Retrieval Systems", lines: ["Context-aware RAG pipelines with LangChain & ChromaDB", "OpenAI, Claude & Gemini API provider abstractions", "Local Ollama & cloud LLM vector retrieval"], badge: "RAG / LLMs" },
  { icon: "🛡️", title: "Backend Infrastructure", lines: ["Spring Boot & FastAPI microservices at TinyMedic", "Controller / Service / DTO architecture & REST APIs", "Serving patient records across 100+ rural hospitals"], badge: "Backend SWE" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="01" label="About Me" />
        <div className="grid grid-cols-12 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] text-balance"
          >
            Building robust, intelligent <span className="italic text-primary">backend</span> systems.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-5 md:col-start-8 space-y-5 text-foreground/80 text-base leading-relaxed self-end"
          >
            <p>
              CS student at the University of Maryland on the Machine Learning track. I specialize in backend systems, REST APIs, retrieval pipelines, and AI-native applications.
            </p>
            <p>
              My experience ranges from developing patient portal APIs and Spring Boot services at <strong className="font-medium">TinyMedic</strong> to building flagship SaaS products and leading educational tech platforms.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pt-4 border-t hairline">
              <span className="text-primary">//</span> Seeking Summer 2027 internships — Software Engineering (SWE), Backend, or AI/ML
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">// Technical Arsenal & Core Stack</p>
          <div className="space-y-8">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pb-8 border-b hairline last:border-0 last:pb-0"
              >
                <h4 className="col-span-12 md:col-span-4 font-display text-lg md:text-xl font-semibold text-primary tracking-tight pt-1">
                  {cat.category}
                </h4>
                <div className="col-span-12 md:col-span-8 flex flex-wrap gap-2.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-4 py-2 border border-border/80 rounded-xl font-sans text-sm font-semibold text-foreground/90 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all cursor-default bg-secondary/20 shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-20 border hairline">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 group hover:bg-secondary/40 transition-colors relative"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-3xl text-primary">{c.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 border hairline rounded-full">{c.badge}</span>
              </div>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {c.lines.map((l) => <p key={l}>{l}</p>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
