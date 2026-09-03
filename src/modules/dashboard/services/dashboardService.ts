import { env, routePaths } from '@core/config'

import { dashboardApi } from '../api/dashboardApi'
import type { DashboardSummary, QuickService } from '../types/dashboard.types'

/* Development mock - delete once the API is live. */
const mockSummary: DashboardSummary = {
  stats: [
    { id: 'open', label: 'Open applications', value: '4', change: 1, hint: '1 needs your input' },
    { id: 'gst', label: 'GST returns filed', value: '12', change: 2, hint: 'This financial year' },
    { id: 'refund', label: 'Refunds received', value: '₹48,200', hint: 'Across 2 filings' },
    { id: 'documents', label: 'Documents stored', value: '37' },
  ],
  recentActivity: [
    { id: 'a1', title: 'GSTR-3B — August', module: 'GST', status: 'in_review', updatedAt: new Date().toISOString() },
    { id: 'a2', title: 'ITR-4 filing FY 2025-26', module: 'Income tax', status: 'action_required', updatedAt: new Date(Date.now() - 864e5).toISOString() },
    { id: 'a3', title: 'Business loan — HDFC', module: 'Loans', status: 'submitted', updatedAt: new Date(Date.now() - 3 * 864e5).toISOString() },
    { id: 'a4', title: 'GST registration — Telangana', module: 'GST', status: 'approved', updatedAt: new Date(Date.now() - 9 * 864e5).toISOString() },
  ],
  upcomingDeadlines: [
    { id: 'd1', label: 'GSTR-1 for September', dueOn: '2026-10-11' },
    { id: 'd2', label: 'GSTR-3B for September', dueOn: '2026-10-20' },
    { id: 'd3', label: 'Advance tax — Q2 instalment', dueOn: '2026-09-15' },
  ],
}

export const quickServices: QuickService[] = [
  { id: 'gst-reg', label: 'GST registration', description: 'New GSTIN in 3-7 days', to: routePaths.gst.registration, icon: '%' },
  { id: 'gst-return', label: 'File GST return', description: 'GSTR-1 and GSTR-3B', to: routePaths.gst.returns, icon: '⇪' },
  { id: 'itr', label: 'File income tax', description: 'ITR-1 to ITR-4', to: routePaths.itr, icon: '₹' },
  { id: 'loan', label: 'Apply for a loan', description: 'Business and personal', to: routePaths.loans, icon: '◈' },
  { id: 'insurance', label: 'Get insured', description: 'Health, term and motor', to: routePaths.insurance, icon: '☂' },
  { id: 'documents', label: 'Upload documents', description: 'Store once, reuse everywhere', to: routePaths.documents, icon: '🗎' },
]

export const dashboardService = {
  async getSummary(): Promise<DashboardSummary> {
    if (env.enableMocks) {
      await new Promise((resolve) => setTimeout(resolve, 400))
      return mockSummary
    }
    return dashboardApi.getSummary()
  },
}
