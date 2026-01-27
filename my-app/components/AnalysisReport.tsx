export interface AnalysisResult {
  content: string;
  timestamp?: string;
}

interface AnalysisReportProps {
  results: AnalysisResult[];
}

export function AnalysisReport({ results }: AnalysisReportProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadAsText = (content: string, index: number) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `analysis_${index + 1}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8">
      {results.map((result, index) => (
        <div
          key={index}
          className="group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-102 hover:shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.15) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
          </div>

          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-b border-blue-500/30 px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-3xl animate-bounce" style={{animationDelay: `${index * 0.1}s`}}>📊</span>
                Analysis Report #{index + 1}
              </h3>
              {result.timestamp && (
                <p className="text-sm text-slate-400 mt-2 flex items-center gap-2">
                  <span>📅</span>
                  {new Date(result.timestamp).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </div>
            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              <button
                onClick={() => copyToClipboard(result.content)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95"
                title="Copy"
              >
                📋 Copy
              </button>
              <button
                onClick={() => downloadAsText(result.content, index)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"
                title="Download"
              >
                💾 Download
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-8 max-h-[500px] overflow-y-auto">
            <div className="text-slate-100 whitespace-pre-wrap text-sm leading-relaxed font-light prose prose-invert max-w-none">
              {result.content.split('\n').map((line, i) => {
                if (line.startsWith('##')) {
                  return <h2 key={i} className="text-xl font-bold mt-4 mb-2 text-cyan-300">{line.replace(/^##\s*/, '')}</h2>;
                }
                if (line.startsWith('#')) {
                  return <h3 key={i} className="text-lg font-bold mt-3 mb-2 text-blue-300">{line.replace(/^#\s*/, '')}</h3>;
                }
                if (line.startsWith('-')) {
                  return <li key={i} className="ml-4 text-slate-200">{line.substring(2)}</li>;
                }
                if (line.trim()) {
                  return <p key={i} className="text-slate-200 mb-2">{line}</p>;
                }
                return <br key={i} />;
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="relative border-t border-blue-500/30 px-6 md:px-8 py-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 flex items-center justify-between text-sm">
            <span className="text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Analysis completed successfully
            </span>
            <span className="text-green-400 text-lg">✓</span>
          </div>
        </div>
      ))}
    </div>
  );
}
