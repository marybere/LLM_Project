import { useCallback, useState } from "react";

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  isProcessing: boolean;
}

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

export function FileUpload({ onFilesSelected, isProcessing }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesSelected(files);
  }, [onFilesSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onFilesSelected(files);
      e.target.value = "";
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      className={`relative group overflow-hidden rounded-3xl p-8 md:p-16 text-center cursor-pointer transition-all duration-500 transform ${
        isDragging
          ? "scale-105 shadow-2xl"
          : "hover:scale-102 hover:shadow-xl"
      }`}
      style={{
        background: isDragging
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%)'
          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: isDragging ? '2px solid rgba(59, 130, 246, 0.6)' : '2px dashed rgba(59, 130, 246, 0.3)'
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className={`transition-all duration-300 ${
          isDragging ? "scale-150" : "scale-100 group-hover:scale-125"
        }`}>
          <div className="text-6xl drop-shadow-lg">📤</div>
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {isDragging ? "🎯 Drop here!" : "Drop your files"}
          </h3>
          <p className="text-base text-slate-300 font-medium">
            or click to select your documents
          </p>
        </div>
        <div className="pt-4 space-y-2 text-xs text-slate-400">
          <p>✅ Formats: PDF, TXT, DOC, DOCX, CSV, JSON</p>
          <p>⚡ Limit: 10MB per file</p>
          <p>🚀 Instant processing with AI</p>
        </div>
      </div>

      <input
        type="file"
        multiple
        onChange={handleChange}
        disabled={isProcessing}
        className="hidden"
        id="file-input"
        accept=".pdf,.txt,.doc,.docx,.csv,.json"
      />
      
      <button
        disabled={isProcessing}
        className={`mt-8 px-8 py-3 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isProcessing
            ? 'bg-gradient-to-r from-slate-600 to-slate-700 cursor-not-allowed opacity-70'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50'
        }`}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block animate-spin">⏳</span>
            <span>Processing...</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>📤</span>
            Select files
          </span>
        )}
      </button>
    </div>
  );
}

export function FileList({ files, onRemove }: FileListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {files.map((file: any, index: number) => (
        <div
          key={index}
          className="glass-effect flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="text-xl">📄</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground truncate font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button
            onClick={() => onRemove(index)}
            className="ml-2 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200 flex-shrink-0"
            title="Remove"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
