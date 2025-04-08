<script setup>
import { ref } from '#imports';
let date = new Date();
const annee = ref(date.getFullYear());
const mois = ref(date.getMonth());
const moisTab = ref(["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]);

const premierJour = computed(() => {
  let jour = new Date(annee.value, mois.value, 1).getDay();
  return jour === 0 ? 6 : jour - 1;
});

const derniereDateMois = computed(() => {
  return new Date(annee.value, mois.value + 1, 0).getDate();
})

const dernierJourMois = computed(() => {
  let dernJour = new Date(annee.value, mois.value, derniereDateMois.value).getDay();
  return dernJour === 0 ? 6 : dernJour - 1;
})
const derniereDateMoisPrec = computed(() => {
  return new Date(annee.value, mois.value, 0).getDate();
})
const datePrec = computed(() => {
  return Array.from({ length: premierJour.value }, (val, index) => derniereDateMoisPrec.value - index).reverse()
})
const joursMois = computed(() => {
  const joursTab = Array.from({ length: derniereDateMois.value }, (val, index) => derniereDateMois.value - index).reverse();
  return joursTab;
})
const dateSuiv = computed(() => {
  return Array.from({ length: 6 - dernierJourMois.value }, (val, index) => derniereDateMois.value - derniereDateMois.value + index + 1);
})

const suivant = () => {
  mois.value = mois.value + 1;
  if (mois.value < 0 || mois.value > 11) {
    date = new Date(annee.value, mois.value, new Date().getDate())
    annee.value = date.getFullYear();
    mois.value = date.getMonth();
  }
}
const precedent = () => {
  mois.value = mois.value - 1;
  if (mois.value < 0 || mois.value > 11) {
    date = new Date(annee.value, mois.value, new Date().getDate())
    annee.value = date.getFullYear();
    mois.value = date.getMonth();
  }
}
const jours = ref(null)
const emit = defineEmits(['display'])
const dates = (j) => {
  jours.value = j
  const infos = reactive({
    'jours': j,
    'mois': moisTab.value[mois.value],
    'annee': annee.value
  })
  emit('display',true, infos)
}
defineProps({
  heure:''
})
</script>

<template>
  <div :class="!heure?'calendrier':'calendrier2'">
    <div class="calendrier__header">
      <div class="calendrier_boutton_prec" @click="precedent"><img src="~/assets/images/fl-g.svg" alt="fleche-gauche" />
      </div>
      <span class="mois">
        <div class="cal"><img src="~/assets/images/calen.svg" alt=""></div> {{ moisTab[mois] }}, {{ annee }}
      </span>
      <div class="calendrier_boutton_suiv" @click="suivant"><img src="~/assets/images/fl-d.svg" alt="fleche-droite" />
      </div>
    </div>
    <div v-if="!heure" class="calendrier_semaine">
      <div>Lun</div>
      <div>Mar</div>
      <div>Mer</div>
      <div>Jeu</div>
      <div>Ven</div>
      <div>Sam</div>
      <div>Dim</div>
    </div>
    <div v-if="!heure" class="calendrier_jour">
      <input type="button" v-for="jourPrec in datePrec" :key="'prec-' + jourPrec" class="jour inactive" :value="jourPrec"/>
      <input type="button" @click="dates(jour)" :id="jour" :value="jour" v-for="jour in joursMois" :key="'jour-' + jour"
        :class="['jour', jours === jour ? 'actif' : '']">
      <input type="button" v-for="finMois in dateSuiv" :key="'fin-' + finMois" class="jour inactive" :value="finMois" />
    </div>
    <Heure v-if="heure"/>
  </div>
</template>

<style scoped>
.calendrier {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 100%;
  bottom: 0;
  font-size: 14px;
  height: 310px;
  padding: 10px;
}
.calendrier2{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 100%;
  bottom: 0;
  font-size: 14px;
  height: fit-content;
  padding: 10px;
}
.calendrier__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 0;
  background-color: #f0f3fe;
  border-radius: 10px;
  height: 30px;
  user-select: none;
  width: 100%;
  color: #0860fb;
}

.cal {
  height: 20px 
}

img {
  height: 80%;
  width: 100%;
  margin: auto;
}

.mois {
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  width: 50%;
  height: 100%
}

.calendrier_boutton_suiv,
.calendrier_boutton_prec {
  cursor: pointer;
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendrier_semaine {
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 85%;
  gap: 10px;
  color: #ababab;
}

.calendrier_jour {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  width: 85%;
  margin: 20px auto;
}

.jour {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: #0860fb;
  background: #f0f3fe;
  outline: none;
  border: none;
  text-align: center;
}

.jour:not(.actif):hover {
  background: #f2f2f2;
}

.inactive {
  color: #ababab;
  background-color: #f2f2f2;
}

.actif {
  background: #0860fb;
  color: white;
  outline: none;
  border: none;
}
</style>