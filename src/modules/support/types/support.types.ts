import type { ApplicationStatus, Timestamped } from '@shared/types'

/** Replace with the real Support model once the API contract is agreed. */
export interface SupportItem extends Timestamped {
  id: string
  reference: string
  title: string
  status: ApplicationStatus
  amount?: number
}

export interface SupportFilters {
  status?: ApplicationStatus
  search?: string
}
