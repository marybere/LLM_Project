```
DataAnalyzer Project Structure
==============================

my-app/
│
├── 📄 Configuration Files
│   ├── package.json              # Dépendances et scripts
│   ├── tsconfig.json             # Configuration TypeScript
│   ├── next.config.js            # Configuration Next.js
│   ├── tailwind.config.js        # Configuration Tailwind CSS
│   ├── postcss.config.js         # Configuration PostCSS
│   ├── .env.local                # Variables d'environnement
│   ├── .env.example              # Template variables
│   └── .gitignore                # Fichiers à ignorer
│
├── 📚 Documentation
│   ├── README.md                 # Documentation principale
│   ├── QUICKSTART.md             # Démarrage rapide
│   ├── DEPLOYMENT.md             # Guide de déploiement
│   └── .eslintrc.json            # Règles ESLint
│
├── 📁 pages/                     # Pages et routes
│   ├── _app.tsx                  # Wrapper Next.js
│   ├── _document.tsx             # Document HTML
│   ├── index.tsx                 # Page d'accueil (/)
│   ├── 404.tsx                   # Page d'erreur 404
│   ├── 500.tsx                   # Page d'erreur 500
│   ├── docs.tsx                  # Documentation (/docs)
│   ├── settings.tsx              # Configuration (/settings)
│   │
│   └── api/                      # Routes API
│       ├── analyze.ts            # POST /api/analyze
│       └── health.ts             # GET /api/health
│
├── 📦 components/                # Composants React
│   ├── Header.tsx                # En-tête avec navigation
│   ├── FileUpload.tsx            # Zone de dépôt + bouton
│   ├── FileList.tsx              # Liste des fichiers
│   ├── AnalysisReport.tsx        # Rapport d'analyse
│   ├── EmptyState.tsx            # État vide
│   └── Features.tsx              # Showcase des features
│
├── 🎨 styles/                    # Fichiers CSS
│   └── globals.css               # Styles globaux + Tailwind
│
├── 🔧 lib/                       # Utilitaires et logique métier
│   ├── llm.ts                    # Intégration OpenAI API
│   └── config.ts                 # Configuration application
│
├── 🪝 hooks/                     # Hooks React personnalisés
│   └── use-toast.ts              # Notifications système
│
├── 📄 test-file.txt              # Fichier de test
└── 📊 public/                    # Fichiers statiques
    └── (images, fonts, etc)

Fichiers générés automatiquement:
├── .next/                        # Build Next.js
├── node_modules/                 # Dépendances npm
└── .git/                         # Repository git

═══════════════════════════════════════════════════════════════

ROUTES DISPONIBLES:

Frontend Pages:
  / ................... Page d'accueil (upload + résultats)
  /docs ............... Documentation utilisateur
  /settings ........... Configuration de l'application
  /404 ................ Page non trouvée
  /500 ................ Erreur serveur

API Endpoints:
  POST /api/analyze ... Analyse un fichier
  GET /api/health .... Health check du serveur

═══════════════════════════════════════════════════════════════

TECHNOLOGIES:

Frontend:
  • React 18 + Hooks
  • TypeScript pour la sécurité des types
  • Next.js 14 (App Router compatible)
  • Tailwind CSS 3 pour le styling
  • Component-based architecture

Backend:
  • Next.js API Routes
  • OpenAI API (GPT-4o-mini)
  • Formidable pour les uploads
  • Node.js filesystem API

═══════════════════════════════════════════════════════════════

FEATURES IMPLÉMENTÉES:

✅ Upload multiple de fichiers
✅ Drag & drop intuitif
✅ Analyse IA avec OpenAI
✅ Rapports détaillés
✅ Export (copie + téléchargement)
✅ Notifications en temps réel
✅ Barre de progression
✅ Design responsive
✅ Mode sombre
✅ Animations fluides
✅ Gestion d'erreurs
✅ Health check API
✅ Documentation intégrée

═══════════════════════════════════════════════════════════════

COMMANDES DISPONIBLES:

npm install ........... Installer les dépendances
npm run dev ........... Serveur de développement
npm run build ......... Build pour la production
npm start ............. Serveur de production
npm run lint .......... Vérifier le code TypeScript

═══════════════════════════════════════════════════════════════
```
