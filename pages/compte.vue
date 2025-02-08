<script setup>
const profil = useWebsiteStore()
profil.connecte=true
const username = ref(null)
onMounted(() => {
    profil.utilisateur = localStorage.getItem('username')
    username.value = localStorage.getItem("username")
    const searchTaches = async () => {
        const taches = await $fetch("/api/taches",{
          method: 'POST',
          body: {username: username.value},
        })
      profil.stockeTaches(taches)
    }
    searchTaches()
})

</script>

<template>
  <h1 v-if="username">Bienvenue {{ username }}</h1>
  <div v-if="profil.tache">{{profil.tache[0]}}</div>
  <div v-else>Vous n'avez pas encore de taches</div>
  <div>{{profil}}</div>
</template>

<style scoped>

</style>