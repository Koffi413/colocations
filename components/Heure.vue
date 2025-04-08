<script setup>
const temps = Array.from({ length: 24 }, (_, i) => `${(i + 1).toString().padStart(2, '0')}:00`);
const select = ref(null)
const heures = ref(null)
const heures2 = ref(null)
const nbClick = (x) => {
    select.value=true
    if (heures.value === null){
        heures.value = x
    }
    else {
        heures2.value=x    
    }
}
</script>

<template>
    <div class="content-heure">
        <div class="choix" v-if="select">
            <div class="first">{{heures}}</div> -
            <div class="second">{{ heures2 }}</div>
        </div>
        <div class="heure">
            <div v-for="heure in temps" :key="hours">
                <input @click="nbClick(heure)" type="button" :class="['time',heures === heure || heures2 ===heure ? 'actif' : '']" :value="heure" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-heure {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1px;
    height: fit-content;
}

.heure {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 85%;
    margin: 8px auto;
}

.time {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    width: 70px;
    cursor: pointer;
}

.choix {
    margin: 8px auto;
    width: 95%;
    height: 30px;
    border: 1px solid black;
    display: flex;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.first,
.second {
    height: 80%;
    width: 45%;
    background-color: #f0f3fe;
    border-radius: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
}
.actif {
    background: #0860fb;
    color: white;
}
</style>