<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="nav-taps-container w-full h-10 flex items-center  mt-5 border-b-2 border-gray-200 text-xs text-blue-500">
        <div class="nav-tap-item 
        py-3 
        px-4 
        hover:border-b-4 
        hover:border-blue-950">
        <RouterLink to="/">Perfil</RouterLink>
    </div>
        <div class="nav-tap-item py-3 px-4 hover:border-b-4 hover:border-blue-950"><RouterLink to="/vacantes">Vacantes</RouterLink></div>
        <div class="nav-tap-item py-3 px-4">Listas</div>
    </div>
    <RouterView />
</template>
<style></style>