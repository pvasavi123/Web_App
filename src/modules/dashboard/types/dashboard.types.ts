import type { ApplicationStatus } from '@shared/types'

export interface DashboardStat {
  id: string
  label: string
  value: string
  change?: number
  hint?: string
}

export interface QuickService {
  id: string
  label: string
  description: string
  to: string
  icon: string
}

export interface DashboardActivity {
  id: string
  title: string
  module: string
  status: ApplicationStatus
  updatedAt: string
}

export interface DashboardSummary {
  stats: DashboardStat[]
  recentActivity: DashboardActivity[]
  upcomingDeadlines: Array<{ id: string; label: string; dueOn: string }>
}
