<script setup >
defineProps({
  textBouton: String
})
</script>

<template>
  <NuxtLink to="/inscription" class="nouveauCompte"><div>{{textBouton}}</div></NuxtLink>
</template>

<style scoped>
div{
  padding: 10px;
  display: inline-block;
  background-color: black;
  border-radius: 10px;
  width: fit-content;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
div:hover{
  background-color: rgba(0, 0, 0, 0.93);
}
.nouveauCompte{
  text-decoration: none;
  color: white;
  text-wrap: nowrap;
}
</style>