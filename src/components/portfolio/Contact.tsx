import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const links = [
  { icon: Mail, label: "adityavermaus@outlook.com", href: "mailto:adityavermaus@outlook.com" },
  { icon: Linkedin, label: "linkedin.com/in/aditya-verma25", href: "https://linkedin.com/in/aditya-verma25" },
  { icon: Github, label: "github.com/aditya-verma25", href: "https://github.com/aditya-verma25" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* big bg word */}
      <div aria-hidden className="absolute -top-10 left-1/2 -translate-x-1/2 font-display italic text-[28vw] leading-none text-primary/[0.05] select-none pointer-events-none whitespace-nowrap">
        let's build
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 relative">
        <SectionLabel index="07" label="Let's Talk" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-6xl md:text-8xl leading-[0.9] tracking-[-0.04em] text-balance mb-12"
        >
          Ready to <span className="italic text-primary">build</span> something great?
        </motion.h2>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-16 leading-relaxed">
          Actively seeking <strong className="text-primary font-medium">Summer 2026 internships</strong> in software engineering, backend development, AI/ML-adjacent engineering, or technical product roles. If you're looking for someone who codes with product thinking and leads with initiative — let's connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border hairline">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-background p-8 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon className="w-6 h-6 mb-6 text-primary group-hover:text-primary-foreground transition-colors" />
              <p className="font-display text-lg break-all leading-tight mb-4">{label}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-1">
                Connect <ArrowUpRight className="w-3 h-3 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
