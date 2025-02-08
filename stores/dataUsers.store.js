// stores/dataStore.js
import { defineStore } from 'pinia';
export const useWebsiteStore = defineStore('profil', {
  state: () => ({
    utilisateur: {},
    tache:[],
    connecte: false
  }),
  actions: {
    stockeInfos(val) {
      this.utilisateur = val
    },
    stockeTaches(val) {
      this.tache = val
    }
  }
})