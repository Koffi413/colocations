<template>
    <form @submit.prevent="inscription">
        <input type="text" id="fnom" v-model="credentials.username" placeholder="username"><br><br>
        <input type="email" id="femail" v-model="credentials.email" placeholder="email"><br><br>
        <input type="password" id="fpassword" v-model="credentials.password" placeholder="password"><br><br>
        <button type="submit">S'inscrire</button>
    </form>
</template>
<script setup>
import { reactive } from 'vue'
const infosUtilisateur = reactive({
username: '',
email: '',
password: '',
})

</script>