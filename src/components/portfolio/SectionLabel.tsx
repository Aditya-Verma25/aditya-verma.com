import { motion } from "framer-motion";

export const SectionLabel = ({ index, label }: { index: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-3 mb-6"
  >
    <span className="text-primary">{index}</span>
    <span className="h-px w-8 bg-border" />
    {label}
  </motion.div>
);
