import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, MessageCircle } from 'lucide-react'
import type { ColumnId, Task } from '../types'

interface Props { task: Task; onOpen: (task: Task) => void; onMove: (taskId: string, columnId: ColumnId) => void }
const columns: ColumnId[] = ['todo', 'in-progress', 'done']
const labels: Record<ColumnId, string> = { todo: 'À faire', 'in-progress': 'En cours', done: 'Terminé' }

export function TaskCard({ task, onOpen, onMove }: Props) {
  const index = columns.indexOf(task.columnId)
  const assignees = task.assignees.slice(0, 3)
  return <motion.article layout whileHover={{ y: -3 }} onClick={() => onOpen(task)} className="cursor-pointer rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
    <div className="mb-3 flex items-start justify-between gap-2"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${task.priority === 'high' ? 'bg-red-100 text-red-600' : task.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>{task.priority}</span><span className="text-xs text-slate-400">#{task.id.slice(-2)}</span></div>
    <h3 className="font-bold leading-snug text-slate-900">{task.title}</h3><p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{task.description}</p>
    <div className="mt-4 flex items-center justify-between"><div className="flex -space-x-2">{assignees.map((member) => <span key={member.id} title={member.name} className={`grid h-7 w-7 place-items-center rounded-full border-2 border-white text-[9px] font-bold text-white ${member.color}`}>{member.avatar}</span>)}</div><div className="flex items-center gap-2 text-xs text-slate-400"><span className="flex items-center gap-1"><CalendarDays size={13} />{task.dueDate}</span><span className="flex items-center gap-1"><MessageCircle size={13} />{task.comments.length}</span></div></div>
    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3"><select value={task.columnId} onClick={(event) => event.stopPropagation()} onChange={(event) => onMove(task.id, event.target.value as ColumnId)} aria-label={`Changer la colonne de ${task.title}`} className="text-xs font-semibold text-slate-500 outline-none">{columns.map((column) => <option key={column} value={column}>{labels[column]}</option>)}</select><div className="flex gap-1">{index > 0 && <button onClick={(event) => { event.stopPropagation(); onMove(task.id, columns[index - 1]) }} aria-label="Déplacer vers la colonne précédente"><ArrowLeft size={14} /></button>}{index < columns.length - 1 && <button onClick={(event) => { event.stopPropagation(); onMove(task.id, columns[index + 1]) }} aria-label="Déplacer vers la colonne suivante"><ArrowRight size={14} /></button>}</div></div>
  </motion.article>
}
