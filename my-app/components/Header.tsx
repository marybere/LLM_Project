export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(59, 130, 246, 0.2)'
      }}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 group-hover:scale-110 transition-all duration-300 rotate-0 group-hover:rotate-12">
            <span className="text-white font-black text-xl">⚡</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              DataAnalyzer
            </h1>
            <p className="text-xs text-slate-400 font-medium">✨ Advanced AI Analysis</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm text-slate-300 hover:text-cyan-300 transition duration-300 relative group font-medium">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/docs" className="text-sm text-slate-300 hover:text-cyan-300 transition duration-300 relative group font-medium">
            Docs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/settings" className="text-sm text-slate-300 hover:text-cyan-300 transition duration-300 relative group font-medium">
            Settings
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <button className="hidden sm:inline-flex px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95">
          🚀 Get Started
        </button>
      </div>
    </header>
  );
}
