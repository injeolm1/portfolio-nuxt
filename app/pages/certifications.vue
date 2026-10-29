<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">
        Certifications
      </h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5 hover:scale-105 transition-all duration-300">
        <figure class="rounded-xl overflow-hidden mb-4 bg-gray-100 aspect-video flex items-center justify-center border border-gray-200">
          <span class="text-xs text-gray-400 font-mono">[ Certificate Image Placeholder ]</span>
        </figure>
        <div class="card-body p-0">
          <h2 class="card-title text-base font-bold text-[#3e5f4f]">Technical Training Certification</h2>
          <p class="text-xs text-gray-600 mt-1">Issued by Academic Institution • 2026</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Certifications | Anaiah Kyrie Pinalba'
})

useSeoMeta({
  title: 'Certifications | Anaiah Kyrie Pinalba',
  ogTitle: 'Certifications | Anaiah Kyrie Pinalba',
  description: 'View the professional certifications and training achievements of Anaiah Kyrie Pinalba.',
  ogDescription: 'View the professional certifications and training achievements of Anaiah Kyrie Pinalba.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>
