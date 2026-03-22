export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© 2026 ElectPulse. AI-powered election analytics.</p>
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-0.5 bg-saffron rounded-full" />
          <span className="inline-block w-3 h-0.5 bg-muted-foreground rounded-full" />
          <span className="inline-block w-3 h-0.5 bg-india-green rounded-full" />
        </div>
      </div>
    </footer>
  );
}
