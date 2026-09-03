import { useNavigate } from 'react-router-dom'

import { routePaths } from '@core/config'
import { Button, Input } from '@shared/components'
import { useZodForm } from '@shared/hooks'

import { authFlowService } from '../../services/authFlowService'
import { passcodeSchema } from '../../validation/authSchema'
import './Passcode.css'

export const Passcode = () => {
  const navigate = useNavigate()

  const form = useZodForm(passcodeSchema, { passcode: '' }, async (values) => {
    await authFlowService.setPasscode(values.passcode)
    navigate(routePaths.dashboard, { replace: true })
  })

  return (
    <form className="passcode-page" onSubmit={form.handleSubmit} noValidate>
      <header className="passcode-page__header">
        <h1 className="passcode-page__title">Set a passcode</h1>
        <p className="passcode-page__subtitle">A 4-digit code to unlock TaxEdge quickly next time.</p>
      </header>

      <Input
        name="passcode"
        label="4-digit passcode"
        inputMode="numeric"
        maxLength={4}
        type="password"
        value={form.values.passcode}
        error={form.errors.passcode}
        onChange={form.handleChange}
        required
      />

      {form.errors.form && <p className="passcode-page__error">{form.errors.form}</p>}

      <Button type="submit" fullWidth size="lg" isLoading={form.isSubmitting}>
        Save passcode
      </Button>
    </form>
  )
}

export default Passcode
