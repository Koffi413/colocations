<script setup>

</script>

<template>
<header>
    <div class="logo">
      <div><NuxtLink to="">Accueil</NuxtLink></div>
      <!-- activer que si l'utilisateur est connecté <div><NuxtLink to="">Alertes</NuxtLink></div> -->
      <div><NuxtLink to="">Contact</NuxtLink></div>
    </div>
    <div class="bloc-nav">
      <nav class="navbar">
        Mes Tâches à faire
      </nav>
      <div class="end">
        <div><NuxtLink to="/connexion">Se connecter</NuxtLink></div>
        <Botton/>
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
/*  border: 2px solid red;
*/
}
.logo{
  width: 15%;
  padding: 20px 10px;
  border: 1px solid black;
  display: flex;
  gap: 50px;
}
.bloc-nav{
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
}
.navbar{
  margin: 20px;
  width: 75%;
  display: flex;
  justify-content: center;
}
.end{
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

</style>