import { useNavigate } from 'react-router-dom'

import { routePaths } from '@core/config'
import { Card } from '@shared/components'
import { useAppStore } from '@store/index'

import { GSTForm } from '../../components/GSTForm/GSTForm'
import { gstService } from '../../services/gstService'
import type { GstRegistrationOutput } from '../../validation/gstSchema'
import './GSTRegistration.css'

export const GSTRegistration = () => {
  const navigate = useNavigate()
  const pushToast = useAppStore((state) => state.pushToast)

  const handleSubmit = async (values: GstRegistrationOutput) => {
    const application = await gstService.register(values)
    pushToast(`Application ${application.reference} submitted`, 'success')
    navigate(routePaths.gst.detail(application.id))
  }

  return (
    <div className="gst-registration">
      <header className="gst-registration__header">
        <h1 className="gst-registration__title">New GST registration</h1>
        <p className="gst-registration__subtitle">
          Takes about three minutes. We will ask for documents after this step.
        </p>
      </header>

      <Card>
        <GSTForm onSubmit={handleSubmit} />
      </Card>
    </div>
  )
}

export default GSTRegistration
