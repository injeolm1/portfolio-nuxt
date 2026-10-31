<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
    <div class="max-w-md card bg-white shadow-xl p-8 rounded-2xl border border-pink-200">
      <h1 class="text-9xl font-bold text-[#ff6f91]">404</h1>
      <h2 class="text-2xl font-semibold mt-4 text-[#3e5f4f]">Page Not Found</h2>
      <p class="text-sm mt-2 text-gray-500 mb-6">The route you are trying to access doesn't exist or has been shifted.</p>
      <button @click="handleClearError" class="btn bg-[#ffb3c6] hover:bg-[#ff6f91] border-none text-[#3e5f4f] hover:text-white gap-2">Return to Safety</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
const handleClearError = () => clearError({ redirect: '/' })
</script>