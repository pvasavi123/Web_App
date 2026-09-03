import { NavLink, Outlet } from 'react-router-dom'

import { appConfig } from '@core/config'
import { initialsOf } from '@shared/utils'
import { useAppStore, useAuthStore } from '@store/index'

import { navSections } from './navigation'
import { routePaths } from '@core/config'
import './DashboardLayout.css'

export const DashboardLayout = () => {
  const user = useAuthStore((state) => state.user)
  const signOut = useAuthStore((state) => state.signOut)
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen)
  const toggleSidebar = useAppStore((state) => state.toggleSidebar)
  const toggleTheme = useAppStore((state) => state.toggleTheme)
  const theme = useAppStore((state) => state.theme)

  return (
    <div className={`shell${isSidebarOpen ? '' : ' shell--collapsed'}`}>
      <aside className="shell__sidebar">
        <NavLink className="shell__brand" to={routePaths.dashboard}>
          {appConfig.name}
        </NavLink>

        <nav className="shell__nav">
          {navSections.map((section) => (
            <div className="shell__nav-section" key={section.title}>
              <p className="shell__nav-title">{section.title}</p>
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `shell__nav-link${isActive ? ' is-active' : ''}`}
                >
                  <span className="shell__nav-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="shell__main">
        <header className="shell__header">
          <button className="shell__icon-button" type="button" onClick={toggleSidebar} aria-label="Toggle navigation">
            ☰
          </button>

          <div className="shell__header-actions">
            <button
              className="shell__icon-button"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '☾' : '☀'}
            </button>

            <div className="shell__user">
              <span className="shell__avatar" aria-hidden="true">
                {initialsOf(user?.fullName ?? 'TaxEdge User')}
              </span>
              <span className="shell__user-name">{user?.fullName ?? 'Guest'}</span>
            </div>

            <button className="shell__signout" type="button" onClick={signOut}>
              Sign out
            </button>
          </div>
        </header>

        <main className="shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
