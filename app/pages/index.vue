<template>
  <div>
    <h1 class="coiny-regular text-lg md:text-xl font-bold text-[#ff6f91] bg-[#ffb3c6] inline-block px-6 py-3 rounded-full mb-8">
      Welcome to My Portfolio!
    </h1>

    <div class="flex flex-col items-center gap-4 mb-6">
      <div class="flip-container w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border-4 border-white overflow-hidden bg-white/20 backdrop-blur-md">
        <div class="flip-inner w-full h-full relative transition-transform duration-500">
          <div class="flip-face absolute w-full h-full backface-hidden">
            <img src="/images/bgs/Pinalba.png" alt="Profile Photo" class="w-full h-full object-cover">
          </div>
          <div class="flip-face flip-back absolute w-full h-full backface-hidden rotate-y-180">
            <img src="/images/designs/designpic.png" alt="Flower Photo" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>

    <h2 class="gwendolyn-bold text-2xl md:text-3xl px-5 py-2 rounded-full bg-pink-200/70 backdrop-blur-md border border-pink-300/60 hover:scale-105 hover:bg-pink-300/80 active:scale-95 transition-all duration-300 ease-in-out" style="color: #f06f8a;">
      Anaiah Kyrie Pinalba
    </h2>

    <p class="text-xs md:text-sm mt-2">
      BSIT Undergraduate • Aspiring Developer • UI/UX Learner
    </p>

    <div class="flex justify-center gap-5 mt-4">
      <a href="https://github.com" target="_blank" class="btn btn-circle btn-ghost bg-white/20 text-[#3e5f4f] hover:bg-[#ff6f91] hover:text-white transition hover:scale-110">
        <svg xmlns="http://w3.org" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 2.9 2.9.1-.7.4-1.2.8-1.5-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3a11 11 0 0 1 6 0C15.9 5 16.9 5.3 16.9 5.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.4 0 4.8-2.9 5.9-5.6 6.2.5.4.9 1.1.9 2.3v3.4c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.3 5.7 18.3.5 12 .5z"/></svg>
      </a>
      <a href="https://linkedin.com" target="_blank" class="btn btn-circle btn-ghost bg-white/20 text-[#3e5f4f] hover:bg-[#ff6f91] hover:text-white transition hover:scale-110">
        <svg xmlns="http://w3.org" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v5.8zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z"/></svg>
      </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Anaiah Kyrie Pinalba | Home'
})

useSeoMeta({
  title: 'Anaiah Kyrie Pinalba | Portfolio Home',
  ogTitle: 'Anaiah Kyrie Pinalba | Portfolio Home',
  description: 'Welcome to my undergraduate IT developer portfolio built with Nuxt, Tailwind CSS, and DaisyUI.',
  ogDescription: 'Welcome to my undergraduate IT developer portfolio built with Nuxt, Tailwind CSS, and DaisyUI.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.flip-container:hover .flip-inner {
  transform: rotateY(180deg);
}
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
