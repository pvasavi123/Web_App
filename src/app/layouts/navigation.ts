import { routePaths } from '@core/config'

export interface NavItem {
  label: string
  to: string
  icon: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', to: routePaths.dashboard, icon: '⌂' },
      { label: 'Applications', to: routePaths.applications, icon: '☰' },
      { label: 'Documents', to: routePaths.documents, icon: '🗎' },
    ],
  },
  {
    title: 'Compliance',
    items: [
      { label: 'GST', to: routePaths.gst.root, icon: '%' },
      { label: 'Income tax', to: routePaths.itr, icon: '₹' },
    ],
  },
  {
    title: 'Finance',
    items: [
      { label: 'Loans', to: routePaths.loans, icon: '◈' },
      { label: 'Insurance', to: routePaths.insurance, icon: '☂' },
      { label: 'Payments', to: routePaths.payments, icon: '⇄' },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Profile', to: routePaths.profile, icon: '☺' },
      { label: 'Chat', to: routePaths.chat, icon: '✉' },
      { label: 'Support', to: routePaths.support, icon: '?' },
    ],
  },
]
