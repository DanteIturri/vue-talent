<script setup>
import IconUserPlus from '../components/icons/IconUserPlus.vue';
import NavTap from '../components/NavTap.vue';
</script>

<template>
  <div class="flex flex-col w-4/5">
    <div class="flex justify-between items-center w-full h-12">
      <div class="flex items-center mt-6 gap-4 text-xs">
        <p class="text-blue-500">Match con la cultura <span class="text-lime-500">80 % </span></p>
        <div class="main-progress-bar w-72 h-3 bg-gray-100 rounded-full">
            <div class="bg-lime-500 h-3 rounded-full" :style="{ width: '80%' }"></div>
        </div>
      </div>
      <div class="main-btn-profile mt-6 pr-4 h-full flex items-center justify-end gap-4">
        <button class="bg-fuchsia-600 hover:bg-fuchsia-400 text-white text-xs py-2 px-3 rounded-md font-semibold">Enviar Pitch</button>
        <button class="flex items-center gap-2 text-xs text-fuchsia-700 py-2 px-3 border border-fuchsia-700 hover:border-fuchsia-500 rounded-md font-semibold"><IconUserPlus />Seguir</button>
      </div>
    </div>
    <NavTap />
  </div>
</template>
-