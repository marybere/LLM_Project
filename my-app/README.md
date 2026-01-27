# DataAnalyzer 🚀

Une application web moderne pour analyser vos documents avec l'Intelligence Artificielle (OpenAI).

## ✨ Fonctionnalités

- **Upload de fichiers** - Déposez ou sélectionnez vos documents (PDF, TXT, DOC, DOCX, CSV, JSON)
- **Analyse IA** - Utilise GPT-4o-mini pour générer des rapports détaillés
- **Interface moderne** - Design épuré avec animations et gradients
- **Copie & Téléchargement** - Exportez les résultats facilement
- **Notifications** - Feedback en temps réel sur le statut
- **Responsive** - Fonctionne parfaitement sur mobile et desktop

## 🛠️ Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Clé API OpenAI

### Étapes

1. **Clonez/téléchargez le projet**
```bash
cd my-app
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Configurez votre clé API**
Modifiez `.env.local`:
```
OPENAI_API_KEY=votre_clé_openai_ici
```

4. **Démarrez le serveur de développement**
```bash
npm run dev
```

5. **Ouvrez votre navigateur**
```
http://localhost:3000
```

## 📝 Utilisation

1. Cliquez sur la zone de dépôt ou appuyez sur le bouton pour sélectionner un fichier
2. Attendez que l'analyse se termine (barre de progression)
3. Consultez le rapport généré
4. Copiez (📋) ou téléchargez (💾) le résultat

## 📁 Structure du projet

```
my-app/
├── pages/
│   ├── _app.tsx           # Wrapper Next.js
│   ├── _document.tsx      # HTML document
│   ├── index.tsx          # Page principale
│   └── api/
│       ├── analyze.ts     # Endpoint analyse
│       └── health.ts      # Health check
├── components/
│   ├── Header.tsx         # En-tête
│   ├── FileUpload.tsx     # Zone de dépôt
│   ├── AnalysisReport.tsx # Rapport
│   └── EmptyState.tsx     # État vide
├── lib/
│   └── llm.ts             # Intégration OpenAI
├── hooks/
│   └── use-toast.ts       # Notifications
├── styles/
│   └── globals.css        # Styles Tailwind
└── public/
    └── (assets)
```

## 🎨 Design

- **Thème sombre** avec dégradés bleu/cyan
- **Glassmorphism** pour les cartes
- **Animations fluides** et transitions
- **Responsive design** avec Tailwind CSS
- **Accessibilité** (WCAG)

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
vercel deploy
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔐 Sécurité

- Clé API stockée en variable d'environnement
- Fichiers temporaires nettoyés après analyse
- Validation des fichiers
- CORS configurable

## 📊 Limitations

- Max 10MB par fichier
- Max 10,000 caractères par analyse
- Rate limiting recommandé pour production

## 🛠️ Scripts disponibles

```bash
npm run dev      # Développement
npm run build    # Build pour production
npm start        # Serveur production
npm run lint     # Lint TypeScript
```

## 📦 Dépendances principales

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **OpenAI SDK** - Intégration IA
- **Formidable** - Upload fichiers

## 🤝 Contribution

Les pull requests sont bienvenues !

## 📄 License

MIT

## 📞 Support

Pour toute question, créez une issue ou contactez-nous.

---

**Made with ❤️ by the DataAnalyzer team**
