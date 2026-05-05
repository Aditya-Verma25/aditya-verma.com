import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export const Research = () => {
  return (
    <section className="relative py-32 bg-secondary/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="05" label="Research" />
        <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em] mb-4">
          Peer-reviewed <span className="italic text-primary">publication</span>.
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-16">
          // Computer Vision · AI/ML · Published Jul 2024
        </p>

        <motion.a
          href="https://doi.org/10.58445/rars.1270"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group block border hairline rounded-lg p-8 md:p-12 hover:border-primary transition-all relative overflow-hidden bg-background"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h3 className="font-display text-2xl md:text-4xl leading-tight tracking-[-0.01em] text-balance mb-6">
                Chess Board State Detection and Applications through Artificial Intelligence, Machine Learning, and Convolutional Neural Networks
              </h3>
              <p className="text-foreground/75 leading-relaxed max-w-2xl">
                Enhances automated chess recognition systems, overcoming poor lighting, diverse camera angles, and varying chess set designs. Employs edge / corner / line detection, RANSAC, and pretrained CNN models to classify board occupancy and piece types with high accuracy.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Read Paper <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:border-l hairline md:pl-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Published in</p>
                <p className="font-display text-2xl leading-tight">Research Archive of Rising Scholars</p>
              </div>
              <div className="mt-8 pt-6 border-t hairline">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Date</p>
                <p className="font-display text-xl text-primary mt-1">Jul 6, 2024</p>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
