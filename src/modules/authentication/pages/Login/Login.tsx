import { Link } from 'react-router-dom'

import { routePaths } from '@core/config'

import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useAuth } from '../../hooks/useAuth'
import './Login.css'

export const Login = () => {
  const { login } = useAuth()

  return (
    <div className="login-page">
      <header className="login-page__header">
        <h1 className="login-page__title">Welcome back</h1>
        <p className="login-page__subtitle">Sign in to manage your filings and applications.</p>
      </header>

      <LoginForm onSubmit={login} />

      <p className="login-page__footer">
        New to TaxEdge? <Link to={routePaths.auth.register}>Create an account</Link>
      </p>
    </div>
  )
}

export default Login
