import type { ApplicationStatus, StatusTone } from '../types/common.types'

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  draft: 'Draft',
  submitted: 'Submitted',
  in_review: 'In review',
  action_required: 'Action required',
  approved: 'Approved',
  rejected: 'Rejected',
  completed: 'Completed',
}

export const STATUS_TONES: Record<ApplicationStatus, StatusTone> = {
  draft: 'neutral',
  submitted: 'info',
  in_review: 'info',
  action_required: 'warning',
  approved: 'success',
  rejected: 'danger',
  completed: 'success',
}

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan',
  'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
] as const

export const REGEX = {
  pan: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
  gstin: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/,
  mobile: /^[6-9]\d{9}$/,
  aadhaarMasked: /^\d{4}$/,
  pincode: /^[1-9][0-9]{5}$/,
} as const
