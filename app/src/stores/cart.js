import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  actions: {
    addToCart(product) {
      const existing = this.cart.find(p => p.name === product.name)

      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },

    increaseQuantity(name) {
      const item = this.cart.find(p => p.name === name)
      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(name) {
      const item = this.cart.find(p => p.name === name)

      if (!item) return

      item.quantity--

      if (item.quantity <= 0) {
        this.cart = this.cart.filter(p => p.name !== name)
      }
    }
    
  },

  getters: {
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
})