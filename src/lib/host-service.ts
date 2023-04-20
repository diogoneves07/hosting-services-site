const key = 'host-service'

export function setHostService(value: string) {
  localStorage.setItem(key, value)
}

export function getHostServiceSelected(): false | string {
  return localStorage.getItem(key) || false
}

export function removeHostServiceSelected() {
  localStorage.removeItem(key)
}
