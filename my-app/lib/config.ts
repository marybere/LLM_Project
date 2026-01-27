// Configuration pour l'application DataAnalyzer

export const APP_CONFIG = {
  name: "DataAnalyzer",
  version: "1.0.0",
  description: "Analysez vos documents avec l'IA",
  
  // Limites de fichiers
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxContentLength: 10000, // caractères
  
  // Types de fichiers acceptés
  acceptedFileTypes: [
    ".pdf",
    ".txt",
    ".doc",
    ".docx",
    ".csv",
    ".json",
  ],
  
  // Messages
  messages: {
    uploadSuccess: "Fichier uploadé avec succès",
    analyzeSuccess: "Analyse complétée",
    analyzeError: "Erreur lors de l'analyse",
    fileTooBig: "Le fichier est trop volumineux",
    invalidFileType: "Type de fichier non supporté",
  },
  
  // Timeouts
  uploadTimeout: 30000, // 30s
  analyzeTimeout: 60000, // 60s
};
