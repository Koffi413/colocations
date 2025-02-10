<template>
    <div class="accueil">
      <Header/>
      <BodyTitre class="titre"/>
    </div>

</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>
<style scoped>
.accueil{
  padding: 0;
  display: flex;
  flex-direction: column;
}
.titre{
  margin-left: 3rem;
}
</style>
