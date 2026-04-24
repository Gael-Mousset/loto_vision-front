# 🎱 Loto Vision — Front-end

> Application web de suivi de partie de loto en temps réel.  
> L'animateur tire les numéros, les joueurs suivent la partie en direct sur leur propre écran — tous connectés à la même session.

---

## 📖 Présentation

**Loto Vision** est une application de loto multijoueur en temps réel. Elle permet à un animateur de gérer une partie (tirage des numéros) pendant que les joueurs connectés à la session suivent l'évolution en direct sur leur interface.

Le système repose sur **WebSockets (Socket.io)** pour synchroniser l'état de la partie entre tous les clients connectés instantanément, sans rechargement de page.

### Fonctionnement

```
Animateur (maître du jeu)
   └── tire un numéro
         └── Socket.io broadcast → tous les joueurs connectés voient le numéro apparaître en temps réel
```

---

## 👥 Rôles utilisateurs

| Rôle | Description |
|---|---|
| 🎙️ **Animateur** | Lance la session, tire les numéros un à un, contrôle le déroulement de la partie |
| 🎮 **Joueur** | Rejoint une session via un code ou lien, suit l'affichage des numéros en direct |

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|---|---|
| Framework UI | React 19 |
| Langage | TypeScript |
| Temps réel | Socket.io (WebSockets) |
| Bundler | Vite |
| Styles | Tailwind CSS |
| Routage | React Router |

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 20
- npm ≥ 9
- Le back-end Loto Vision lancé (pour les WebSockets)

### Installation

```bash
git clone https://github.com/Gael-Mousset/loto_vision-front.git
cd loto_vision-front
npm install
```

### Variables d'environnement

Crée un fichier `.env.local` à la racine :

```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

> ⚠️ Ne commit jamais ton `.env.local` — il est dans le `.gitignore`.

### Lancement en développement

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement avec HMR |
| `npm run build` | Compile TypeScript et génère le build de production |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run lint` | Analyse le code avec ESLint |

---

## 🗂️ Structure du projet

```
loto_vision-front/
├── public/                  # Assets statiques
├── src/
│   ├── components/          # Composants réutilisables (grille, boule, tableau...)
│   ├── pages/               # Pages de l'app (Accueil, Session animateur, Vue joueur)
│   ├── hooks/               # Custom hooks (useSocket, useGame...)
│   ├── services/            # Connexion Socket.io et appels API
│   ├── types/               # Types TypeScript partagés
│   └── main.tsx             # Point d'entrée
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔌 Fonctionnement WebSocket

La connexion Socket.io est initialisée à l'entrée dans une session. Les événements principaux :

| Événement | Émetteur | Description |
|---|---|---|
| `join_session` | Joueur | Rejoint une session de partie |
| `draw_number` | Animateur | Tire un nouveau numéro |
| `number_drawn` | Serveur → tous | Diffuse le numéro tiré à tous les clients |
| `game_reset` | Animateur | Réinitialise la partie |
| `session_ended` | Serveur → tous | Notifie la fin de partie |

> ⚠️ Les événements exacts dépendent de l'implémentation back-end. Ajuster si besoin.

---

## 🗺️ Roadmap

- [x] Affichage des numéros tirés en temps réel
- [x] Connexion multi-clients à une même session
- [x] Rôles animateur / joueur
- [ ] Validation automatique du carton gagnant
- [ ] Historique des parties
- [ ] Gestion de plusieurs sessions simultanées
- [ ] Mode plein écran pour affichage public (vidéoprojecteur)

---

## 🔗 Lien avec le back-end

Ce front-end est conçu pour fonctionner avec le back-end Loto Vision (Socket.io + API REST).  
Sans le serveur lancé, la connexion WebSocket échouera.

---

## 👤 Auteur

**Gaël Mousset** — [github.com/Gael-Mousset](https://github.com/Gael-Mousset)
