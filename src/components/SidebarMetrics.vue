<script setup>
import IconTalent from '../components/icons/IconTalent.vue';
import IconEyes from '../components/icons/IconEyes.vue';
import IconCamera from '../components/icons/IconCamera.vue';
import IconTransporter from '../components/icons/IconTransporter.vue';
import IconFile from '../components/icons/IconFile.vue';
import IconPhoto from '../components/icons/IconPhoto.vue';
</script>
<template>
    <div class="sidebar-metrics w-full mb-8 font-semibold">
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconTalent />
                        <p>Talentos</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconEyes />
                        <p>vistas del perfil</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconCamera />
                        <p>Pitches recibidos</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconTransporter />
                        <p>Exhibiciones</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconFile />
                        <p>Vacantes</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
                <div class="sidebar-metrics-item flex w-full justify-between items-center py-4 border-b border-gray-300">
                    <div class="sidebar-text-icon items-center flex gap-2 uppercase">
                        <IconPhoto />
                        <p>Contenidos</p>
                    </div>
                    <p class="sidebar-metrics-value text-sm font-bold text-gray-600">20</p>
                </div>
            </div>
</template>
 <style scoped>
    .sidebar-text-icon {
        font-size: 9px;
    }
</style>