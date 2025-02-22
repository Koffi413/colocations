<script setup>
import { ref, watch } from "#imports";

definePageMeta({
  middleware: 'auth'
})
const profil = useWebsiteStore()
const username = ref(null)
onMounted(() => {
  profil.connecte = true
  profil.utilisateur = localStorage.getItem('username')
  username.value = localStorage.getItem("username")
  const searchTaches = async () => {
    const taches = await $fetch("/api/taches", {
      method: 'POST',
      body: { username: username.value },
    })
    profil.stockeTaches(taches)
  }
  searchTaches()
})
const show = ref(false)
watch(() => profil.utilisateur, (newValue) => {
  if (newValue !== null) {
    show.value = true
  }
}, { deep: true })
const open = ref(false)

</script>

<template>
  <div class="compte">
    <div class="bord">
      <Dashboard />
    </div>
    <div class="content" id="content">
      <h2 v-if="show">Bonjour {{ profil.utilisateur }}</h2>
      <p>Aujord'hui est le</p>
      <ListeTaches :taches=profil.tache />
      <BouttonsCreation class="btn" @click="[open ? open = false : open = true]" />
      <client-only>
        <Teleport to="#content">
          <FormTaches v-if="open" class="modal" />
        </Teleport>
      </client-only>
    </div>
  </div>
</template>
<style scoped>
.compte {
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  gap: 26%;
}

.content {
  position: relative;
  width: 65%;
  height: 100%;
  z-index: 0;
}

.btn {
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 45%;
}

.modal {
  position: absolute;
  z-index: 2;
  bottom: 60px;
  left: 0;
  width: 45%;
}
</style>