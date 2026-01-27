import { useState, useRef } from 'react';

export default function TestPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setError(null);
  };

  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Server error');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert('✅ Copied to clipboard!');
    }
  };

  const downloadResult = () => {
    if (result) {
      const blob = new Blob([result], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analysis_${new Date().getTime()}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2">🧪 Test Complete Pipeline</h1>
          <p className="text-gray-600 mb-6">Upload → Analysis → Report</p>

          <div className="space-y-6">
            {/* Upload Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a file to analyze
              </label>
              <div
                className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
                onClick={handleDropZoneClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".txt,.md,.csv,.json,.log"
                  onChange={handleFileInputChange}
                />
                <svg
                  className="w-12 h-12 mx-auto text-blue-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="text-gray-600">Click or drag a file here</p>
                <p className="text-xs text-gray-400 mt-1">Formats: .txt, .md, .csv, .json, .log</p>
              </div>
            </div>

            {/* File Info */}
            {selectedFile && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-semibold">File:</span> {selectedFile.name}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Size:</span> {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}

            {/* Upload Button */}
            {selectedFile && !result && (
              <button
                onClick={uploadFile}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⏳ Analysis in progress...' : '😤 Send file'}
              </button>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-semibold">❌ Error:</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Analysis Result */}
            {result && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-green-700">✅ Analysis Complete</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={copyResult}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                    >
                      📋 Copy
                    </button>
                    <button
                      onClick={downloadResult}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                    >
                      💾 Download
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded p-4 max-h-96 overflow-y-auto border border-green-100 prose prose-sm max-w-none">
                  {result.split('\n').map((line, i) => {
                    if (line.startsWith('##')) {
                      return (
                        <h3 key={i} className="text-lg font-bold text-gray-800 mt-4 mb-2">
                          {line.replace(/^##\s*/, '')}
                        </h3>
                      );
                    }
                    if (line.startsWith('###')) {
                      return (
                        <h4 key={i} className="text-base font-semibold text-gray-700 mt-3 mb-1">
                          {line.replace(/^###\s*/, '')}
                        </h4>
                      );
                    }
                    if (line.startsWith('-')) {
                      return (
                        <li key={i} className="ml-4 text-gray-700">
                          {line.substring(2)}
                        </li>
                      );
                    }
                    if (line.trim()) {
                      return (
                        <p key={i} className="text-gray-700 mb-2">
                          {line}
                        </p>
                      );
                    }
                    return <br key={i} />;
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Test Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-2">ℹ️ About this test:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ The application tests the complete pipeline: upload → analysis → display</li>
              <li>✅ Demo mode active (no API key required)</li>
              <li>✅ Files are deleted after processing</li>
              <li>📕 To enable OpenAI, add a valid key in .env.local</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}