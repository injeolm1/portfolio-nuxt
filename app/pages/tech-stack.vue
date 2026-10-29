<template>
  <div class="text-left space-y-6">
    <div class="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
      <h1 class="coiny-regular text-2xl md:text-3xl text-[#ff6f91] m-0">Tech Stack</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-4">Languages</h2>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="flex flex-col items-center"><img src="/images/techstack/html.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">HTML</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/css.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">CSS</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/js.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">JavaScript</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/java.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">Java</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/python.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">Python</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/c.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">C</span></div>
        </div>
      </div>

      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-4">Data & Programs</h2>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="flex flex-col items-center"><img src="/images/techstack/sql.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">SQL</span></div>
          <div class="flex flex-col items-center"><img src="/images/techstack/msword.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">MS Word</span></div>
        </div>
      </div>

      <div class="card bg-white/40 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-5">
        <h2 class="text-lg font-bold text-[#ff6f91] border-b border-pink-200 pb-2 mb-4">Development Tools</h2>
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="flex flex-col items-center"><img src="/images/tools/git.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">Git</span></div>
          <div class="flex flex-col items-center"><img src="/images/tools/github.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">GitHub</span></div>
          <div class="flex flex-col items-center"><img src="/images/tools/vscode.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">VS Code</span></div>
          <div class="flex flex-col items-center"><img src="/images/tools/postgresql.png" class="w-10 h-10 object-contain"><span class="text-xs font-semibold mt-1">PostgreSQL</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Tech Stack | Anaiah Kyrie Pinalba' })
useSeoMeta({
  title: 'Tech Stack | Anaiah Kyrie Pinalba',
  ogTitle: 'Tech Stack | Anaiah Kyrie Pinalba',
  description: 'Explore the tech stack and web development skills of Anaiah Kyrie Pinalba, including Nuxt, Vue, and Tailwind CSS.',
  ogDescription: 'Explore the tech stack and web development skills of Anaiah Kyrie Pinalba, including Nuxt, Vue, and Tailwind CSS.',
  ogImage: '/images/bgs/Pinalba.png',
  twitterCard: 'summary_large_image'
})
</script>