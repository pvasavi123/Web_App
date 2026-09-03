import { Outlet } from 'react-router-dom'

import { appConfig } from '@core/config'

import './AuthLayout.css'

export const AuthLayout = () => (
  <div className="auth-layout">
    <section className="auth-layout__aside">
      <h1 className="auth-layout__brand">{appConfig.name}</h1>
      <p className="auth-layout__tagline">
        GST, income tax, loans and insurance for Indian businesses — filed and tracked in one place.
      </p>
      <ul className="auth-layout__points">
        <li>Track every application end to end</li>
        <li>Documents stored once, reused everywhere</li>
        <li>Deadline reminders you will not miss</li>
      </ul>
    </section>

    <main className="auth-layout__main">
      <div className="auth-layout__card">
        <Outlet />
      </div>
    </main>
  </div>
)
