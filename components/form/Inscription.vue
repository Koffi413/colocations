<script setup>
import { useWebsiteStore } from '../../stores/dataUsers.store.js'
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

<template>
  <div class="div-titre">
    <div>
      <h1 class="titre">Créer un compte</h1>
      <p class="sous-titre">Ne perdez plus jamais une tâche importante</p>
    </div>
    <div class="form-wrapper">
      <form @submit.prevent="inscription">
        <label for="nom">Nom utilisateur</label><br>
        <input type="text" name="nom" v-model="infosUtilisateur.username" placeholder="Tapez vôtre nom d'utilisateur"><br><br>
        <label for="email">Adresse email</label><br>
        <input type="email" name="email" v-model="infosUtilisateur.email" placeholder="Tapez vôtre adresse email"><br><br>
        <label for="password">Mot de passe</label><br>
        <input type="password" name="fpassword" v-model="infosUtilisateur.password" placeholder="Tapez vôtre mot de passe"><br><br>
        <div class="buttons">
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
.div-titre {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titre{
  text-align: center;
  font-size: 3rem;
  line-height: 1px;
}
.sous-titre{
  text-align: center;
  font-size: 2rem;
  color: #C5C5C5;
}
.form-wrapper{
  width: 100%;
  text-align: center;
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
.buttons{
  width: 100%;
  display: flex;
  justify-content: center;
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
</style>