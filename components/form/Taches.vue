<script setup>
import {ref} from '#imports'
const display = ref(null)
const jour = reactive({})
const recu = (message, date) => {
  display.value = message
  jour.value = date
}
const heures = ref(false)
const heure = () => {
  if (heures.value) {
    heures.value = false
  }
  else {
    heures.value = true
  }
}
const user = useWebsiteStore()
const InfosTaches = reactive({
  libelle: '',
  date_debut: '',
  date_fin: '',
  username:user.utilisateur,
  type: '',
  status:''
})
</script>

<template>
  <div class="container">
    <InputLibelleTache :show="display" :choix="jour" />
    <Calendrier :heure="heures" @display="recu" />
    <div class="calendrier_footer">
      <button @click="heure" class="calendrier_boutton_heure">Définir une heure</button>
      <button class="calendrier_boutton_sauvegarde">Enregistrer</button>
    </div>
  </div>
</template>

<style scoped >
.container {
  background-color: white;
  border:none;
  border-radius: 10px;
  width: 50%;
  margin: 0;
  padding: 5px 0;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.calendrier_footer {
  display: block;
  margin: auto;
  width: 95%;
}

.calendrier_boutton_heure,
.calendrier_boutton_sauvegarde {
  width: 100%;
  border-radius: 50px;
  height: 40px;
  border: none;
  color: #0860fb;
  background: #f0f3fe;
  cursor: pointer;
}

.calendrier_boutton_sauvegarde {
  margin-top: 10px;
  color: white;
  background: #0860fb;
}
</style>
