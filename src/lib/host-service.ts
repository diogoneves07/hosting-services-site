const key1 = 'host-service'
const key2 = 'host-service-title'

export function setHostService(value: string, title: string) {
  localStorage.setItem(key1, value)
  localStorage.setItem(key2, title)
}

export function getHostServiceSelected() {
  return {
    price: localStorage.getItem(key1) || '',
    title: localStorage.getItem(key2) || ''
  }
}

export function removeHostServiceSelected() {
  localStorage.removeItem(key1)
  localStorage.removeItem(key2)
}
