<script setup>
const profil = useWebsiteStore()
profil.connecte=true
const username = profil.utilisateur.username
</script>

<template>
  <h1 v-if="username">Bienvenue {{ username }}</h1>
  <div>Vous avez aucune tache</div>
</template>

<style scoped>

</style>