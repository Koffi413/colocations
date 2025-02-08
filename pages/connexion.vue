<template>
  <form @submit.prevent="connexion">
    <input type="text" v-model="form.username" placeholder="username"><br><br>
    <input type="password" v-model="form.password" placeholder="password"><br><br>
    <button type="submit">Connexion</button>
  </form>
</template>
<script setup>
import { useRouter } from 'vue-router'

const form = ref({
  username: '',
  password: '',
})
const data = useWebsiteStore()
const router = useRouter();
async function connexion() {
    const reponse = await $fetch("/api/connexion",{method:'POST',body:form.value})
    if (reponse === true){
      data.utilisateur = form.value.username
      localStorage.setItem('username',form.value.username)
      await router.push('/compte')
    }else {
      localStorage.removeItem('username')
    }
}
</script>
