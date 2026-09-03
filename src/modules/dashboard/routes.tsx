import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { routePaths } from '@core/config'

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))

export const dashboardRoutes: RouteObject[] = [{ path: routePaths.dashboard, element: <Dashboard /> }]
