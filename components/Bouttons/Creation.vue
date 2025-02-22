<script setup>
import {ref, onMounted} from '#imports'
const clique = ref(false)
onMounted(() => {
  clique.value =undefined
})
</script>

<template>
  <button @click="[clique? clique=false: clique=true]"><div :id="[clique===false?'retour': '']" :class="[clique?'anim': 'im']"><img src="~/assets/images/add.svg" alt="add"> </div> Nouvelle tache</button>
</template>

<style scoped>
button{
  display: flex;
  align-items: center;
  text-align: start;
  color: white;
  height: 40px;
  padding-left: 60px;
  border-radius: 20px;
  background-color: #000;
  border: none;
  font-size: 17px;
  cursor: pointer;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  gap:5px;
}
.im{
  height: 20px;
}
.anim{
  height: 20px;
  animation: rotation 0.5s normal forwards;
}
@keyframes rotation {
  0% {rotate:180deg;}
  50% {rotate: 133deg;}
  100% {rotate:135deg;}
}
#retour{
  height: 20px;
  animation: rotation-retour 0.5s normal forwards;
}
@keyframes rotation-retour {
  0% {rotate:135deg;}
  50% {rotate: 133deg;}
  100% {rotate:180deg;}
}
img{
  height: 100%;
}
</style>