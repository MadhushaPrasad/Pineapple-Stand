import { defineStore } from 'pinia';
import products from '@/data/products.json';

export const useProductsStore = defineStore('ProductStore', {
  state: () => {
    return {
      product: [],
    };
  },

  actions: {
    async fill() {
      this.product = products;
      console.log(products);
    },
  },

  mutations: {},
});
