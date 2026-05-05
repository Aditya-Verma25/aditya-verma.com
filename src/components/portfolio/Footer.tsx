export const Footer = () => {
  return (
    <footer className="border-t hairline py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 Aditya Verma — Designed & built with care.
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary blink" />
          Open to Summer 2026 — Greater Seattle / Remote
        </div>
      </div>
    </footer>
  );
};
