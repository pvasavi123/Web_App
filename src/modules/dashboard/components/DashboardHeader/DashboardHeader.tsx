import { financialYearOf } from '@shared/utils'

import './DashboardHeader.css'

export interface DashboardHeaderProps {
  userName: string
}

const greeting = (): string => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export const DashboardHeader = ({ userName }: DashboardHeaderProps) => (
  <header className="dashboard-header">
    <div>
      <h1 className="dashboard-header__title">
        {greeting()}, {userName.split(' ')[0]}
      </h1>
      <p className="dashboard-header__subtitle">Here is where everything stands today.</p>
    </div>
    <span className="dashboard-header__fy">FY {financialYearOf()}</span>
  </header>
)
