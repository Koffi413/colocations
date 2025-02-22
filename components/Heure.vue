<script setup>
const temps = Array.from({ length: 24 }, (_, i) => `${(i + 1).toString().padStart(2, '0')}:00`);

</script>

<template>
    <div class="a">
        <div  v-for="heure in temps" :key="hours">
            <input type="button" class="time" :value="heure"/>
        </div>
    </div>
</template>

<style scoped>
.a {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 85%;
    margin: 20px auto;
}
.time{
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    width: 70px;
    opacity: 0.5;
    cursor: pointer;
}
</style>