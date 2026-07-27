import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const roles = [
  {
    org: "FutureReady College & Career Prep",
    when: "May 2026 – Present",
    type: "Founder & Lead Developer",
    title: "Founder & Software Developer",
    points: [
      "Founded and built a college admissions platform using React, TypeScript, Vite, and Vercel, developing reusable UI components and client-side routing.",
      "Designed and implemented a weighted college-matching algorithm evaluating 80+ universities against student profiles (GPA, SAT, budget, location).",
      "Grew monthly active users by 445% through search engine optimization (SEO) and organic acquisition strategies.",
    ],
    tags: ["React", "TypeScript", "Vite", "Vercel", "Algorithms"],
  },
  {
    org: "TinyMedic",
    when: "Summer 2025",
    type: "Internship · Remote",
    title: "Software Engineering Intern",
    points: [
      "Collaborated with senior engineers to develop patient portal interfaces and front-end components using HTML, CSS, and JavaScript.",
      "Enabled patients across 100+ rural hospitals to securely access medical records, lab results, and medication history.",
      "Contributed Spring Boot REST API endpoints, following controller/service architecture and DTO conventions to securely expose patient data.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "JavaScript", "HTML/CSS"],
  },
  {
    org: "Product Space UMD",
    when: "Oct 2025 – Present",
    type: "Leadership · On-site",
    title: "Director of Professional Development",
    points: [
      "Led technical workshops, speaker sessions, and networking events for UMD's chapter of a national product organization.",
      "Conducted user research and recommended features for SpotterAI, a live iOS/Android AI fitness app, to inform the product roadmap.",
      "Built educational programming and mock recruiting review processes for 50+ general body members.",
    ],
    tags: ["Product Strategy", "User Research", "Technical Workshops", "Roadmapping"],
  },
  {
    org: "Issaquah Schools Foundation",
    when: "Aug 2023 – Jun 2025",
    type: "Board Position · On-site",
    title: "Student Trustee, Executive Board",
    points: [
      "Represented 18,000+ students on the executive board of a district nonprofit, translating student insights into funding recommendations.",
      "Advised on the allocation of $1M+ in educational grants and program funding across the school district.",
      "Delivered monthly impact reports and student feedback directly to the board of trustees and superintendent.",
    ],
    tags: ["Leadership", "Strategic Planning", "Funding Allocation", "Stakeholder Mgmt"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32 bg-secondary/15">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="03" label="Experience" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Where I've <span className="italic text-primary">worked</span>.
          </h2>
          <p className="max-w-md text-muted-foreground text-base">
            Software engineering internships, founder experience, and technical leadership.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/80" aria-hidden />

          <div className="space-y-16">
            {roles.map((r, i) => (
              <motion.div
                key={r.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-md shadow-primary/30" />

                {/* Left/Right Header Info */}
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">{r.when}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-normal tracking-tight">{r.org}</h3>
                  <p className="font-display italic text-lg text-muted-foreground mt-1">{r.title}</p>
                  <span className="inline-block font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1 border hairline rounded-full bg-primary/10 text-primary font-medium mt-3">
                    {r.type}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="border hairline rounded-2xl bg-background p-6 md:p-8 hover:border-primary/40 transition-colors shadow-sm">
                    <ul className="space-y-3 text-foreground/85 text-sm md:text-base leading-relaxed">
                      {r.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="text-primary mt-1 select-none">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t hairline">
                      {r.tags.map((t) => (
                        <span key={t} className="font-sans text-xs bg-secondary/30 text-foreground/90 px-3 py-1 rounded-xl font-medium border border-border/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
