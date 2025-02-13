<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import anime from 'animejs/lib/anime.es.js';

onMounted(() => {
  const anim = document.getElementsByClassName('anim')[0]
  anime({
    targets: anim,
    translateX: [0, -10],
    delay: 3000,
    direction: 'alternate',
    loop: true
  });
})

</script>

<template>
  <DotLottieVue class="anim" autoplay loop src="https://lottie.host/d9ba51e8-f30d-48a0-a09a-25e1c688f53a/rmvKVJ8iNX.lottie" />
</template>
<style scoped>
.anim{
  height: 500px;
  width: 500px;
  margin-top: 10px;
}
</style>