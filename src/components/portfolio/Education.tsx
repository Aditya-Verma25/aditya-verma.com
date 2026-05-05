import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const schools = [
  {
    name: "University of Maryland",
    degree: "B.S. Computer Science · Minor in Business Analytics",
    when: "Sep 2025 – Dec 2028 (Expected)",
    gpa: "3.73 / 4.00",
    bullets: [
      "★ Dean's List, Fall 2025",
      "★ OMSE Academic Excellence Award Nominee, May 2026",
      "◈ College Park Scholars — Data Justice",
      "◈ ACM · GDSC · Product Space · SASA",
      "◈ Courses: Designing Fair Systems, Calculus II",
    ],
  },
  {
    name: "Skyline High School",
    degree: "IB Diploma Recipient",
    when: "Aug 2021 – Jun 2025",
    gpa: "UW 3.93 / 4.00",
    bullets: [
      "★ Summa Cum Laude (3.93 / 4.00 UW GPA)",
      "◈ International Baccalaureate Diploma",
      "◈ Technology Student Association — Chapter President",
      "◈ DECA · National Honors Society · Class Council",
    ],
  },
];

const certs = [
  { i: "🐍", t: "CS50's Introduction to Programming with Python", o: "Harvard University", d: "Jan 2023" },
  { i: "☕", t: "Java Information Technology Specialist", o: "Certiport — Pearson VUE", d: "Jun 2025" },
];

export const Education = () => {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="04" label="Education" />
        <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] mb-20">
          Where I've <span className="italic text-primary">learned</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border hairline mb-12">
          {schools.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">{s.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 border hairline rounded-full text-primary whitespace-nowrap">{s.gpa}</span>
              </div>
              <p className="font-display italic text-lg text-muted-foreground mb-1">{s.degree}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">{s.when}</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">// Certifications</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div key={c.t} className="border hairline rounded-lg p-6 flex items-start gap-5 hover:border-primary transition-colors">
              <span className="text-3xl">{c.i}</span>
              <div>
                <h4 className="font-display text-lg leading-tight">{c.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{c.o}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mt-2">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
