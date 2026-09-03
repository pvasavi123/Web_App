import { Badge, Card, EmptyState, Loader } from '@shared/components'
import { STATUS_LABELS, STATUS_TONES } from '@shared/constants'
import { formatDate } from '@shared/utils'

import { useSupport } from '../../hooks/useSupport'
import './Support.css'

export const Support = () => {
  const { data, isLoading, error } = useSupport()

  return (
    <div className="support-page">
      <header className="support-page__header">
        <h1 className="support-page__title">Support</h1>
        <p className="support-page__subtitle">Tickets, FAQs and help articles.</p>
      </header>

      {isLoading && <Loader label="Loading Support" />}
      {error && <EmptyState title="Could not load Support" description={error} />}

      {!isLoading && !error && (
        <Card title="Support" subtitle="Wire this module up to the real API in services/supportService.ts">
          <ul className="support-page__list">
            {(data ?? []).map((item) => (
              <li className="support-page__row" key={item.id}>
                <div>
                  <p className="support-page__row-title">{item.title}</p>
                  <p className="support-page__row-meta">
                    {item.reference} · {formatDate(item.updatedAt)}
                  </p>
                </div>
                <Badge tone={STATUS_TONES[item.status]}>{STATUS_LABELS[item.status]}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}

export default Support
