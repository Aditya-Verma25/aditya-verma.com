import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    icon: "🌐",
    role: "Multilingual Translator",
    org: "TED Conferences",
    body: "Translated subtitles for TED & TEDx educational talks into English, Spanish, and Hindi — connecting global audiences to ideas in science, technology, and design with over half a million total views.",
    meta: "Jan 2023 – Present · 500,000+ Global Viewers Impacted",
    badge: "★ 500K+ Views Impact",
  },
  {
    icon: "🍲",
    role: "Meal Packaging & Hunger Relief",
    org: "Terps Against Hunger · UMD",
    body: "Package nutritious, non-perishable meals during campus-wide meal packing events, supporting food-insecure families and local food banks across Prince George's County and Maryland.",
    meta: "University of Maryland · Community Service",
    badge: "UMD Hunger Relief",
  },
  {
    icon: "🎓",
    role: "Student Mentor",
    org: "VOICE Mentor Program · Issaquah",
    body: "Mentored K-12 students needing academic, social, and emotional support. Built consistent 1:1 relationships and tracked progress with program staff.",
    meta: "Sep 2023 – Jun 2025 · Academic Guidance",
    badge: "Youth Mentorship",
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
              className="bg-background p-8 group hover:bg-secondary/40 transition-colors relative"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{it.icon}</span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 border hairline rounded-full bg-primary/10 text-primary">
                  {it.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-tight">{it.role}</h3>
              <p className="font-display italic text-muted-foreground mb-4">{it.org}</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">{it.body}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary border-t hairline pt-4">{it.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
