export type Nullable<T> = T | null
export type Maybe<T> = T | null | undefined
export type Dict<T = unknown> = Record<string, T>

export const APPLICATION_STATUSES = [
  'draft',
  'submitted',
  'in_review',
  'action_required',
  'approved',
  'rejected',
  'completed',
] as const
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number]

export type StatusTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export interface SelectOption<T extends string = string> {
  label: string
  value: T
  disabled?: boolean
}

export interface Money {
  amount: number
  currency: string
}

export interface Timestamped {
  createdAt: string
  updatedAt: string
}
