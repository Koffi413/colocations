<template>
    <form @submit.prevent="inscription">
        <input type="text" id="fnom" v-model="infosUtilisateur.username" placeholder="username"><br><br>
        <input type="email" id="femail" v-model="infosUtilisateur.email" placeholder="email"><br><br>
        <input type="password" id="fpassword" v-model="infosUtilisateur.password" placeholder="password"><br><br>
        <button type="submit">S'inscrire</button>
    </form>
</template>
<script setup>
import { useWebsiteStore } from '../stores/dataUsers.store.js'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'


const infosUtilisateur = reactive({
username: '',
email: '',
password: '',
})
const dataUser = useWebsiteStore()
const router = useRouter()

async function inscription() {
    const response = await $fetch("/api/inscription",{
      method: 'POST',
      body: infosUtilisateur
    })
    if (response) {
      localStorage.setItem("username",infosUtilisateur.username)
      dataUser.utilisateur = infosUtilisateur.username
      dataUser.connecte = true
      await router.push("/compte")
    }else {
      localStorage.removeItem("username")
    }
}
</script>