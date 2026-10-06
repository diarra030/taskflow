# TaskFlow

TaskFlow est une application de gestion de tâches en mode Kanban, développée avec React, TypeScript, Vite, Tailwind CSS, Framer Motion et Lucide React.

L’application permet à une équipe de visualiser les tâches, les répartir entre colonnes, suivre les priorités, rechercher des projets et échanger dans les détails de chaque tâche.

## Fonctionnalités

- Tableau Kanban avec les colonnes **À faire**, **En cours** et **Terminé**.
- Création, modification et suppression de tâches.
- Déplacement des tâches entre les colonnes.
- Assignation de plusieurs membres à une tâche.
- Priorités haute, moyenne et basse.
- Recherche par titre ou description.
- Filtrage par priorité.
- Vue tableau et vue liste.
- Commentaires sur les tâches.
- Statistiques d’avancement, de tâches urgentes, de temps économisé et de vitesse.
- Persistance des données dans le navigateur avec `localStorage`.
- Interface responsive pour le bureau, la tablette et le mobile.
- Animations avec Framer Motion et icônes Lucide React.

## Stack technique

- **Frontend :** React 19 et TypeScript.
- **Build :** Vite 8.
- **Styling :** Tailwind CSS 3.
- **Animations :** Framer Motion.
- **Icônes :** Lucide React.
- **Lint :** Oxlint.
- **Données :** `localStorage`.

## Prérequis

- Node.js 20 ou une version plus récente.
- npm.

## Installation

Clonez le dépôt, puis installez les dépendances :

```bash
npm install
```

## Développement

Démarrez le serveur de développement :

```bash
npm run dev
```

L’application est disponible à l’adresse affichée par Vite, généralement `http://localhost:5173`.

## Vérification

Pour compiler l’application :

```bash
npm run build
```

Pour exécuter le lint :

```bash
npm run lint
```

Pour afficher la version de production locale :

```bash
npm run preview
```

## Structure du projet

```text
src/
├── components/       # Composants de l’interface
├── data/             # Membres, colonnes et tâches initiales
├── hooks/            # Hooks personnalisés
├── types/            # Types TypeScript
├── App.tsx           # Application principale
├── index.css         # Styles Tailwind et CSS globaux
└── main.tsx          # Point d’entrée React
```

## Persistance des données

Les tâches sont enregistrées dans le stockage local du navigateur sous la clé `taskflow-tasks`. Les données sont donc conservées entre les redémarrages de l’application, mais ne sont pas synchronisées entre appareils ou utilisateurs.

## Données de démonstration

Le projet utilise actuellement des données fictives pour démontrer l’application. Vous pouvez les remplacer par vos données dans `src/data/initialData.ts`.
