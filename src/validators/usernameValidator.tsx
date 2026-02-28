export const validateUsername = (username: string): boolean => {
  if(username.trim().length <=0) return false 
  return true
}