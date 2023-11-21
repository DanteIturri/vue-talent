<script setup>
import LogoPerfil from '../components/icons/IconAs.vue';
import IconStar from '../components/icons/IconStar.vue';
import IconFacebook from '../components/icons/IconFacebook.vue';
import IconInstagram from '../components/icons/IconInstagram.vue';
import IconTwitter from '../components/icons/IconTwitter.vue';
import IconLinkedin from '../components/icons/IconLinkedin.vue';
import IconPlay from '../components/icons/IconPlay.vue';
import IconDownload from '../components/icons/IconDownload.vue';
import SidebarMetrics from '../components/SidebarMetrics.vue';
import IconActive from '../components/icons/IconActive.vue'
import IconMapMaker from '../components/icons/IconMapMaker.vue'
import IconLink from '../components/icons/IconLink.vue'
</script>
 <template>
    <div class="sidebar-content flex flex-col justify-center items-center rounded-lg overflow-hidden bg-white z-10 border px-6 mb-16">
        <div class="sidebar-header">
            <div class="logo-perfil flex items-center justify-center bg-slate-400 rounded-full mt-8 mb-4">
                <a href="">
                    <LogoPerfil />
                </a>
            </div>
        </div>
        <div class="sidebar-decription flex flex-col justify-center items-center gap-2">
            <h1 class="sidebar-text-color font-semibold text-2xl ">A.C. Telecom</h1>
            <p  class="text-xs text-gray-600">@ac-telecom</p>
            <p class="text-xs text-sky-600">Startup - tecnología</p>
            <p class="text-xs text-lime-500 flex items-center gap-1"><IconActive />Empresa activa</p>
            <p class="text-xs text-gray-600 flex items-center"><IconMapMaker />Floridablanca - Colombia</p>
            <div class="sidebar-raiting">
                <div class="sidebar-raiting-stars flex items-center self-start gap-2">
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <p class="text-xs">(10 Reviews)</p>
                </div>
            </div>
            <div class="sidebar-social flex">
                <IconFacebook />
                <IconInstagram />
                <IconTwitter />
                <IconLinkedin />
            </div>
            <div class="sidebar-web flex items-center">
                <IconLink />
                <a class="text-xs text-blue-900" href="">https://www.actelecom.net/telecom</a>
            </div>
            <div class="sidebar-video  flex justify-center items-center bg-slate-500 mb-4 mt-2 rounded-xl border-slate-400 border-solid border">
                <IconPlay />
            </div>
            <div class="sidebar-qr py-5 px-7 rounded-xl border-slate-300 border-solid border">
                <a href="">
                    <img src="../assets/QRTalent.png" alt="qr" class=" w-full h-full">
                </a>
            </div>
            <div class="sidebar-share flex justify-center py-2 w-full bg-fuchsia-700 my-2 text-white font-semibold rounded-md">
                <button>Compartir perfil</button>
            </div>
            <div class="siderbar-download flex items-center w-full border border-slate-400 mb-4 gap-2 rounded-lg overflow-hidden">
                <IconDownload />
                <p class="text-slate-600 font-semibold">Descargar resumen</p>
            </div>
            <SidebarMetrics />
        </div>
    </div>
 </template>
 <style scoped>
 .sidebar-content {
    width: 288px;
    margin-top: -108px;

 }
 .logo-perfil {
    width: 170px;
    height: 170px;
 }
 .sidebar-text-color {
    color: #1A237E;
 }
 .sidebar-video {
    width: 100%;
    height: 274px;
    background: url(../assets/previewVideo.jpeg) center center / cover no-repeat;
 }
</style>