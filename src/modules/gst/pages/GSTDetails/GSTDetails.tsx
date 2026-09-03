import { Link, useParams } from 'react-router-dom'

import { routePaths } from '@core/config'
import { Button, Card, EmptyState, Loader } from '@shared/components'
import { formatDate, titleCase } from '@shared/utils'

import { GSTStatus } from '../../components/GSTStatus/GSTStatus'
import { GSTTimeline } from '../../components/GSTTimeline/GSTTimeline'
import { useGstApplication } from '../../hooks/useGstApplication'
import './GSTDetails.css'

export const GSTDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGstApplication(id)

  if (isLoading) return <Loader label="Loading application" />
  if (error || !data) {
    return (
      <EmptyState
        title="Application not found"
        description={error ?? undefined}
        action={
          <Link to={routePaths.gst.root}>
            <Button variant="secondary">Back to GST</Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="gst-details">
      <nav className="gst-details__breadcrumb">
        <Link to={routePaths.gst.root}>GST</Link>
        <span aria-hidden="true"> / </span>
        <span>{data.reference}</span>
      </nav>

      <header className="gst-details__header">
        <div>
          <h1 className="gst-details__title">{data.legalName}</h1>
          <p className="gst-details__subtitle">
            {data.tradeName ? `${data.tradeName} · ` : ''}
            {titleCase(data.businessType)} · {data.state}
          </p>
        </div>
        <GSTStatus status={data.status} />
      </header>

      <div className="gst-details__columns">
        <Card title="Application details">
          <dl className="gst-details__facts">
            <div>
              <dt>Reference</dt>
              <dd>{data.reference}</dd>
            </div>
            <div>
              <dt>PAN</dt>
              <dd>{data.pan}</dd>
            </div>
            <div>
              <dt>GSTIN</dt>
              <dd>{data.gstin ?? 'Not issued yet'}</dd>
            </div>
            <div>
              <dt>Submitted</dt>
              <dd>{formatDate(data.createdAt)}</dd>
            </div>
            <div>
              <dt>Last update</dt>
              <dd>{formatDate(data.updatedAt)}</dd>
            </div>
          </dl>
        </Card>

        <Card title="Progress">
          <GSTTimeline events={data.timeline} />
        </Card>
      </div>
    </div>
  )
}

export default GSTDetails
