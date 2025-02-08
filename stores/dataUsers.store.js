// stores/dataStore.js
import { defineStore } from 'pinia';
export const useWebsiteStore = defineStore('identite', {
  state: () => ({
    utilisateur: {},
    connecte: false
  }),
  actions: {
    /**
     * 
     * @param {Utilisateurs} val
     */
    stockeInfos(val) {
      this.utilisateur = val
    },
    
  }
})