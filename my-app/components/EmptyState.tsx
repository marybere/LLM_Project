export function EmptyState() {
  return (
    <div className="glass-effect border border-white/10 rounded-2xl p-16 text-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-6xl animate-bounce">📭</div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            No analysis reports
          </h3>
          <p className="text-muted-foreground max-w-sm">
            Import a file and start the analysis to see results appear here. It's simple and fast!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 text-sm text-muted-foreground w-full max-w-sm">
          <div className="space-y-2">
            <div className="text-3xl">📄</div>
            <p>Documents</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">⚡</div>
            <p>Fast</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl">🤖</div>
            <p>AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
