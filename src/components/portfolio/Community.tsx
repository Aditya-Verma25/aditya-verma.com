import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    icon: "🌐",
    role: "Multilingual Translator",
    org: "TED Conferences",
    body: "Translated subtitles for TED and TEDx talks into English, Spanish, and Hindi — improving global accessibility of educational content.",
    meta: "Jan 2023 – Present · 500K+ cumulative views",
  },
  {
    icon: "🎓",
    role: "Student Mentor",
    org: "VOICE Mentor Program · Issaquah",
    body: "Mentored students needing academic, social, and emotional support. Built consistent 1:1 relationships and tracked progress with program staff.",
    meta: "Sep 2023 – Jun 2025 · 1 yr 10 mos",
  },
  {
    icon: "🔬",
    role: "Teaching Assistant",
    org: "Best in Class Education",
    body: "Supported student success through grading, substituting, and coordinating with teachers. Brand ambassador encouraging program enrollment.",
    meta: "Jul 2024 – Apr 2025 · 10 mos",
  },
];

export const Community = () => {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="06" label="Community & Leadership" />
        <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] mb-6">
          Beyond the <span className="italic text-primary">code</span>.
        </h2>
        <p className="text-muted-foreground max-w-xl mb-16">
          Leadership, volunteering, and mentorship roles that reflect how I engage with people — not just systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border hairline">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 group hover:bg-secondary/40 transition-colors"
            >
              <div className="text-4xl mb-6">{it.icon}</div>
              <h3 className="font-display text-2xl tracking-tight">{it.role}</h3>
              <p className="font-display italic text-muted-foreground mb-4">{it.org}</p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-6">{it.body}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary border-t hairline pt-4">{it.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
