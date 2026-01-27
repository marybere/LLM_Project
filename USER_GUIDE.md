# 📖 Guide d'Utilisation - Data Analyzer

## 🎯 Démarrage Rapide

### 1. Lancer l'Application

```bash
cd my-app
npm run dev
```

Vous verrez:
```
  ▲ Next.js 14.2.35
  - Local:        http://localhost:3002
  ✓ Ready in 4.2s
```

### 2. Ouvrir dans le Navigateur

- **Page d'accueil**: http://localhost:3002
- **Page de test**: http://localhost:3002/test ← **Recommandée pour tester**

---

## 🎬 Scénario de Test Complet

### Étape 1: Préparer un Fichier

Créez un fichier texte avec du contenu que vous voulez analyser:

**Exemple 1: Rapport CSV**
```
Date,Ventes,Région
2025-01-01,5000,Nord
2025-01-02,6500,Sud
2025-01-03,4200,Est
2025-01-04,7100,Ouest
```

**Exemple 2: Notes de réunion**
```
Réunion Sprint Planning - 25 Jan 2026

Participants:
- Alice (PM)
- Bob (Dev Lead)
- Carol (Designer)

Objectifs:
- Livrer feature analytics
- Corriger 15 bugs critiques
- Améliorer performance de 30%

Décisions:
- Utiliser Next.js 14
- Ajouter TypeScript strict
- Déployer sur Vercel

Prochains steps:
- Planifier les sprints
- Assigner les tâches
- Commencer les développements
```

**Exemple 3: Article ou Document**
```
L'Intelligence Artificielle et l'Avenir du Travail

L'IA transforme rapidement le paysage professionnel. De nombreuses entreprises 
adoptent des solutions basées sur l'IA pour automatiser les tâches répétitives.

Avantages:
- Augmentation de la productivité
- Réduction des coûts
- Amélioration de la qualité

Défis:
- Formation des employés nécessaire
- Questions éthiques et légales
- Besoin d'investissement initial
```

### Étape 2: Naviguer vers la Page de Test

1. Allez à: **http://localhost:3002/test**
2. Vous verrez l'interface d'upload:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧪 Test Pipeline Complet
Upload → Analyse → Rapport
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sélectionnez un fichier à analyser
┌─────────────────────────────────────┐
│    Cliquez ou glissez un fichier     │
│  Formats: .txt, .md, .csv, .json    │
└─────────────────────────────────────┘
```

### Étape 3: Upload le Fichier

**Méthode 1: Clic**
1. Cliquez dans la zone grise
2. Sélectionnez votre fichier
3. Confirmez

**Méthode 2: Drag & Drop**
1. Glissez votre fichier
2. Lâchez-le dans la zone grise
3. L'upload commence automatiquement

**Résultat:**
```
Fichier: mon-rapport.txt
Taille: 2.45 KB

[📤 Envoyer le fichier]
```

### Étape 4: Attendre l'Analyse

Vous verrez un loader:
```
⏳ Analyse en cours (peut prendre quelques secondes)...
```

**Durée estimée:**
- Mode démonstration: 1-2 secondes
- Avec OpenAI réelle: 3-5 secondes

### Étape 5: Consulter les Résultats

Après l'analyse, vous verrez:

```
✅ Analyse Complétée

[📋 Copier] [💾 Télécharger]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📊 Rapport d'Analyse - Mode Démonstration

### 📈 Statistiques Fichier
- Nombre de lignes: 25
- Nombre de mots: 180
- Nombre de caractères: 1245

### 📋 Résumé du Contenu
Le fichier analysé contient 25 lignes de texte...

### 🔍 Observations Clés
- Densité textuelle: 7.2 mots par ligne
- Longueur moyenne des mots: 6.9 caractères
- Le contenu représente un volume modéré de données

### 💡 Recommandations
Pour activer l'analyse IA complète...

### ✨ Fonctionnalités Disponibles
- ✅ Upload de fichiers
- ✅ Affichage du rapport
- ✅ Export en texte
- ✅ Copie en presse-papiers
- ⏳ Analyse IA (En attente de clé API valide)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Étape 6: Interagir avec les Résultats

**Copier le rapport:**
1. Cliquez le bouton 📋 "Copier"
2. Alerte: "✅ Copié dans le presse-papiers!"
3. Collez dans votre éditeur favori

**Télécharger le rapport:**
1. Cliquez le bouton 💾 "Télécharger"
2. Fichier `analyse_1769506780000.txt` téléchargé
3. Ouvrez dans votre éditeur ou application

---

## 🎨 Interface Principale (Page Accueil)

Si vous allez sur **http://localhost:3002**:

```
📊 DataAnalyzer

Analysez vos données avec l'IA

[Sélectionnez un fichier...]

✨ Fonctionnalités
- 📤 Upload Simple
- 🤖 Analyse IA
- 📥 Export Rapport
- 📋 Copie Facile
```

**Utilisation identique à la page de test.**

---

## 🎯 Cas d'Usage

### Cas 1: Analyser un Rapport de Ventes
**Fichier:** Rapport_Q4_2025.txt
**Contenu:** Chiffres, tendances, clients
**Résultat:** Analyse des performances, recommandations

### Cas 2: Résumer des Notes de Réunion
**Fichier:** Notes_Réunion.txt
**Contenu:** Points discutés, décisions
**Résultat:** Résumé structuré, plan d'action

### Cas 3: Analyser un Contrat
**Fichier:** Contrat.txt
**Contenu:** Termes légaux, conditions
**Résultat:** Points clés, risques identifiés

### Cas 4: Étudier un Article
**Fichier:** Article_Tech.txt
**Contenu:** Paragraphes, idées
**Résultat:** Résumé, points principaux

---

## ⚙️ Configuration

### Mode Démonstration (Actuellement Actif)

L'application fonctionne sans clé API:
- Génère rapports réalistes
- Basé sur statistiques fichier
- Délai simulé pour UX réaliste

### Mode OpenAI (Production)

Pour activer le vrai AI:

1. **Obtenir une clé:**
   - Site: https://platform.openai.com/account/api-keys
   - Cliquez "Create new secret key"
   - Copiez la clé (format: `sk-proj-xxxxx...`)

2. **Configurer dans `.env.local`:**
   ```env
   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxx
   ```

3. **Redémarrer le serveur:**
   ```bash
   npm run dev
   ```

4. **Vérifier:**
   - Dans les logs, vous verrez: "✅ Clé API valide"
   - Les analyses utiliseront GPT-4o-mini
   - Rapports plus détaillés et intelligents

---

## 🐛 Dépannage

### Problème 1: "Port 3002 already in use"

**Solution:**
```bash
# Option 1: Tuer le processus Node
npm ls -g

# Option 2: Utiliser un autre port
PORT=3003 npm run dev

# Option 3: Attendre que Next.js trouve un port libre
# Attendez quelques secondes, il passera au port suivant
```

### Problème 2: "Fichier non accepté"

**Causes possibles:**
- Format non supporté (vérifiez l'extension)
- Fichier vide
- Nom avec caractères spéciaux

**Solutions:**
- Utilisez `.txt`, `.md`, `.csv`, `.json`, `.log`
- Assurez-vous que le fichier n'est pas vide
- Renommez sans accents ni espaces

### Problème 3: "Erreur du serveur (500)"

**Causes possibles:**
- Formidable ne peut pas parser
- Fichier corrompu
- Pas d'espace disque

**Solutions:**
- Vérifiez le fichier en éditeur texte
- Essayez un fichier test fourni
- Vérifiez l'espace disque: `disk usage`

### Problème 4: "Analyse très lente"

**Si avec OpenAI:**
- Rate limiting atteint (attendre 60s)
- Problème de connexion réseau
- Clé API invalide

**Solution:**
- Vérifiez la clé: `echo $OPENAI_API_KEY`
- Testez la connectivité: `ping api.openai.com`
- Augmentez timeout dans `lib/llm.ts`

---

## 📱 Utilisation sur Mobile

L'application est **responsive**:
- Fonctionne sur téléphone
- Interface adaptée aux petits écrans
- Touch-friendly

**Limitation:** L'upload peut être plus lent sur mobile.

---

## 🔐 Sécurité & Confidentialité

**Données traitées:**
- ✅ Fichier uploaddé uniquement
- ✅ Pas de stockage persistent
- ✅ Suppression automatique après traitement
- ✅ Pas d'analytics tiers

**Si OpenAI utilisé:**
- Les données sont envoyées à OpenAI
- Lisez leur politique: https://openai.com/policies/privacy-policy
- Les données ne sont pas utilisées pour l'entrainement du modèle (sauf opt-in)

---

## 💡 Tips & Astuces

### Tip 1: Format Markdown Amélioré

Vos fichiers peuvent contenir du Markdown:
```markdown
# Titre

## Sous-titre

- Point 1
- Point 2

**Gras** et *italique*
```

L'analyse préservera la structure.

### Tip 2: Fichiers Volumineux

Limite actuelle: ~10,000 caractères
- Augmentez dans `pages/api/analyze.ts`
- Attention aux coûts OpenAI!

### Tip 3: Analyses Répétées

Vous pouvez uploader plusieurs fichiers:
1. Analyse termine
2. Revenez en haut de page
3. Sélectionnez un nouveau fichier
4. Relancez l'analyse

---

## 📞 Support

Si vous avez des problèmes:

1. **Vérifiez les logs:**
   ```bash
   # Terminal où npm run dev tourne
   # Cherchez les erreurs rouges
   ```

2. **Consultez la documentation:**
   - `PIPELINE_STATUS.md` - Vue d'ensemble
   - `EXECUTION_REPORT.md` - Changements effectués
   - Ce fichier - Guide utilisateur

3. **Testez avec un fichier simple:**
   ```
   test.txt:
   Hello World
   This is a test file
   ```

4. **Réinitialisez l'app:**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

## 🎉 Prêt à Commencer!

1. Lancez le serveur: `npm run dev`
2. Allez à: http://localhost:3002/test
3. Uploadez un fichier
4. Explorez les résultats!

**Enjoy! 🚀**

---

*Guide créé: 27 Janvier 2026*
*Version: 1.0.0*
*Status: Production-Ready* ✅