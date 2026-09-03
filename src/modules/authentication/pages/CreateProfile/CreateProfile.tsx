import { useNavigate } from 'react-router-dom'

import { routePaths } from '@core/config'
import { Button, Input } from '@shared/components'
import { INDIAN_STATES } from '@shared/constants'
import { useZodForm } from '@shared/hooks'

import { useAuth } from '../../hooks/useAuth'
import { authFlowService } from '../../services/authFlowService'
import { createProfileSchema } from '../../validation/authSchema'
import './CreateProfile.css'

export const CreateProfile = () => {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const form = useZodForm(
    createProfileSchema,
    { pan: '', addressLine: '', city: '', state: '', pincode: '' },
    async (values) => {
      const user = await authFlowService.createProfile(values)
      setUser(user)
      navigate(routePaths.dashboard, { replace: true })
    },
  )

  return (
    <form className="create-profile" onSubmit={form.handleSubmit} noValidate>
      <header className="create-profile__header">
        <h1 className="create-profile__title">Complete your profile</h1>
        <p className="create-profile__subtitle">We need these details to file on your behalf.</p>
      </header>

      <Input
        name="pan"
        label="PAN"
        maxLength={10}
        placeholder="ABCDE1234F"
        value={form.values.pan}
        error={form.errors.pan}
        onChange={form.handleChange}
        required
      />

      <Input
        name="addressLine"
        label="Address"
        placeholder="Building, street, area"
        value={form.values.addressLine}
        error={form.errors.addressLine}
        onChange={form.handleChange}
        required
      />

      <div className="create-profile__row">
        <Input
          name="city"
          label="City"
          value={form.values.city}
          error={form.errors.city}
          onChange={form.handleChange}
          required
        />

        <div className="field">
          <label className="field__label" htmlFor="state">
            State
          </label>
          <div className="field__control">
            <select
              id="state"
              name="state"
              className="field__input"
              value={form.values.state}
              onChange={form.handleChange}
              required
            >
              <option value="">Select</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {form.errors.state && <p className="field__error">{form.errors.state}</p>}
        </div>
      </div>

      <Input
        name="pincode"
        label="PIN code"
        inputMode="numeric"
        maxLength={6}
        value={form.values.pincode}
        error={form.errors.pincode}
        onChange={form.handleChange}
        required
      />

      {form.errors.form && <p className="create-profile__error">{form.errors.form}</p>}

      <Button type="submit" fullWidth size="lg" isLoading={form.isSubmitting}>
        Save and continue
      </Button>
    </form>
  )
}

export default CreateProfile
