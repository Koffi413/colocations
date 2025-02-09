<script setup>
definePageMeta({
  middleware: 'auth'
})
const profil = useWebsiteStore()
const username = ref(null)
onMounted(() => {
    profil.connecte=true
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
  <div v-else>Vous n'avez pas encore de taches</div>
  <div v-for="taches in profil.stockeTaches" :key="taches.id">{{taches.libele}}</div>

</template>

<style scoped>

</style>