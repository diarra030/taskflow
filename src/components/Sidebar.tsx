import { LayoutDashboard, List, Settings, Zap } from 'lucide-react'
import type { ViewMode } from '../types'

interface SidebarProps {
  activeView: ViewMode
  setActiveView: (view: ViewMode) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const navItems: { id: ViewMode; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'board', label: 'Tableau', icon: LayoutDashboard },
  { id: 'list', label: 'Liste', icon: List },
]

export function Sidebar({ activeView, setActiveView, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && <button className="sidebar-overlay" onClick={() => setIsOpen(false)} aria-label="Fermer le menu" />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo"><span><Zap size={20} /></span><div><strong>TaskFlow</strong><small>Collaboration fluide</small></div></div>
        <nav className="sidebar-nav" aria-label="Navigation principale">
          {navItems.map(({ id, label, icon: Icon }) => <button key={id} className={activeView === id ? 'active' : ''} onClick={() => { setActiveView(id); setIsOpen(false) }}><Icon size={18} /><span>{label}</span></button>)}
        </nav>
        <div className="sidebar-team"><div className="team-avatar">TF</div><div><strong>TaskFlow Team</strong><small>5 membres actifs</small></div><span className="online-dot" /></div>
        <button className="sidebar-settings"><Settings size={18} /><span>Paramètres</span></button>
      </aside>
    </>
  )
}
