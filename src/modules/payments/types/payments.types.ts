import type { ApplicationStatus, Timestamped } from '@shared/types'

/** Replace with the real Payments model once the API contract is agreed. */
export interface PaymentsItem extends Timestamped {
  id: string
  reference: string
  title: string
  status: ApplicationStatus
  amount?: number
}

export interface PaymentsFilters {
  status?: ApplicationStatus
  search?: string
}
