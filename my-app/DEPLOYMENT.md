# 🚀 Guide de Déploiement - DataAnalyzer

## Avant le déploiement

Assurez-vous que:
- ✅ Vous avez une clé API OpenAI valide
- ✅ Tous les tests passent localement
- ✅ Le code est pushé sur Git
- ✅ Les variables d'environnement sont configurées

## Déploiement sur Vercel (Recommandé)

### 1. Installez Vercel CLI
```bash
npm install -g vercel
```

### 2. Connectez-vous
```bash
vercel login
```

### 3. Déployez
```bash
vercel --prod
```

### 4. Configurez les variables d'environnement
Dans le dashboard Vercel:
1. Settings → Environment Variables
2. Ajoutez `OPENAI_API_KEY=sk-...`

## Déploiement avec Docker

### 1. Créez un Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 2. Build et run
```bash
docker build -t dataanalyzer .
docker run -p 3000:3000 -e OPENAI_API_KEY=sk-... dataanalyzer
```

## Déploiement avec Railway

1. Connectez votre repo GitHub
2. Sélectionnez ce projet
3. Ajouter une variable: `OPENAI_API_KEY`
4. Déployer!

## Déploiement avec AWS

### Utiliser AWS App Runner:
1. Push vers ECR
2. Créez un App Runner service
3. Configurez l'environnement

## Vérification post-déploiement

```bash
curl https://votre-domaine.com/api/health
```

## Optimisations de production

- [ ] Activer Vercel Analytics
- [ ] Configurer un domaine personnalisé
- [ ] Mettre en place les backups
- [ ] Monitorer les erreurs avec Sentry
- [ ] Configurer les rate limits

## Support & Maintenance

- Vérifier les logs régulièrement
- Mettre à jour les dépendances
- Tester les nouvelles versions d'OpenAI API
