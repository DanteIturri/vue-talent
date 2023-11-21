<script setup>
import IconUser from '../components/icons/IconUser.vue';
import IconAreas from '../components/icons/IconAreas.vue';
import IconBrain from '../components/icons/IconBrain.vue';
import IconConocimiento from '../components/icons/IconConocimiento.vue';
import IconClip from '../components/icons/IconClip.vue';
import IconTools from '../components/icons/IconTools.vue';
import IconLanguage from '../components/icons/IconLanguage.vue';
import IconList from '../components/icons/IconList.vue';
import IconCheck from '../components/icons/IconsCheck.vue';
import IconCase from '../components/icons/IconCase.vue';
import IconComments from '../components/icons/IconComments.vue'
import IconUsers from '../components/icons/IconUsers.vue'
</script>
<template>
    <div class="perfil-empresa">
        <div class="p-4 mt-4 border perfil-resumen-empresa rounded-2xl">
            <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800"><span class="p-1 rounded-full bg-cyan-200"><IconUser /></span>Resumen de la empresa</h2>
            <div class="mt-6 perfil-descripcion">
                <h3 class="text-xs font-semibold text-gray-900 ">Descripción</h3>
                <p class="my-2 text-xs text-gray-600">En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo </p>
            </div>
            <div class="grid grid-cols-2 mt-4 perfil-datos">
                <div class="perfil-datos-correo">
                    <h3 class="text-xs font-semibold text-gray-900 ">Correo electronico</h3>
                    <p class="my-2 text-xs text-gray-600">ejemplo@ejemplo.com </p>
                </div>
                <div class="mb-4 perfil-datos-contacto">
                    <h3 class="text-xs font-semibold text-gray-900 ">Número de contacto</h3>
                    <p class="my-2 text-xs text-gray-600">ejemplo@ejemplo.com </p>
                </div>
                <div class="perfil-datos-estados">
                    <h3 class="text-xs font-semibold text-gray-900 ">Estados deseados buscados</h3>
                    <p class="my-2 text-xs text-gray-600">ejemplo@ejemplo.com </p>
                </div>
                <div class="perfil-datos-rol">
                    <h3 class="text-xs font-semibold text-gray-900 ">Rol más Buscado</h3>
                    <p class="my-2 text-xs text-gray-600">ejemplo@ejemplo.com </p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 mt-4 gap-x-4">
            <div class="p-4 border perfil-areas rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800"><span class="p-1 rounded-full bg-cyan-200"><IconAreas /></span>Areas de interes</h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconBrain /></span>
                    Vacantes sugeridas por AI
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center px-4 py-6 perfil-talento">
            <div class="perfil-talento_title"><h2 class="text-xl font-bold text-blue-800">Lo que buscamos en el talento</h2></div>
            <div class="w-full h-px bg-blue-200"></div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="p-4 border perfil-areas rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800"><span class="p-1 rounded-full bg-cyan-200"><IconConocimiento /></span>Conocimientos</h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconClip /></span>
                    Habilidades
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconTools /></span>
                    Herramientas
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconLanguage /></span>
                    Idiomas
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="col-span-2 p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconList /></span>
                    Metodologías
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center px-4 py-6 perfil-talento">
            <div class="perfil-talento_title"><h2 class="text-xl font-bold text-blue-800">Lo que ofrecemos en la empresa</h2></div>
            <div class="w-full h-px bg-blue-200"></div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="p-4 border perfil-areas rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800"><span class="p-1 rounded-full bg-cyan-200"><IconCheck /></span>Beneficios que ofrecemos</h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconCase /></span>
                    Formas de trabajo que ofrecemos
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconComments /></span>
                    Cultura que ofrecemos
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
            <div class="p-4 border perfil-vacantes rounded-2xl">
                <h2 class="flex items-center gap-2 text-lg font-bold text-blue-800">
                    <span class="p-1 rounded-full bg-cyan-200"><IconUsers /></span>
                    Comunidades
                </h2>
                <div class="flex gap-2 mt-6 perfil-pills">
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                    <div class="flex items-center justify-center py-1 text-xs rounded-full perfil-pills-item w-14 bg-cyan-100 ">
                        <p class="text-sky-600">Copy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.perfil-talento_title {
    width: 450px;
}
</style>