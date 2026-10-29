<template>
  <div class="m-0 flex flex-col min-h-screen bg-[url('/images/bgs/stripebg.png')] bg-repeat bg-left-top bg-fixed font-sans text-[#3e5f4f]">
    <div class="w-[92%] max-w-[1100px] mx-auto my-10 md:my-[60px] bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/25 rounded-[16px] shadow-[0_0_70px_rgba(255,179,198,0.30)] overflow-hidden flex flex-col">
      
      <NavbarHeader />

      <div class="flex flex-col md:flex-row">
        <SidebarNav />

        <main class="flex-1 p-6 md:p-10 text-center bg-white/5 backdrop-blur-xl">
          <NuxtPage />
        </main>
      </div>

    </div>
  </div>
</template>

<style>
.coiny-regular {
  font-family: 'Coiny', sans-serif;
}
.gwendolyn-bold {
  font-family: 'Gwendolyn', cursive;
  font-weight: 700;
}
</style>
