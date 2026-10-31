<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">Certifications</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4">
        <figure class="rounded-xl overflow-hidden border border-pink-200 bg-white/50 p-2">
          <img src="/images/certs/Pinalba_Python.png" alt="Python Certification" class="w-full h-auto object-contain max-h-[180px]">
        </figure>
        <div class="mt-3">
          <h2 class="text-sm font-bold text-[#3e5f4f]">Python Training Certification</h2>
        </div>
      </div>

      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-4">
        <figure class="rounded-xl overflow-hidden border border-pink-200 bg-white/50 p-2">
          <img src="/images/certs/Pinalba_Word.png" alt="MS Word Certification" class="w-full h-auto object-contain max-h-[180px]">
        </figure>
        <div class="mt-3">
          <h2 class="text-sm font-bold text-[#3e5f4f]">Microsoft Word Certification</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Certifications | Anaiah Kyrie Pinalba' })
useSeoMeta({
  title: 'Certifications | Anaiah Kyrie Pinalba',
  ogTitle: 'Certifications | Anaiah Kyrie Pinalba',
  description: 'View the professional certifications and training achievements of Anaiah Kyrie Pinalba.',
  ogDescription: 'View the professional certifications and training achievements of Anaiah Kyrie Pinalba.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>