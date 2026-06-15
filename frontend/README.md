# Jeu de Memory

Jeu de memory en ligne avec tableau des scores. Retournez les cartes deux par deux pour trouver toutes les paires en un minimum de coups.

## Stack

- **Frontend** : React + Vite
- **Backend** : Node.js + Express
- **Base de données** : PostgreSQL

## Fonctionnalités

- Plateau de 16 cartes (8 paires d'animaux)
- Compteur de coups
- Sauvegarde du score avec pseudo
- Tableau des meilleurs scores

## Installation

### Prérequis

- Node.js 18+
- PostgreSQL

### Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` :

```env
DB_HOST=localhost
DB_PORT=5433
DB_NAME=memory_game
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
PORT=3000
```

Créer la base de données et la table :

```sql
CREATE DATABASE memory_game;

CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  pseudo VARCHAR(50) NOT NULL,
  coups INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Démarrer le serveur :

```bash
node app.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.
