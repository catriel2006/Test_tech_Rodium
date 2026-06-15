# Jeu de Memory

Application web de jeu de paires — React + Node.js/Express + PostgreSQL.

## Prérequis

- Node.js 18+
- PostgreSQL

## Base de données

Créer une base de données et exécuter la requête suivante :

```sql
CREATE TABLE scores (
  id     SERIAL       PRIMARY KEY,
  pseudo VARCHAR(50)  NOT NULL,
  coups  INTEGER      NOT NULL,
  date   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);
```

## Configuration

Créer un fichier `.env` dans le dossier `backend/` :

```
DB_HOST=localhost
DB_PORT=5433
DB_NAME=memory_game
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
PORT=3000
```

## Lancer l'application

**Backend**

```bash
cd backend
npm install
node app.js
```

**Frontend** (dans un second terminal)

```bash
cd frontend
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.
