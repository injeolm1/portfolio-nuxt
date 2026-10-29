<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">
        Contact Me
      </h1>
    </div>

    <div class="max-w-xl mx-auto card bg-white/40 backdrop-blur-md shadow-xl border border-white/30 p-6 rounded-2xl space-y-4">
      <h2 class="text-xl font-bold text-[#3e5f4f]">Get in Touch</h2>
      <p class="text-sm">Feel free to connect with me through any of the platforms below:</p>
      
      <div class="space-y-3 pt-2">
        <div class="flex items-center gap-2">
          <span class="font-bold text-[#3e5f4f]">GitHub:</span>
          <a href="https://github.com" target="_blank" class="link text-[#ff6f91]">
            ://github.com
          </a>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-[#3e5f4f]">LinkedIn:</span>
          <a href="https://linkedin.com" target="_blank" class="link text-[#ff6f91]">
            ://linkedin.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact | Anaiah Kyrie Pinalba'
})

useSeoMeta({
  title: 'Contact | Anaiah Kyrie Pinalba',
  ogTitle: 'Contact | Anaiah Kyrie Pinalba',
  description: 'Connect with Anaiah Kyrie Pinalba through professional channels including GitHub and LinkedIn.',
  ogDescription: 'Connect with Anaiah Kyrie Pinalba through professional channels including GitHub and LinkedIn.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>
