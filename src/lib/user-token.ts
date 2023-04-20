const key = 'token'

export function saveUserToken(value: string) {
  localStorage.setItem(key, value)
}

export function getUserToken(): false | string {
  return localStorage.getItem(key) || false
}

export function deleteUserToken() {
  localStorage.removeItem(key)
}
