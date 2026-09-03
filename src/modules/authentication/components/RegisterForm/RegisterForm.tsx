import { Button, Input } from '@shared/components'
import { useZodForm } from '@shared/hooks'

import { registerSchema } from '../../validation/authSchema'
import type { RegisterInput } from '../../validation/authSchema'
import './RegisterForm.css'

export interface RegisterFormProps {
  onSubmit: (values: RegisterInput) => Promise<void>
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useZodForm(
    registerSchema,
    { fullName: '', email: '', mobile: '', password: '' },
    onSubmit,
  )

  return (
    <form className="register-form" onSubmit={form.handleSubmit} noValidate>
      <Input
        name="fullName"
        label="Full name"
        autoComplete="name"
        placeholder="As per your PAN"
        value={form.values.fullName}
        error={form.errors.fullName}
        onChange={form.handleChange}
        required
      />

      <Input
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        placeholder="you@company.com"
        value={form.values.email}
        error={form.errors.email}
        onChange={form.handleChange}
        required
      />

      <Input
        name="mobile"
        label="Mobile number"
        inputMode="numeric"
        maxLength={10}
        prefix="+91"
        placeholder="9876543210"
        value={form.values.mobile}
        error={form.errors.mobile}
        onChange={form.handleChange}
        required
      />

      <Input
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        hint="At least 8 characters, with a number and a capital letter"
        value={form.values.password}
        error={form.errors.password}
        onChange={form.handleChange}
        required
      />

      {form.errors.form && <p className="register-form__error">{form.errors.form}</p>}

      <Button type="submit" fullWidth size="lg" isLoading={form.isSubmitting}>
        Create account
      </Button>
    </form>
  )
}
