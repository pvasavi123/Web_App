import { Link, useNavigate } from 'react-router-dom'

import { routePaths } from '@core/config'

import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import { authFlowService } from '../../services/authFlowService'
import type { RegisterInput } from '../../validation/authSchema'
import './Register.css'

export const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values: RegisterInput) => {
    const { mobile } = await authFlowService.register(values)
    await authFlowService.sendOtp(mobile)
    navigate(routePaths.auth.otp, { state: { mobile } })
  }

  return (
    <div className="register-page">
      <header className="register-page__header">
        <h1 className="register-page__title">Create your account</h1>
        <p className="register-page__subtitle">One account for GST, ITR, loans and insurance.</p>
      </header>

      <RegisterForm onSubmit={handleSubmit} />

      <p className="register-page__footer">
        Already registered? <Link to={routePaths.auth.login}>Sign in</Link>
      </p>
    </div>
  )
}

export default Register
