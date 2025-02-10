<script setup>
import {useRoute} from "vue-router";
const router = useRoute()
const accueil = computed(() => router.path ==="/")
</script>

<template>
<header>
    <div class="logo">
      <div :class="{'test': accueil}"><NuxtLink to="/" class="nav-link">Accueil</NuxtLink></div>
      <!-- activer que si l'utilisateur est connecté <div><NuxtLink to="">Alertes</NuxtLink></div> -->
      <div><NuxtLink to="" class="nav-link">Contact</NuxtLink></div>
    </div>
    <div class="bloc-nav">
      <nav class="navbar">
        <svg  width="400" height="100%" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <text class="path" x="50" y="100" font-size="10rem" font-weight="500" font-family="'Brush Script MT',cursive" fill="white" >
            Todolist
          </text>

        </svg>
      </nav>
      <div class="end">
        <div><NuxtLink to="/connexion" class="nav-link">Se connecter</NuxtLink></div>
        <Bouton text-bouton="Créer un compte"/>
      </div>
    </div>
</header>
</template>
<style scoped>
header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  background-color:  #FF4612;
  border-radius: 10px;
}
.logo{
  width: 15%;
  padding: 20px 10px;
  display: flex;
  gap: 50px;
  align-items: center;
  height:10vh;
}
.bloc-nav{
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar{
  margin: 100px 20px;
  width: 75%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.end{
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.nav-link{
  text-decoration: none;
  color: white;
}
/*
}
.test{
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid red;
}
.path {
  stroke-dasharray: 100;
  animation: dash 20s linear infinite;
  margin-top:20px;
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
*/
svg{
  margin-top: 30px;
}
</style>