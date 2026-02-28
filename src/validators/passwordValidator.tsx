export const validatePassword = (password: string): boolean => {
  if (!password) return false

  if (password.trim().length < 6) {
    return false
  }

  return true
}