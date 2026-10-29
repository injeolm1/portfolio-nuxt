<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">About Me</h1>
    </div>

    <div class="card bg-white/40 backdrop-blur-md shadow-xl border border-white/30 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
      <div class="avatar">
        <div class="w-32 h-32 md:w-40 md:h-40 rounded-2xl ring ring-[#ffb3c6] ring-offset-base-100 ring-offset-2 overflow-hidden">
          <img src="/images/bgs/Pinalba.png" alt="Anaiah Pinalba" />
        </div>
      </div>

      <div class="flex-1 space-y-3">
        <h2 class="text-xl font-bold text-[#3e5f4f]">Hi, I'm Anaiah Kyrie Pinalba!</h2>
        <p class="text-sm md:text-base leading-relaxed text-gray-700">
          I am a **BSIT Undergraduate** student specializing in building clean, interactive web experiences. My primary areas of focus revolve around core **front-end engineering** workflows, functional interface designs, and continuous **UI/UX learning explorations**.
        </p>
        
        <div class="flex flex-wrap gap-2 pt-2">
          <div class="badge bg-[#ffb3c6] border-none text-[#3e5f4f] p-3 font-semibold">BSIT Student</div>
          <div class="badge bg-[#ffb3c6] border-none text-[#3e5f4f] p-3 font-semibold">UI/UX Learner</div>
          <div class="badge bg-[#ffb3c6] border-none text-[#3e5f4f] p-3 font-semibold">Aspiring Dev</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'About | Anaiah Kyrie Pinalba' })
useSeoMeta({
  title: 'About | Anaiah Kyrie Pinalba',
  ogTitle: 'About | Anaiah Kyrie Pinalba',
  description: 'Learn more about Anaiah Kyrie Pinalba, a BSIT undergraduate student, aspiring developer, and UI/UX learner.',
  ogDescription: 'Learn more about Anaiah Kyrie Pinalba, a BSIT undergraduate student, aspiring developer, and UI/UX learner.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>

