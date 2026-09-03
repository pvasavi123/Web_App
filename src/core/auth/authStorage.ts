import { STORAGE_KEYS } from '../config/constants'
import { localStore } from '../storage/localStorage'

import type { AuthTokens, AuthUser } from './authTypes'

/** The only place tokens are read from or written to persistent storage. */
export const authStorage = {
  getTokens(): AuthTokens | null {
    const accessToken = localStore.get<string>(STORAGE_KEYS.accessToken)
    const refreshToken = localStore.get<string>(STORAGE_KEYS.refreshToken)
    if (!accessToken || !refreshToken) return null
    return { accessToken, refreshToken }
  },
  setTokens(tokens: AuthTokens): void {
    localStore.set(STORAGE_KEYS.accessToken, tokens.accessToken)
    localStore.set(STORAGE_KEYS.refreshToken, tokens.refreshToken)
  },
  getUser(): AuthUser | null {
    return localStore.get<AuthUser>(STORAGE_KEYS.user)
  },
  setUser(user: AuthUser): void {
    localStore.set(STORAGE_KEYS.user, user)
  },
  clear(): void {
    localStore.remove(STORAGE_KEYS.accessToken)
    localStore.remove(STORAGE_KEYS.refreshToken)
    localStore.remove(STORAGE_KEYS.user)
  },
}
