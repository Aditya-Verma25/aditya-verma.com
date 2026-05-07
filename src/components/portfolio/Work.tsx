import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    n: "01",
    tag: "Featured",
    title: "LabLens",
    subtitle: "AI Health Intelligence",
    body: "AI-powered app that analyzes medical lab results and generates plain-English health insights, personalized action plans, and follow-up recommendations. Multi-service backend, secure auth, and a longitudinal tracker.",
    stack: ["Next.js", "Supabase", "Clerk Auth", "Anthropic API", "TypeScript"],
    href: "https://lab-lens-theta.vercel.app/",
    cta: "View Project",
    accent: "from-amber-400/20 to-orange-600/10",
  },
  {
    n: "02",
    tag: "Production",
    title: "RAG Document Chatbot",
    subtitle: "Retrieval-Augmented Generation",
    body: "Chatbot that answers questions grounded in your own PDFs. Swappable LLM provider layer (Ollama / Anthropic). Containerized with Docker, hosted on Railway, GitHub Actions CI/CD, instrumented with LangSmith.",
    stack: ["RAG", "Docker", "LangChain", "FastAPI", "Kubernetes"],
    href: "https://github.com/aditya-verma25",
    cta: "View Project",
    accent: "from-emerald-400/15 to-teal-600/10",
  },
  {
    n: "03",
    tag: "Published",
    title: "Chess AI Vision",
    subtitle: "Computer Vision Pipeline",
    body: "Pipeline for chessboard localization and piece recognition. Handles lighting variation, glare, non-standard sets, and camera distortion. Combines CNNs, edge/line/corner detection, and RANSAC. Peer-reviewed.",
    stack: ["Python", "OpenCV", "CNN", "RANSAC", "Published"],
    href: "https://doi.org/10.58445/rars.1270",
    cta: "Read Paper",
    accent: "from-rose-400/15 to-pink-600/10",
  },
  {
    n: "04",
    tag: "Product",
    title: "Student Finance Tracker",
    subtitle: "Capstone · Product Space PM Fellowship",
    body: "Capstone product designed and prototyped during the Product Space PM Fellowship. Built user personas from research insights, created PRDs and roadmaps, and prototyped a full Figma flow.",
    stack: ["Figma", "Product Strategy", "User Research", "PRD"],
    href: "#",
    cta: "Case Study",
    accent: "from-violet-400/15 to-indigo-600/10",
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="02" label="Selected Work" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <h2 className="font-display font-light text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Projects that <span className="italic text-primary">ship</span>.
          </h2>
          <p className="max-w-md text-muted-foreground text-base">
            Production-deployed applications and research projects. Built to solve real problems — not fill a portfolio.
          </p>
        </div>

        <div className="space-y-px bg-border border hairline">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block bg-background p-8 md:p-12 hover:bg-secondary/30 transition-colors overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <div className="text-primary text-3xl font-display normal-case tracking-tight">{p.n}</div>
                  <div className="mt-2">{p.tag}</div>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display text-4xl md:text-6xl tracking-[-0.02em] leading-[0.95] mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-display italic text-xl text-muted-foreground mb-4">{p.subtitle}</p>
                  <p className="text-foreground/75 text-base max-w-2xl mb-5 leading-relaxed">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 border hairline rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                    {p.cta}
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
