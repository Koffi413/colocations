<script setup>

</script>

<template>
<header>
    <div class="logo">Mes Tâches à faire</div>
    <div class="bloc-nav">
      <nav class="navbar">
        <div><NuxtLink to="">Accueil</NuxtLink></div>
        <div><NuxtLink to="">Alertes</NuxtLink></div>
        <div><NuxtLink to="">Contact</NuxtLink></div>
      </nav>
      <div class="photo">username</div>
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
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 50px;
}
.photo{
  padding: 5px;
}
</style>