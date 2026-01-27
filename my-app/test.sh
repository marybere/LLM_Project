#!/bin/bash

echo "🧪 Test de DataAnalyzer"
echo "======================="
echo ""

# Test health endpoint
echo "✓ Vérification du serveur..."
curl -s http://localhost:3002/api/health | jq .

echo ""
echo "✓ Tests terminés!"
echo ""
echo "📱 Accédez à l'application:"
echo "   http://localhost:3002"
