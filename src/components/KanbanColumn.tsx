import { motion } from 'framer-motion'
import { CheckCircle2, ClipboardList, Plus, Timer } from 'lucide-react'
import type { Column, Task } from '../types'
import { TaskCard } from './TaskCard'

interface Props { column: Column; tasks: Task[]; onAddTask: (columnId: Task['columnId']) => void; onTaskClick: (task: Task) => void; onMoveTask: (taskId: string, columnId: Task['columnId']) => void }
const icons = { 'clipboard-list': ClipboardList, loader: Timer, 'check-circle': CheckCircle2 }

export function KanbanColumn({ column, tasks, onAddTask, onTaskClick, onMoveTask }: Props) {
  const Icon = icons[column.icon as keyof typeof icons]
  return <motion.section layout className="rounded-3xl border border-slate-200 bg-slate-100/80 p-3 shadow-sm">
    <header className="mb-3 flex items-center justify-between px-2 py-1"><div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${column.color} text-white`}><Icon size={18} /></span><div><h2 className="font-bold text-slate-900">{column.title}</h2><p className="text-xs text-slate-500">{tasks.length} tâche{tasks.length > 1 ? 's' : ''}</p></div></div><button onClick={() => onAddTask(column.id)} className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-white hover:text-violet-600" aria-label={`Ajouter une tâche dans ${column.title}`}><Plus size={18} /></button></header>
    <div className="space-y-3">{tasks.map((task) => <TaskCard key={task.id} task={task} onOpen={onTaskClick} onMove={onMoveTask} />)}{tasks.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center"><p className="text-sm text-slate-500">Aucune tâche ici</p></div>}</div>
  </motion.section>
}
