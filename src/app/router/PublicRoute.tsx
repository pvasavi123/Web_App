import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from '@store/index'

import { routePaths } from '@core/config'

/** Keeps signed-in users out of the login / register screens. */
export const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  return isAuthenticated ? <Navigate to={routePaths.dashboard} replace /> : <Outlet />
}
