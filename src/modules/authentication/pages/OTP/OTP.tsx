import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Button, Input } from '@shared/components'
import { maskMobile } from '@shared/utils'

import { OTPInput } from '../../components/OTPInput/OTPInput'
import { useAuth } from '../../hooks/useAuth'
import { useOtpTimer } from '../../hooks/useOtpTimer'
import { authFlowService } from '../../services/authFlowService'
import { otpSchema } from '../../validation/authSchema'
import './OTP.css'

interface OtpLocationState {
  mobile?: string
}

export const OTP = () => {
  const location = useLocation()
  const { verifyOtp } = useAuth()
  const { remaining, canResend, restart } = useOtpTimer()

  const [mobile, setMobile] = useState((location.state as OtpLocationState | null)?.mobile ?? '')
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerify = async () => {
    const parsed = otpSchema.safeParse({ mobile, otp: code })
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Check the details and try again')
      return
    }

    setError(null)
    setIsSubmitting(true)
    try {
      await verifyOtp(parsed.data)
    } catch (verifyError) {
      setError(verifyError instanceof Error ? verifyError.message : 'Verification failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResend = async () => {
    await authFlowService.sendOtp(mobile)
    restart()
  }

  return (
    <div className="otp-page">
      <header className="otp-page__header">
        <h1 className="otp-page__title">Verify your number</h1>
        <p className="otp-page__subtitle">
          {mobile ? `We sent a 6-digit code to ${maskMobile(mobile)}.` : 'Enter your mobile number to get a code.'}
        </p>
      </header>

      {!location.state && (
        <Input
          name="mobile"
          label="Mobile number"
          inputMode="numeric"
          maxLength={10}
          prefix="+91"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
        />
      )}

      <OTPInput value={code} onChange={setCode} error={error ?? undefined} />

      <Button fullWidth size="lg" isLoading={isSubmitting} onClick={handleVerify}>
        Verify and continue
      </Button>

      <button className="otp-page__resend" type="button" disabled={!canResend} onClick={handleResend}>
        {canResend ? 'Resend code' : `Resend code in ${remaining}s`}
      </button>
    </div>
  )
}

export default OTP
