import { defineStore } from 'pinia'
import { Orders } from '@/models/Orders'
import { Card } from '~~/models/Card'
import { $fetch } from 'ohmyfetch'

export const useDashboard = defineStore('dashboard', {
  state: () => ({
    orders: [] as Orders[],
    order: {} as Orders,
    card: [] as Card[]
  }),
  actions: {
    async fetchOrders() {
      this.orders = await $fetch('http://127.0.0.1:3333/api/orders/', {
        method: 'get'
      })
    },

    async fetchCard() {
      this.card = await $fetch('http://127.0.0.1:3333/api/cards/', {
        method: 'get'
      })
    }
  }
})
