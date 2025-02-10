<script setup lang="ts">

</script>

<template>
  <div class="champ">
    <input type="text" placeholder="Adresse mail">
    <label for="inputEmail"><Bouton text-bouton="Commencez maintenant"/></label>
  </div>
</template>

<style scoped>
.champ{
  display: flex;
  width: 80%;
  border:1px solid black;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 10px;
  border-radius: 10px;
}
::placeholder{
  font-size: 20px;
}
input{
  font-size: 20px;
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
}
</style>