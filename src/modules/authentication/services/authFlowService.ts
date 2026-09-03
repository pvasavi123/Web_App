import { env } from '@core/config'
import type { AuthSession, AuthUser } from '@core/auth'

import { authApi } from '../api/authApi'
import type {
  CreateProfilePayload,
  LoginPayload,
  RegisterPayload,
  VerifyOtpPayload,
} from '../types/auth.types'

/* ------------------------------------------------------------------ *
 * Development mocks - delete this block once the API is live.
 * ------------------------------------------------------------------ */
const mockUser = (mobile: string): AuthUser => ({
  id: 'usr_demo_001',
  fullName: 'Demo User',
  email: 'demo@taxedge.in',
  mobile,
  role: 'business',
  isProfileComplete: true,
})

const mockSession = (mobile: string): AuthSession => ({
  user: mockUser(mobile),
  tokens: { accessToken: 'mock.access.token', refreshToken: 'mock.refresh.token' },
})

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms))
/* ------------------------------------------------------------------ */

/**
 * Business rules for signing in. Pages call this, never authApi directly,
 * so the mock switch and any future multi-step logic lives in one place.
 */
export const authFlowService = {
  async login(payload: LoginPayload): Promise<AuthSession> {
    if (env.enableMocks) {
      await delay()
      return mockSession(payload.mobile)
    }
    return authApi.login(payload)
  },

  async register(payload: RegisterPayload): Promise<{ mobile: string }> {
    if (env.enableMocks) {
      await delay()
      return { mobile: payload.mobile }
    }
    await authApi.register(payload)
    return { mobile: payload.mobile }
  },

  async sendOtp(mobile: string): Promise<void> {
    if (env.enableMocks) {
      await delay(300)
      return
    }
    await authApi.sendOtp({ mobile })
  },

  async verifyOtp(payload: VerifyOtpPayload): Promise<AuthSession> {
    if (env.enableMocks) {
      await delay()
      if (payload.otp !== '123456') throw new Error('That code is incorrect. Try 123456 in demo mode.')
      return mockSession(payload.mobile)
    }
    return authApi.verifyOtp(payload)
  },

  async setPasscode(passcode: string): Promise<void> {
    if (env.enableMocks) {
      await delay(300)
      return
    }
    await authApi.setPasscode({ passcode })
  },

  async createProfile(payload: CreateProfilePayload): Promise<AuthUser> {
    if (env.enableMocks) {
      await delay()
      return { ...mockUser('9999999999'), isProfileComplete: true }
    }
    return authApi.createProfile(payload)
  },

  async logout(): Promise<void> {
    if (env.enableMocks) return
    try {
      await authApi.logout()
    } catch {
      /* signing out locally must succeed even if the server call fails */
    }
  },
}
