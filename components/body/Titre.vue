<script setup lang="ts">
</script>

<template>
  <div class="content">
    <div class="container">
      <p class="texte">Bienvenue sur votre espace de gestion de vos tâches quotidiennes</p>
      <p style="font-size: 20px">Reprenez le contrôle de vôtre emploi du temps!<br> Inscrivez-vous en quelques secondes et commencez
        <br> à organiser vos journées de manière simple et efficace.</p>
      <InputAccueil/>
    </div>
    <div class="container-anim">
      <Anim/>
    </div>
  </div>

</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
}
.container {
  width: 100%;
}
.container-anim{
  width: 50%;
}

.texte{
  width: 80%;
font-size: 40px;
}
</style>