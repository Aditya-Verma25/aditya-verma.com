const items = [
  "Software Engineering",
  "Backend Systems",
  "AI-Powered Products",
  "Product Management",
  "RAG & Vector Systems",
  "Full-Stack Development",
  "Java · Python · TypeScript",
  "Open to Opportunities",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="border-y hairline py-6 overflow-hidden bg-secondary/30">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl px-8 flex items-center gap-8">
            {item}
            <span className="text-primary text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
