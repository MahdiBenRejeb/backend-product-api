# Utiliser une image Node.js
FROM node:14

# Créer un dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers
COPY . .

# Exposer le port de l'API (8081)
EXPOSE 8081

# Commande pour démarrer l'application
CMD ["node", "index.js"]
