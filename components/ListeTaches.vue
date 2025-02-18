<template>
  <div v-if="isMounted">
    <div v-if="taches.length===0" class="vide">
      Vos n'avez pas encore de taches
    </div>
    <div v-else class="plein" v-for="tache in taches" :key="tache.id">
      {{ tache.libelle }}
    </div>
  </div>
</template>
<script setup>
import {ref,watch} from "#imports";

const isMounted = ref(false);
const props = defineProps({
   taches: Array,
})
watch(()=> props.taches, (newValue)=>{
  if (Array.isArray(newValue)) {
    isMounted.value = true
  }
},{deep:true})
</script>