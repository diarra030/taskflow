export type Priority = 'high' | 'medium' | 'low'
export type ColumnId = 'todo' | 'in-progress' | 'done'

export interface TeamMember {
  id: string
  name: string
  avatar: string
  color: string
  role: string
}

export interface Comment {
  id: string
  author: TeamMember
  content: string
  timestamp: string
}

export interface Task {
  id: string
  title: string
  description: string
  priority: Priority
  dueDate: string
  columnId: ColumnId
  assignees: TeamMember[]
  comments: Comment[]
  createdAt: string
}

export interface Column {
  id: ColumnId
  title: string
  icon: string
  color: string
}

export type FilterPriority = Priority | 'all'
export type ViewMode = 'board' | 'list'
