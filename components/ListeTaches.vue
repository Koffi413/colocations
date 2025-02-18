<style scoped>
.tache {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 5px;
  margin-bottom: 10px;
}
p{
  display: inline-block;
}
.tacheInfos{
  width: 40%;
  display: flex;
  justify-content: space-between;
}
</style>
<template>
  <div v-if="isMounted">
    <div v-if="taches.length===0" class="vide">
      Vos n'avez pas encore de taches
    </div>
      <div class="tache" v-for="tache in taches" :key="tache.id">
        <div class="tacheLibelle">
          <input type="checkbox">
          <p>{{tache.libelle}}</p>
        </div>
        <div class="tacheInfos">
          {{tache.date_debut}} - {{tache.date_fin}}
          <div class="plus">plus</div>
        </div>
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