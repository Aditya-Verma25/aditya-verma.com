import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const stats = [
  { v: "3.73", l: "GPA · Dean's List" },
  { v: "250%", l: "TSA Chapter Growth" },
  { v: "$1M+", l: "Education Funding" },
  { v: "100+", l: "Hospitals Served" },
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
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-3 mb-12"
        >
          <span className="h-px w-10 bg-primary" />
          Open to Summer 2026 Internships
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
              className="block italic font-normal text-primary pl-[8vw]"
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
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="text-primary">//</span> CS @ Maryland · Engineer & Product Builder
            </p>
            <p className="text-lg md:text-xl text-pretty leading-relaxed text-foreground/85">
              I build at the intersection of <em className="font-display text-primary not-italic">engineering</em> and <em className="font-display italic">usability</em> — from AI-powered apps to retrieval systems and full-stack tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-3 self-end"
          >
            <a
              href="#work"
              className="group flex items-center justify-between border hairline rounded-full px-6 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <span className="font-display text-lg">View selected work</span>
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-between rounded-full px-6 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <span className="font-display text-lg">Get in touch</span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
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
            <div key={s.l} className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors">
              <div className="font-display text-4xl md:text-5xl tracking-tight gradient-text">{s.v}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
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
