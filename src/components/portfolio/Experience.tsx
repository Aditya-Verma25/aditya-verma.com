import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const roles = [
  {
    org: "TinyMedic",
    when: "Jun – Aug 2025",
    type: "Internship · Remote",
    title: "Software Development Intern",
    points: [
      "Built and improved patient portal interfaces for a healthcare platform serving 100+ rural hospitals.",
      "Developed front-end components for medical records, lab results, and portal services.",
      "Integrated Spring Boot REST APIs to retrieve and display patient data on the client side.",
      "Identified UI bottlenecks and refined page structure to improve workflow efficiency.",
    ],
    tags: ["Java", "Spring Boot", "JavaScript", "REST APIs"],
  },
  {
    org: "Product Space UMD",
    when: "Oct 2025 – Present",
    type: "Fellowship · On-site",
    title: "Director of Professional Development & PM Fellow",
    points: [
      "Selected for competitive PM fellowship; collaborated with Spotter AI on product positioning.",
      "Conducted user research, developed personas, translated insights into PRDs and roadmaps.",
      "Leads career development programming for 50+ members — workshops, mock interviews, guest speakers.",
      "Built 'Hire or Fire' resume reviews simulating real recruiting decisions.",
    ],
    tags: ["Product Strategy", "User Research", "Figma", "Roadmapping"],
  },
  {
    org: "Issaquah Schools Foundation",
    when: "Aug 2023 – Jun 2025",
    type: "Leadership · On-site",
    title: "Student Trustee",
    points: [
      "Collaborated with board of directors and superintendent to allocate $1M+ in funding impacting 19,000+ students.",
      "Advised on district initiatives to improve educational programs and outcomes.",
      "Served as liaison between students and administration, influencing policy decisions.",
    ],
    tags: ["Leadership", "Public Speaking", "Policy", "Stakeholders"],
  },
  {
    org: "Technology Student Association",
    when: "Aug 2023 – Jun 2025",
    type: "Chapter President",
    title: "Chapter President & Treasurer",
    points: [
      "Grew chapter membership to 250% of prior year with 45+ STEM-aligned members competing statewide.",
      "Managed $2,000+ in chapter assets; organized fundraising for chapter activities and STEM outreach.",
      "Led team to Washington TSA State Conference; partnered with local sponsors.",
    ],
    tags: ["Team Mgmt", "Fundraising", "Budgeting", "STEM Outreach"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="03" label="Professional Experience" />
        <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] mb-20">
          Where I've <span className="italic text-primary">worked</span>.
        </h2>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-20">
            {roles.map((r, i) => (
              <motion.div
                key={r.org}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* dot */}
                <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2">{r.when}</div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">{r.org}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{r.type}</p>
                </div>

                <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <p className="font-display italic text-xl mb-4 text-foreground">{r.title}</p>
                  <ul className="space-y-2.5 text-foreground/80 text-sm leading-relaxed">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-primary mt-1.5">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {r.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border hairline rounded-full text-muted-foreground">
                        {t}
                      </span>
                    ))}
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
