import { Header } from "@/components/Header";
import Link from "next/link";

export default function Docs() {
  const sections = [
    {
      title: "Quick Start",
      content: "1. Click 'Select Files'\n2. Choose your document\n3. Wait for analysis\n4. View the report"
    },
    {
      title: "Accepted Files",
      content: "PDF, TXT, DOC, DOCX, CSV, JSON\nMax 10MB per file"
    },
    {
      title: "Privacy Information",
      content: "Your files are never stored. They are processed and deleted immediately."
    },
    {
      title: "Export Results",
      content: "Click the 📋 button to copy\nClick 💾 to download as TXT"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Documentation
            </h1>
            <p className="text-muted-foreground">
              Complete guide to using DataAnalyzer
            </p>
          </div>

          <div className="grid gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="glass-effect border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 glass-effect border border-white/10 rounded-xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Need help?
            </h2>
            <p className="text-muted-foreground mb-4">
              Check our support or go back home to start your analysis.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
