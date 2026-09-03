import { Link } from 'react-router-dom'

import { routePaths } from '@core/config'
import { Button, EmptyState, Input, Loader } from '@shared/components'
import { STATUS_LABELS } from '@shared/constants'
import { APPLICATION_STATUSES } from '@shared/types'
import type { ApplicationStatus } from '@shared/types'


import { GSTCard } from '../../components/GSTCard/GSTCard'
import { useGstApplications } from '../../hooks/useGstApplications'
import './GSTDashboard.css'

export const GSTDashboard = () => {
  const { data, isLoading, error, search, setSearch, status, setStatus } = useGstApplications()

  return (
    <div className="gst-dashboard">
      <header className="gst-dashboard__header">
        <div>
          <h1 className="gst-dashboard__title">GST</h1>
          <p className="gst-dashboard__subtitle">Registrations and returns in one place.</p>
        </div>
        <div className="gst-dashboard__actions">
          <Link to={routePaths.gst.returns}>
            <Button variant="secondary">File a return</Button>
          </Link>
          <Link to={routePaths.gst.registration}>
            <Button>New registration</Button>
          </Link>
        </div>
      </header>

      <div className="gst-dashboard__filters">
        <Input
          name="search"
          placeholder="Search by name, reference or GSTIN"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="field">
          <div className="field__control">
            <select
              className="field__input"
              aria-label="Filter by status"
              value={status}
              onChange={(event) => setStatus(event.target.value as ApplicationStatus | 'all')}
            >
              <option value="all">All statuses</option>
              {APPLICATION_STATUSES.map((value) => (
                <option key={value} value={value}>
                  {STATUS_LABELS[value]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {isLoading && <Loader label="Loading GST applications" />}
      {error && <EmptyState title="Could not load applications" description={error} />}

      {!isLoading && !error && data && data.length === 0 && (
        <EmptyState
          title="No GST applications yet"
          description="Start a registration and we will take it from there."
          icon={<span>%</span>}
          action={
            <Link to={routePaths.gst.registration}>
              <Button>Start a registration</Button>
            </Link>
          }
        />
      )}

      {!isLoading && data && data.length > 0 && (
        <div className="gst-dashboard__grid">
          {data.map((application) => (
            <GSTCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </div>
  )
}

export default GSTDashboard
