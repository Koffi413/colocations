<script setup>
import IslandRenderer from "#app/components/island-renderer.js";
import {ref, watch} from "#imports";

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
const show = ref(false)
watch(()=> profil.utilisateur, (newValue) => {
  if(newValue!==null){
    show.value = true
  }
},{deep:true})
</script>

<template>
  <div class="compte">
    <div class="bord">
    <Dashboard/>
    </div>
    <div class="content">
      <h2 v-if="show">Bonjour {{ profil.utilisateur}}</h2>
      <p>Aujord'hui est le</p>
      <ListeTaches :taches=profil.tache />
    </div>
  </div>
</template>
<style scoped>
.compte{
  background-color: #aaa;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  gap: 26%;
}
.content{
  width: 65%;
}
</style>