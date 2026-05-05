import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const skills = [
  "Java", "Python", "TypeScript", "React / Next.js", "Spring Boot",
  "FastAPI", "PostgreSQL", "Docker", "RAG", "Vector DBs",
  "OpenCV", "LangChain", "Supabase", "Git / CI/CD", "Figma",
];

const cards = [
  { icon: "◎", title: "University of Maryland", lines: ["B.S. Computer Science · Minor in Business Analytics", "College Park Scholars — Data Justice", "Expected Dec 2028"], badge: "3.73 GPA" },
  { icon: "◐", title: "Greater Seattle Area", lines: ["Open to on-site, hybrid & remote.", "Available for Summer 2026 internship."], badge: "Available" },
  { icon: "◈", title: "Multilingual", lines: ["Native English & Hindi · Working Spanish", "TED/TEDx subtitle translator"], badge: "500K+ views" },
  { icon: "◇", title: "Published Researcher", lines: ["Computer vision paper in Research Archive of Rising Scholars", "CNN-based chess board recognition"], badge: "Jul 2024" },
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
            Engineer who <span className="italic text-primary">thinks</span> in products.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-5 md:col-start-8 space-y-5 text-foreground/80 text-base leading-relaxed self-end"
          >
            <p>
              CS student at the University of Maryland (GPA 3.73, Dean's List) with a minor in Business Analytics. I build at the intersection of <em className="text-primary not-italic font-medium">backend engineering</em> and <em className="font-display italic">product thinking</em>.
            </p>
            <p>
              Experience spans healthcare SaaS at <strong className="font-medium">TinyMedic</strong>, AI-native product development, and hands-on leadership influencing <strong className="font-medium">$1M+</strong> in public funding.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground pt-4 border-t hairline">
              <span className="text-primary">//</span> Seeking Summer 2026 internships — SWE, backend, AI/ML, or technical product
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">// Technical Arsenal</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 border hairline rounded-full font-mono text-xs hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {s}
              </motion.span>
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
