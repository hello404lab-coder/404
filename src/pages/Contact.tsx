import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../data/siteContent'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const CONTACT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwPtZTEVxLWcSudrAwioqnHPC_IkAao-a0UrvvYPAL8MiB7Zd1JH9mJVFCR0b9iNSEnLw/exec'

type FormValues = {
  name: string
  email: string
  company: string
  message: string
}

const INITIAL_FORM: FormValues = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export function Contact() {
  const prefersReducedMotion = useReducedMotion()
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const { contact, company } = siteContent

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(null)

    const trimmedName = formValues.name.trim()
    const trimmedEmail = formValues.email.trim()
    const trimmedMessage = formValues.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: 'error', message: contact.requiredError })
      return
    }

    setIsSubmitting(true)

    try {
      const payload = new URLSearchParams({
        fullName: trimmedName,
        email: trimmedEmail,
        companyName: formValues.company.trim(),
        projectDescription: trimmedMessage,
      })

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
      })

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }

      setFormValues(INITIAL_FORM)
      setStatus({ type: 'success', message: contact.successMessage })
    } catch {
      setStatus({ type: 'error', message: contact.errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-svh overflow-hidden pt-[118px] px-[70px] pb-20 max-[1180px]:pt-[104px] max-[1180px]:px-7 max-[720px]:pt-[92px] max-[720px]:px-[18px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(42,8,61,0.86) 0%, rgba(18,2,29,0.98) 18%, rgba(8,2,13,0.99) 47%, rgba(8,2,13,1) 100%)',
        }}
      />
      <div
        className="absolute pointer-events-none left-[-120px] top-[140px] w-[420px] h-[520px] blur-[20px]"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(255,160,96,0.2) 0%, rgba(175,60,20,0.14) 44%, transparent 80%)',
        }}
      />
      <div
        className="absolute pointer-events-none right-[-120px] top-[140px] w-[420px] h-[520px] blur-[20px]"
        style={{
          background:
            'radial-gradient(circle at 70% 40%, rgba(170,90,255,0.22) 0%, rgba(90,28,180,0.14) 44%, transparent 80%)',
        }}
      />

      <main className="relative z-10">
        <motion.div
          className="max-w-[720px] mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(168,85,247,0.15)',
              border: '1px solid rgba(168,85,247,0.45)',
              boxShadow: '0 0 20px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <span className="text-[0.82rem] font-medium text-[rgba(220,200,255,0.9)] tracking-[-0.01em]">
              {contact.badge}
            </span>
          </div>
          <h1 className="text-[2.8rem] max-[720px]:text-[2.1rem] font-semibold tracking-[-0.04em] text-[rgba(244,240,252,0.96)] leading-tight mb-3">
            {contact.headingPrefix}
            <br />
            <span className="text-[rgba(168,85,247,0.9)]">{contact.headingHighlight}</span>
          </h1>
          <p className="text-[1.02rem] font-normal text-[rgba(178,168,196,0.7)] leading-relaxed max-w-[620px]">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 max-[980px]:grid-cols-1 gap-5 items-stretch">
          <motion.section
            className="rounded-[28px] p-7 max-[720px]:p-5"
            style={{
              border: '1px solid rgba(148,78,255,0.38)',
              background:
                'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.24) 0%, transparent 40%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
              boxShadow:
                'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.18), 0 20px 48px rgba(0,0,0,0.44)',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
          >
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[rgba(244,240,252,0.95)] mb-4">
              {contact.infoTitle}
            </h2>
            <p className="text-[0.92rem] text-[rgba(178,168,196,0.68)] leading-relaxed mb-8">
              {contact.infoSubtitle}
            </p>
            <div className="space-y-4">
              <InfoRow label="Email" value={company.email} />
              <InfoRow label="Phone" value={company.phone} />
              <InfoRow label="Location" value={company.location} />
            </div>
          </motion.section>

          <motion.section
            className="rounded-[28px] p-7 max-[720px]:p-5"
            style={{
              border: '1.5px solid transparent',
              background:
                'linear-gradient(180deg, rgba(12,6,20,0.99), rgba(4,2,9,1)) padding-box, linear-gradient(130deg, rgba(105,45,240,0.95) 0%, rgba(75,25,195,0.55) 34%, rgba(185,82,18,0.68) 66%, rgba(255,142,45,0.94) 100%) border-box',
              boxShadow:
                'inset 0 1px 1px rgba(255,255,255,0.07), -8px -4px 22px rgba(110,45,255,0.22), 8px 5px 22px rgba(255,118,30,0.2), 0 0 32px rgba(150,55,255,0.12)',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
          >
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[rgba(244,240,252,0.95)] mb-5">
              {contact.formTitle}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Name"
                name="name"
                type="text"
                required
                value={formValues.name}
                onChange={(value) => setFormValues((prev) => ({ ...prev, name: value }))}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                required
                value={formValues.email}
                onChange={(value) => setFormValues((prev) => ({ ...prev, email: value }))}
              />
              <InputField
                label="Company (Optional)"
                name="company"
                type="text"
                value={formValues.company}
                onChange={(value) => setFormValues((prev) => ({ ...prev, company: value }))}
              />
              <label className="block">
                <span className="text-[0.82rem] text-[rgba(210,196,232,0.86)]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formValues.message}
                  onChange={(event) =>
                    setFormValues((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[rgba(245,241,251,0.95)] text-[0.92rem] placeholder:text-[rgba(170,155,196,0.65)] outline-none focus:border-[rgba(190,145,255,0.6)] focus:shadow-[0_0_0_3px_rgba(140,50,255,0.2)]"
                  placeholder={contact.messagePlaceholder}
                />
              </label>

              {status ? (
                <p
                  className={[
                    'text-[0.84rem]',
                    status.type === 'success'
                      ? 'text-[rgba(158,255,190,0.92)]'
                      : 'text-[rgba(255,170,170,0.92)]',
                  ].join(' ')}
                >
                  {status.message}
                </p>
              ) : null}

              <motion.button
                type="submit"
                className="w-full h-[50px] rounded-full text-[#f2eaff] text-[0.95rem] font-medium tracking-[-0.03em] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  border: '1.5px solid transparent',
                  background:
                    'linear-gradient(180deg, rgba(8,4,16,0.99), rgba(2,1,5,1)) padding-box, linear-gradient(145deg, rgba(200,90,255,0.92) 0%, rgba(230,100,255,0.96) 42%, rgba(200,78,255,0.92) 68%, rgba(150,45,245,0.88) 100%) border-box',
                  boxShadow:
                    'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px rgba(220,85,255,0.45), 0 0 40px rgba(195,60,255,0.25)',
                }}
                disabled={isSubmitting}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.01,
                        boxShadow:
                          'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 28px rgba(220,85,255,0.65), 0 0 54px rgba(195,60,255,0.35)',
                      }
                }
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? contact.submitLoading : contact.submitIdle}
              </motion.button>
            </form>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      <p className="text-[0.78rem] text-[rgba(170,155,196,0.75)] mb-1">{label}</p>
      <p className="text-[0.95rem] text-[rgba(244,240,252,0.92)]">{value}</p>
    </div>
  )
}

function InputField({
  label,
  name,
  type,
  required,
  value,
  onChange,
}: {
  label: string
  name: string
  type: 'text' | 'email'
  required?: boolean
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block">
      <span className="text-[0.82rem] text-[rgba(210,196,232,0.86)]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-[46px] w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] px-4 text-[rgba(245,241,251,0.95)] text-[0.92rem] placeholder:text-[rgba(170,155,196,0.65)] outline-none focus:border-[rgba(190,145,255,0.6)] focus:shadow-[0_0_0_3px_rgba(140,50,255,0.2)]"
      />
    </label>
  )
}
