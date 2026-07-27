import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    n: "01",
    tag: "Flagship Project",
    title: "JobzTracker",
    subtitle: "AI-Powered Job Application Hub & Tailoring Engine",
    body: "A production-grade full-stack platform featuring a Chrome extension for one-click job capture, an AST-based Word (.docx) document tailoring parser to swap placeholders without breaking layouts, and a dual local (SQLite) & cloud (PostgreSQL) architecture. Deployed with Docker, GitHub Actions, and integrated with Sentry and Stripe.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Docker", "Chrome Extension", "Prisma", "OpenAI & Gemini APIs"],
    href: "https://www.jobztracker.app",
    cta: "View Project",
    accent: "from-blue-500/20 to-indigo-600/10",
    image: "/jobztracker-screenshot.png",
  },
  {
    n: "02",
    tag: "EdTech Platform",
    title: "FutureReady Prep",
    subtitle: "College Admissions & Matching Platform",
    body: "Founded and built a college admissions platform using React, TypeScript, Vite, and Vercel. Features a custom weighted college-matching algorithm evaluating 80+ universities against student academic profiles, growing monthly active users by 445%.",
    stack: ["React", "TypeScript", "Vite", "Vercel", "Algorithms", "SEO"],
    href: "https://futurereadyprep.org",
    cta: "View Project",
    accent: "from-emerald-400/15 to-teal-600/10",
    image: "/futureready-screenshot.png",
  },
  {
    n: "03",
    tag: "AI & ML",
    title: "LabLens AI",
    subtitle: "Personalized Health Intelligence Platform",
    body: "Built a full-stack health intelligence platform integrating Claude, Clerk, and Supabase to analyze medical lab results and generate personalized health insights, action plans, and longitudinal trend reports.",
    stack: ["Next.js", "Claude API", "Supabase", "Clerk", "TypeScript"],
    href: "https://lab-lens-theta.vercel.app/",
    cta: "View Project",
    accent: "from-amber-400/20 to-orange-600/10",
    image: "/lablens-screenshot.png",
  },
  {
    n: "04",
    tag: "Open Source",
    title: "RAG Chatbot",
    subtitle: "Document Q&A with Local and Cloud LLMs",
    body: "Implemented a Python RAG chatbot using LangChain and ChromaDB to ingest PDF/text documents, retrieve relevant context, and generate grounded answers. Containerized with Docker, deployed on Railway with switches between local (Ollama) and cloud (Claude) LLMs.",
    stack: ["Python", "LangChain", "ChromaDB", "Ollama", "Claude API", "Docker"],
    href: "https://github.com/aditya-verma25",
    cta: "View Project",
    accent: "from-violet-400/15 to-indigo-600/10",
  },
  {
    n: "05",
    tag: "Published",
    title: "Chess AI Vision",
    subtitle: "Computer Vision Pipeline",
    body: "Built a computer vision pipeline for chessboard localization and piece recognition. Handles lighting variation, glare, non-standard sets, and camera distortion. Combines CNNs, edge/line/corner detection, and RANSAC. Published in the Research Archive of Rising Scholars.",
    stack: ["Python", "OpenCV", "CNN", "RANSAC", "Published"],
    href: "https://doi.org/10.58445/rars.1270",
    cta: "Read Paper",
    accent: "from-rose-400/15 to-pink-600/10",
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

        <div className="space-y-12">
          {projects.map((p, i) => {
            const hasImage = p.image;
            const isFlagship = p.tag === "Flagship Project";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative block border hairline rounded-2xl bg-background p-8 md:p-12 hover:bg-secondary/10 transition-colors overflow-hidden ${
                  isFlagship ? "border-primary/30 shadow-lg shadow-primary/5" : ""
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative grid grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Details */}
                  <div className={`col-span-12 ${hasImage ? "lg:col-span-7" : "lg:col-span-12"}`}>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-3">
                      <span className="text-primary text-3xl font-display normal-case tracking-tight">{p.n}</span>
                      <span>·</span>
                      <span className="text-primary font-medium">{p.tag}</span>
                    </div>

                    <h3 className="font-display text-4xl md:text-5xl tracking-[-0.02em] leading-[0.95] mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-display italic text-lg text-muted-foreground mb-4">{p.subtitle}</p>
                    <p className="text-foreground/75 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">{p.body}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.stack.map((s) => (
                        <span key={s} className="font-sans text-xs bg-secondary/15 text-foreground/80 px-3.5 py-1 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Platform link */}
                    <div className="flex flex-wrap gap-4 items-center">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-sans text-xs font-medium px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
                      >
                        {p.cta}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Screenshot */}
                  {hasImage && (
                    <div className="col-span-12 lg:col-span-5 relative mt-6 lg:mt-0">
                      <div className="relative rounded-xl overflow-hidden border hairline shadow-2xl group-hover:border-primary/50 transition-colors duration-500">
                        <img
                          src={p.image}
                          alt={`${p.title} Screenshot`}
                          className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
