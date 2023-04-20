export function saveUserToken(value: string) {
  localStorage.setItem('token', value)
}

export function getUserToken(): false | string {
  return localStorage.getItem('token') || false
}

export function deleteUserToken() {
  localStorage.removeItem('token')
}
