import { defineStore } from 'pinia'

interface User {
  id?: number
  email?: string
  password?: string
  username: string
  tel?: string
  siteName?: string
}

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      user: null
    } as { user: User | null }),

  actions: {
    setUser(user: User | null) {
      this.user = user
    }
  },

  getters: {
    getUser(): User | null {
      return this.user
    }
  }
})
