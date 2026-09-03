import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { routePaths } from '@core/config'

const Payments = lazy(() => import('./pages/Payments/Payments'))

export const paymentsRoutes: RouteObject[] = [{ path: routePaths.payments, element: <Payments /> }]
