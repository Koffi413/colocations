<style scoped>
.page{
  width: 50%;
  text-align: center;
  margin: 10% auto;
}
button{
  width: 70%;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border: none;
}
input{
  width: 80%;
  border-radius: 20px;
  outline: none;
  border: 1px solid #ccc;
  padding: 15px;
}
::placeholder {
  font-size: 14px
}
label {
  padding: 20px;
  text-align: start;
}

</style>

<template>
  <div class="page">
    <h1>Page de connexion</h1>
    <form @submit.prevent="connexion">
      <label for="nom">Nom utilisateur</label>
      <input type="text" name="nom" v-model="form.username" placeholder="Tapez vôtre nom d'utilisateur"><br><br>
      <label for="password">Mot de passe</label><br>
      <input type="password" name="fpassword" v-model="form.password" placeholder="Tapez vôtre mot de passe"><br><br>
        <button type="submit">Connexion</button>
  </form>
  </div>
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
    const reponse = await $fetch("/api/connexionUtilisateurs",{method:'post',body:form.value})
    if (reponse === true){
      localStorage.setItem('username',form.value.username)
      await router.push('/compte')
    }else {
      localStorage.removeItem('username')
    }
}
</script>
