<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">Contact Me</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card bg-white/40 backdrop-blur-md shadow-xl border border-white/30 p-6 rounded-2xl space-y-4">
        <h2 class="text-xl font-bold text-[#3e5f4f]">Get in Touch</h2>
        <p class="text-sm">Connect with me through any of the platforms below:</p>
        <div class="space-y-2">
          <p class="text-sm"><strong>GitHub:</strong> <a href="https://github.com" target="_blank" class="link text-[#ff6f91]">://github.com</a></p>
          <p class="text-sm"><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" class="link text-[#ff6f91]">://linkedin.com</a></p>
        </div>
      </div>
      <div class="card bg-white/40 backdrop-blur-md shadow-xl border border-white/30 p-4 rounded-2xl">
        <h2 class="text-lg font-bold text-[#3e5f4f] mb-2">Location</h2>
        <div class="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-pink-200">
          <iframe 
            src="https://google.com" 
            title="Google Maps Location for Bacoor Cavite"
            class="w-full h-full border-none"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Contact | Anaiah Kyrie Pinalba' })
useSeoMeta({
  title: 'Contact | Anaiah Kyrie Pinalba',
  description: 'Reach out and connect with Anaiah Kyrie Pinalba, BSIT student and front-end developer.'
})
</script>
