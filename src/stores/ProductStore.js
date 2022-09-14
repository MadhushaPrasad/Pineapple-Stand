import { defineStore } from 'pinia';

export const useProductsStore = defineStore('ProductStore', {
  state: () => {
    return {
      product: [],
    };
  },

  actions: {
    async fill() {
      this.product = await import('@/data/products.json').default;
    },
  },

  mutations: {},
});
