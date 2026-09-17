

export function validateEmail(email: string): string | null {
  const normalizedEmail = email.trim()

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!normalizedEmail) {
    return 'Email is required'
  }

  if (!EMAIL_REGEX.test(normalizedEmail)) {
    return 'Invalid email address'
  }

  return null
}