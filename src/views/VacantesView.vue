<script setup>
import ArrowLeft from '../components/icons/IconArrowLeft.vue';
import ArrowRight from '../components/icons/IconArrowRight.vue';
import IconStars from '../components/icons/IconStars.vue';
import IconShare from '../components/icons/IconShare.vue'
</script>
<template>
    <h1 class="mt-6 mb-4 text-2xl font-medium text-blue-900">Publicadas recientemente</h1>
    <div class="carrusel-container flex gap-4 justify-center items-center">
        <div class="carrusel-arrow-left flex justify-center items-center">
            <ArrowLeft />
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        

        
        <div class="carrusel-arrow-left flex justify-center items-center">
            <ArrowRight />
        </div>
    </div>
    <h1 class="mt-6 mb-4 text-2xl font-medium text-blue-900">Publicadas recientemente</h1>
    <div class="carrusel-container flex gap-4 justify-center items-center">
        <div class="carrusel-arrow-left flex justify-center items-center">
            <ArrowLeft />
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        <div class="carrusel-card border rounded-t-lg overflow-hidden">
            <div class="carrusel-card-header">
                <div class="carrusel-card-header-img">
                </div>
                <div class="carrusel-card-header-info flex justify-between py-2 px-3 bg-slate-200">
                    <div class="carrusel-exper flex items-center gap-1">
                        <p class="text-xs text-gray-500">Experiencia</p>
                        <div class="carrusel-star">
                        <IconStars />
                        </div>
                    </div>
                    <div class="carrusel-share">
                        <IconShare />
                    </div>
                </div>
            </div>
            <div class="carrusel-card-body p-3">
                <h3 class="text-blue-950 font-normal">Lider UX/UI</h3>
                <div class="carrusel-card-body-info w-fit text-xs mt-2 text-sky-600 bg-sky-100 rounded-xl py-1 px-2">
                    Creada por organizacion: Nombre
                </div>
                <div class="carrusel-body-text  mt-2">
                    <p class="text-xs text-slate-500 mb-4">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de conocimiento para generar valor en una organización?</p>
                </div>
                <div class="carrusel-body-pills flex justify-between">
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">60</div>
                        <p class="text-xs text-slate-600 font-medium">Vistas</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">30</div>
                        <p class="text-xs text-slate-600 font-medium">Comentarios</p>
                    </div>
                    <div class="carrusel-body-pills-item flex flex-col justify-center items-center gap-1">
                        <div class="carrusel-card-number text-white bg-pink-400 rounded-xl px-2 ">41</div>
                        <p class="text-xs text-slate-600 font-medium">Pitches</p>
                    </div>
                    
                </div>
                <div class="carrusel-card-foote mt-4 pt-4 border-t">
                    <button class="py-1 px-3 bg-pink-600 text-white rounded-md">Aplicar a vacante</button>
                </div>
            </div>
        </div>
        

        
        <div class="carrusel-arrow-left flex justify-center items-center">
            <ArrowRight />
        </div>
    </div>
</template>
<style scoped>
    .carrusel-card{
        width: 236px;
    }
    .carrusel-card-header-img {
        background: url(../assets/23b53462dae29297394eab7af4164cee.jpeg);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 73px;
        overflow: hidden;
    }
    .carrusel-arrow-left{
        width: 15px;
        height: 100%;
        background: lightgray;
    }
</style>