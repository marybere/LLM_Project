import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { FileUpload, FileList } from "@/components/FileUpload";
import { AnalysisReport, type AnalysisResult } from "@/components/AnalysisReport";
import { EmptyState } from "@/components/EmptyState";
import { Features } from "@/components/Features";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<AnalysisResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFilesSelected = useCallback(async (newFiles: File[]) => {
    if (newFiles.length === 0) return;
    
    setFiles(prev => [...prev, ...newFiles]);
    setIsProcessing(true);
    setUploadProgress(0);

    toast({
      title: "Analysis in progress",
      description: `${newFiles.length} file(s) being processed...`,
    });

    try {
      let processed = 0;
      for (const file of newFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/analyze", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setResults(prev => [...prev, {
          content: data.result || "No result",
          timestamp: new Date().toISOString()
        }]);

        processed++;
        setUploadProgress((processed / newFiles.length) * 100);
      }

      toast({
        title: "Analysis complete",
        description: `${newFiles.length} file(s) analyzed successfully!`,
      });
    } catch (error) {
      console.error("Error during analysis:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred during analysis.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setUploadProgress(0);
    }
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setResults(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <span className="glass-effect px-4 py-2 rounded-full text-sm text-blue-300 border border-blue-500/50">
                ✨ Advanced AI Analysis
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              <span className="text-foreground">Analyze your data</span>
              <br />
              <span className="gradient-text">with Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Upload your files and let our AI generate detailed and actionable reports in seconds. Secure and fast.
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-12">
            <FileUpload onFilesSelected={handleFilesSelected} isProcessing={isProcessing} />
            
            {/* Progress Bar */}
            {isProcessing && uploadProgress > 0 && (
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">Progress</span>
                  <span className="text-blue-400">{Math.round(uploadProgress)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Files Section */}
          {files.length > 0 && (
            <div className="mb-12 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Imported files ({files.length})
                </h2>
                <button
                  onClick={() => {
                    setFiles([]);
                    setResults([]);
                  }}
                  className="text-sm text-muted-foreground hover:text-destructive transition"
                >
                  Clear all
                </button>
              </div>
              <FileList files={files} onRemove={handleRemoveFile} />
            </div>
          )}

          {/* Results Section */}
          <div className="mt-16">
            {results.length > 0 ? (
              <>
                <div className="mb-8 space-y-2">
                  <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <span className="text-4xl">🎯</span>
                    Analysis Results
                  </h2>
                  <p className="text-muted-foreground">
                    {results.length} report(s) generated successfully
                  </p>
                </div>
                <AnalysisReport results={results} />
              </>
            ) : !isProcessing && <EmptyState />}
          </div>
        </div>
      </main>

      {/* Features Section */}
      {results.length === 0 && !isProcessing && <Features />}

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© 2026 DataAnalyzer. All rights reserved. | Analyze with confidence with AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
