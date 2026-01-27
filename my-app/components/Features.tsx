export function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Ultra Fast",
      description: "Analysis in seconds with advanced AI",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Your files are never stored",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "📊",
      title: "Detailed",
      description: "Complete and professional reports",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🌐",
      title: "Accessible",
      description: "Works on all your devices",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: "💾",
      title: "Exportable",
      description: "Download your results as TXT",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: "🤖",
      title: "Advanced AI",
      description: "OpenAI GPT-4o-mini technology",
      color: "from-indigo-400 to-purple-500"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why choose <span className="gradient-text">DataAnalyzer</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete solution to analyze your documents with artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
              </div>

              {/* Icon background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 mb-4 flex items-center justify-center`}>
                <div className="text-3xl group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Animated line indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
