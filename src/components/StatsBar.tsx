import { Activity, Clock3, TrendingUp } from 'lucide-react'
import type { Task } from '../types'

interface StatsBarProps { tasks: Task[] }

export function StatsBar({ tasks }: StatsBarProps) {
  const completed = tasks.filter((task) => task.columnId === 'done').length
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0
  const urgent = tasks.filter((task) => task.priority === 'high' && task.columnId !== 'done').length
  const timeSaved = Math.max(0, tasks.length * 4)
  const velocity = Math.min(100, Math.round((completed / Math.max(tasks.length, 1)) * 100))

  const stats = [
    { label: 'Avancement', value: `${progress}%`, detail: `${completed} tâches terminées`, icon: Activity, color: 'bg-violet-500' },
    { label: 'Urgent', value: String(urgent), detail: 'Tâches à traiter', icon: Clock3, color: 'bg-orange-500' },
    { label: 'Temps économisé', value: `${timeSaved}h`, detail: 'Cette semaine', icon: TrendingUp, color: 'bg-emerald-500' },
    { label: 'Vitesse', value: `${velocity}%`, detail: 'Objectifs atteints', icon: ZapIcon, color: 'bg-cyan-500' },
  ]

  return <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, detail, icon: Icon, color }) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-2 text-3xl font-bold text-slate-900">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div><span className={`grid h-10 w-10 place-items-center rounded-xl ${color} text-white`}><Icon size={19} /></span></div></article>)}</section>
}

function ZapIcon({ size = 19 }: { size?: number }) { return <Activity size={size} /> }
