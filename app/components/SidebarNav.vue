<template>
  <div>
    <div class="md:hidden flex justify-end p-4 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost btn-circle text-[#ff6f91]" aria-label="Toggle menu">
        <MenuIcon v-if="!isMenuOpen" :size="28" />
        <XIcon v-else :size="28" />
      </button>
    </div>

    <aside :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
           class="md:block w-full md:w-[260px] p-4 md:p-5 bg-white/10 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/20">
      <nav class="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="isMenuOpen = false"
          class="coiny-regular btn bg-[#ffb3c6] hover:bg-[#ff6f91] border-none text-[#3e5f4f] hover:text-white justify-start gap-2 normal-case font-bold text-[14px] md:text-[16px] transition duration-300 hover:scale-105 [&.router-link-exact-active]:bg-[#ff6f91] [&.router-link-exact-active]:text-white"
          :class="{ 'col-span-2 md:col-span-1': link.wide }"
        >
          <component :is="link.icon" :size="18" /> {{ link.label }}
        </NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Home as HomeIcon, User as UserIcon, Code as CodeIcon, Award as AwardIcon, Mail as MailIcon, Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const links = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/about', label: 'About', icon: UserIcon },
  { to: '/tech-stack', label: 'Tech Stack', icon: CodeIcon },
  { to: '/certifications', label: 'Certifications', icon: AwardIcon },
  { to: '/contacts', label: 'Contact Me', icon: MailIcon, wide: true },
]
</script>