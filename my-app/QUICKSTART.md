# 🚀 Quick Start - DataAnalyzer

## 5 minutes pour démarrer

### 1️⃣ Obtenir une clé API OpenAI
- Allez sur https://platform.openai.com/api-keys
- Créez une nouvelle clé secrète
- Copiez-la

### 2️⃣ Configurer
```bash
# Éditer .env.local
OPENAI_API_KEY=sk-votre-cle-ici
```

### 3️⃣ Démarrer le serveur
```bash
npm install  # Une seule fois
npm run dev
```

### 4️⃣ Ouvrir dans le navigateur
```
http://localhost:3002
```

### 5️⃣ Utiliser
1. Cliquez sur "Sélectionner des fichiers"
2. Choisissez un PDF, TXT, DOC, DOCX, CSV ou JSON
3. Attendez l'analyse
4. Consultez le rapport

## 🎯 Exemples de fichiers à tester

Créez un fichier `test.txt`:
```
DataAnalyzer est une application révolutionnaire.
Elle utilise l'intelligence artificielle pour analyser vos documents.
Cela vous fait gagner du temps et améliore la productivité.
```

Puis uploadez-le !

## 🆘 Troubleshooting

### "Clé API invalide"
→ Vérifiez votre clé dans `.env.local`

### "Port déjà utilisé"
→ Utilisez un autre port: `PORT=3003 npm run dev`

### "Fichier trop volumineux"
→ Maximum 10MB, essayez un fichier plus petit

## 📚 Fichiers importants

- `pages/index.tsx` - Page d'accueil
- `pages/api/analyze.ts` - Endpoint analyse
- `lib/llm.ts` - Intégration OpenAI
- `components/` - Composants React

## 🎉 C'est tout !

Vous êtes prêt à analyser vos documents avec l'IA !

Pour plus d'infos: consultez README.md
