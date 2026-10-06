import type { Column, Task, TeamMember } from '../types'

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'Alice Martin', avatar: 'AM', color: 'bg-blue-500', role: 'Product Designer' },
  { id: '2', name: 'Bob Chen', avatar: 'BC', color: 'bg-orange-500', role: 'Frontend Engineer' },
  { id: '3', name: 'Clara Dubois', avatar: 'CD', color: 'bg-purple-500', role: 'Product Manager' },
  { id: '4', name: 'David Kim', avatar: 'DK', color: 'bg-green-500', role: 'Backend Engineer' },
  { id: '5', name: 'Emma Laurent', avatar: 'EL', color: 'bg-pink-500', role: 'QA Engineer' },
]

export const columns: Column[] = [
  { id: 'todo', title: 'À faire', icon: 'clipboard-list', color: 'from-blue-500 to-blue-600' },
  { id: 'in-progress', title: 'En cours', icon: 'loader', color: 'from-orange-500 to-amber-500' },
  { id: 'done', title: 'Terminé', icon: 'check-circle', color: 'from-green-500 to-emerald-500' },
]

export const initialTasks: Task[] = [
  {
    id: 'task-1', title: 'Refonte UI du Dashboard', description: 'Moderniser l’interface du tableau de bord avec une nouvelle identité visuelle.', priority: 'high', dueDate: '2026-02-15', columnId: 'todo', assignees: [teamMembers[0], teamMembers[2]], comments: [{ id: 'c1', author: teamMembers[0], content: 'J’ai commencé les maquettes Figma.', timestamp: '2026-01-20T10:30:00' }], createdAt: '2026-01-18T09:00:00',
  },
  {
    id: 'task-2', title: 'API Authentification JWT', description: 'Implémenter le système d’authentification avec refresh tokens et gestion des sessions.', priority: 'high', dueDate: '2026-02-10', columnId: 'in-progress', assignees: [teamMembers[1]], comments: [{ id: 'c3', author: teamMembers[1], content: 'Le flux OAuth2 est presque prêt.', timestamp: '2026-01-22T14:00:00' }], createdAt: '2026-01-15T08:00:00',
  },
  {
    id: 'task-3', title: 'Tests Unitaires Module Payment', description: 'Écrire les tests pour le module de paiement avec une couverture supérieure à 90 %.', priority: 'medium', dueDate: '2026-02-20', columnId: 'todo', assignees: [teamMembers[3], teamMembers[4]], comments: [], createdAt: '2026-01-19T11:00:00',
  },
  {
    id: 'task-4', title: 'Optimisation des performances', description: 'Réduire le temps de chargement initial et optimiser la taille du bundle.', priority: 'medium', dueDate: '2026-02-25', columnId: 'in-progress', assignees: [teamMembers[0], teamMembers[3]], comments: [{ id: 'c4', author: teamMembers[3], content: 'Le lazy loading est implémenté sur les routes.', timestamp: '2026-01-23T09:00:00' }], createdAt: '2026-01-16T10:00:00',
  },
  {
    id: 'task-5', title: 'Documentation API REST', description: 'Rédiger la documentation Swagger/OpenAPI pour tous les endpoints.', priority: 'low', dueDate: '2026-03-01', columnId: 'todo', assignees: [teamMembers[2]], comments: [], createdAt: '2026-01-20T15:00:00',
  },
  {
    id: 'task-6', title: 'Setup CI/CD Pipeline', description: 'Configurer GitHub Actions pour le déploiement automatique.', priority: 'high', dueDate: '2026-01-30', columnId: 'done', assignees: [teamMembers[1], teamMembers[4]], comments: [{ id: 'c5', author: teamMembers[4], content: 'Le pipeline fonctionne et lance les tests automatiquement.', timestamp: '2026-01-28T16:00:00' }], createdAt: '2026-01-10T08:00:00',
  },
  {
    id: 'task-7', title: 'Design System - Composants de base', description: 'Créer les composants UI réutilisables : boutons, inputs, cards et modales.', priority: 'medium', dueDate: '2026-02-05', columnId: 'done', assignees: [teamMembers[0], teamMembers[2], teamMembers[4]], comments: [{ id: 'c6', author: teamMembers[0], content: 'Storybook contient désormais tous les composants.', timestamp: '2026-01-25T10:00:00' }], createdAt: '2026-01-08T09:00:00',
  },
  {
    id: 'task-8', title: 'Intégration Notifications Push', description: 'Mettre en place les notifications en temps réel via WebSocket.', priority: 'low', dueDate: '2026-03-10', columnId: 'in-progress', assignees: [teamMembers[3]], comments: [], createdAt: '2026-01-21T14:00:00',
  },
]
