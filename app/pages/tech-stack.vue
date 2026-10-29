<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">
        Tech Stack
      </h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5 hover:scale-105 transition-all duration-300">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-3">Frontend</h2>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">HTML5</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">CSS3</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">Tailwind CSS</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">Vue.js</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">Nuxt</div>
        </div>
      </div>

      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5 hover:scale-105 transition-all duration-300">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-3">Languages</h2>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">JavaScript</div>
        </div>
      </div>

      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5 hover:scale-105 transition-all duration-300">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-3">Tools & Design</h2>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">Git</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">GitHub</div>
          <div class="badge bg-pink-100 border border-pink-200 text-[#3e5f4f] p-3 font-semibold">UI/UX Design</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Tech Stack | Anaiah Kyrie Pinalba'
})

useSeoMeta({
  title: 'Tech Stack | Anaiah Kyrie Pinalba',
  ogTitle: 'Tech Stack | Anaiah Kyrie Pinalba',
  description: 'Explore the tech stack and web development skills of Anaiah Kyrie Pinalba, including Nuxt, Vue, and Tailwind CSS.',
  ogDescription: 'Explore the tech stack and web development skills of Anaiah Kyrie Pinalba, including Nuxt, Vue, and Tailwind CSS.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>
