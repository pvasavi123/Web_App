import { useEffect } from 'react'
import type { ReactNode } from 'react'

import { useAuthStore } from '@store/index'

/**
 * Restores the persisted session once on start-up so guards can stop
 * flashing the login screen for an already signed-in user.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const bootstrap = useAuthStore((state) => state.bootstrap)

  useEffect(() => {
    bootstrap()
  }, [bootstrap])

  return <>{children}</>
}
