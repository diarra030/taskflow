import { useMemo, useState } from 'react'
import { KanbanColumn } from './components/KanbanColumn'
import { Sidebar } from './components/Sidebar'
import { StatsBar } from './components/StatsBar'
import { TaskDetail } from './components/TaskDetail'
import { TaskModal } from './components/TaskModal'
import { columns, initialTasks } from './data/initialData'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { ColumnId, FilterPriority, Task, ViewMode } from './types'

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('taskflow-tasks', initialTasks)
  const [activeView, setActiveView] = useState<ViewMode>('board')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPriority, setFilterPriority] = useState<FilterPriority>('all')
  const [showModal, setShowModal] = useState(false)
  const [modalColumnId, setModalColumnId] = useState<ColumnId>('todo')
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const filteredTasks = useMemo(() => tasks.filter((task) => {
    const matchesSearch = !searchQuery || `${task.title} ${task.description}`.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority
    return matchesSearch && matchesPriority
  }), [filterPriority, searchQuery, tasks])

  const openCreateModal = (columnId: ColumnId = 'todo') => {
    setModalColumnId(columnId)
    setEditingTask(null)
    setShowModal(true)
  }

  const handleSaveTask = (task: Task) => {
    setTasks((current) => {
      const exists = current.some((item) => item.id === task.id)
      return exists ? current.map((item) => item.id === task.id ? task : item) : [...current, task]
    })
    setSelectedTask(task)
    setShowModal(false)
  }

  const handleMoveTask = (taskId: string, targetColumn: ColumnId) => {
    setTasks((current) => current.map((task) => task.id === taskId ? { ...task, columnId: targetColumn } : task))
    setSelectedTask((current) => current?.id === taskId ? { ...current, columnId: targetColumn } : current)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((current) => current.filter((task) => task.id !== taskId))
    setSelectedTask(null)
  }

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((current) => current.map((task) => task.id === updatedTask.id ? updatedTask : task))
    setSelectedTask(updatedTask)
  }

  const handleOpenTask = (task: Task) => setSelectedTask(task)
  const setView = (view: ViewMode) => setActiveView(view)

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} setActiveView={setView} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-title">
            <button className="mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Ouvrir le menu">☰</button>
            <div><span className="eyebrow">PROJET DE COLLABORATION</span><h1>Tableau de bord</h1></div>
          </div>
          <div className="topbar-actions">
            <label className="search-field"><span>⌕</span><input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Rechercher..." aria-label="Rechercher une tâche" /></label>
            <select value={filterPriority} onChange={(event) => setFilterPriority(event.target.value as FilterPriority)} aria-label="Filtrer par priorité"><option value="all">Toutes les priorités</option><option value="high">Haute</option><option value="medium">Moyenne</option><option value="low">Basse</option></select>
            <button className="avatar-button" aria-label="Profil utilisateur">TF</button>
          </div>
        </header>
        <div className="content-area">
          <StatsBar tasks={filteredTasks} />
          <div className="board-heading">
            <div><h2>Le sprint de la semaine</h2><p>Organisez les objectifs et suivez l’avancement de votre équipe.</p></div>
            <div className="view-switcher"><button className={activeView === 'board' ? 'active' : ''} onClick={() => setView('board')}>▦ Tableau</button><button className={activeView === 'list' ? 'active' : ''} onClick={() => setView('list')}>☷ Liste</button></div>
          </div>
          {activeView === 'board' ? (
            <div className="kanban-board">
              {columns.map((column) => <KanbanColumn key={column.id} column={column} tasks={filteredTasks.filter((task) => task.columnId === column.id)} onAddTask={openCreateModal} onTaskClick={handleOpenTask} onMoveTask={handleMoveTask} />)}
            </div>
          ) : (
            <div className="list-view">{filteredTasks.map((task) => <button key={task.id} onClick={() => handleOpenTask(task)}><span className={`priority-dot priority-${task.priority}`} />{task.title}<span>{task.assignees[0]?.name ?? 'Non assigné'}</span><span>{task.dueDate}</span></button>)}</div>
          )}
        </div>
      </main>
      <TaskModal key={showModal ? editingTask?.id ?? 'new-task' : 'closed'} isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSaveTask} columnId={modalColumnId} editTask={editingTask} />
      {selectedTask && <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} onMoveTask={handleMoveTask} />}
    </div>
  )
}
