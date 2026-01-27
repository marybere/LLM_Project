import { Header } from "@/components/Header";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Settings</h1>
          
          <div className="glass-effect border border-white/10 rounded-2xl p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">OpenAI API Key</h2>
              <p className="text-muted-foreground text-sm mb-3">
                To enable analysis, you must configure your OpenAI API key.
              </p>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full px-4 py-2 bg-secondary border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Your key is not stored. It is used locally only.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
              <p className="text-muted-foreground text-sm">
                DataAnalyzer v1.0.0 - Analyze your documents with Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
