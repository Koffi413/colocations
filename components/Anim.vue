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
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  overflow: hidden;
}
</style>