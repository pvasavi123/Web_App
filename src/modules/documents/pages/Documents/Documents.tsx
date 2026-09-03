import { Badge, Card, EmptyState, Loader } from '@shared/components'
import { STATUS_LABELS, STATUS_TONES } from '@shared/constants'
import { formatDate } from '@shared/utils'

import { useDocuments } from '../../hooks/useDocuments'
import './Documents.css'

export const Documents = () => {
  const { data, isLoading, error } = useDocuments()

  return (
    <div className="documents-page">
      <header className="documents-page__header">
        <h1 className="documents-page__title">Documents</h1>
        <p className="documents-page__subtitle">Upload once, reuse across every filing.</p>
      </header>

      {isLoading && <Loader label="Loading Documents" />}
      {error && <EmptyState title="Could not load Documents" description={error} />}

      {!isLoading && !error && (
        <Card title="Documents" subtitle="Wire this module up to the real API in services/documentsService.ts">
          <ul className="documents-page__list">
            {(data ?? []).map((item) => (
              <li className="documents-page__row" key={item.id}>
                <div>
                  <p className="documents-page__row-title">{item.title}</p>
                  <p className="documents-page__row-meta">
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

export default Documents
