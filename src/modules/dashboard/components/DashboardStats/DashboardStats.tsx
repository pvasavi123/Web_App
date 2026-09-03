import type { DashboardStat } from '../../types/dashboard.types'
import './DashboardStats.css'

export interface DashboardStatsProps {
  stats: DashboardStat[]
}

export const DashboardStats = ({ stats }: DashboardStatsProps) => (
  <div className="dashboard-stats">
    {stats.map((stat) => (
      <article className="stat" key={stat.id}>
        <p className="stat__label">{stat.label}</p>
        <p className="stat__value">{stat.value}</p>
        {stat.hint && <p className="stat__hint">{stat.hint}</p>}
      </article>
    ))}
  </div>
)
