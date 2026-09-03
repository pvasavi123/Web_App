export const USER_ROLES = ['individual', 'business', 'ca', 'admin'] as const
export type UserRole = (typeof USER_ROLES)[number]

export interface AuthUser {
  id: string
  fullName: string
  email: string
  mobile: string
  role: UserRole
  avatarUrl?: string
  isProfileComplete: boolean
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt?: number
}

export interface AuthSession {
  user: AuthUser
  tokens: AuthTokens
}
