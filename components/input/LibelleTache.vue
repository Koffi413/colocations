<script setup>
const props = defineProps({
  show: false,
  choix: ''
})
</script>
<template>
  <div class="in">
    <input class="champ" type="text" placeholder="Quelle tâche à faire?">
    <div v-if="props.show" class="date">{{ props.choix.value.jours }} {{ props.choix.value.mois }}</div>
  </div>
</template>
<style scoped>
.in {
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin: 0 12px 1px 5px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  background-color: #f2f2f2;
  height: 30px;
  border-radius: 5px;
  gap: 60px;
  z-index: 1;
}

.champ {
  width: 60%;
  border: none;
  outline: none;
  background-color: #f2f2f2;
}

.date {
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 20px;
  width: fit-content;
  background-color: white;
  border-radius: 40px;
  padding: 1px 5px;
  animation: enter 0.5s normal forwards;
}

@keyframes enter {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
