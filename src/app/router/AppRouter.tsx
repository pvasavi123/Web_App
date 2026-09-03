import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Loader } from '@shared/components'

import { routeConfig } from './routeConfig'

const router = createBrowserRouter(routeConfig)

export const AppRouter = () => (
  <Suspense fallback={<Loader fullPage />}>
    <RouterProvider router={router} />
  </Suspense>
)
