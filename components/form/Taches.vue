<script setup>
import { ref } from '#imports';
const date = ref(new Date());

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid',
    },
    dates: new Date(),
  },
]);
</script>

<template>
  <div class="form">
    <label for="">
      <input type="checkbox">
      <input type="text" placeholder="créer une tache"/>
    </label><br>
    <client-only>
      <VDatePicker v-model="date" :attributes="attrs" />
    </client-only>
    <div class="buttons">
      <button>définir l'heure</button>
      <button>sauvegarder</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  position: absolute;
  margin: 100px 300px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #ccc;
  width: fit-content;
  padding: 10px;
  display: block;
  text-align: center;
}
.buttons {
  width: 50%;
  margin: auto;
}
button {
  display: block;
  margin: 5px;
}
</style>