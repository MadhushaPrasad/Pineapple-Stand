import { defineStore } from 'pinia';
import product from '@/data/products.json';

export const useProductsStore = defineStore('ProductStore', {
  state: () => {
    return {
      product,
    };
  },

  actions: {},

  mutations: {},
});
