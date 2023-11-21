<script setup>
import IconEdit from '../components/icons/IconEdit.vue';
</script>
<template>
    <div class="hero w-100 bg-slate-400 relative">
        <div class="hero-btn absolute right-10 top-5 bg-white p-2 rounded-full">
            <a href="">
                <IconEdit />
            </a>
        </div>
    </div>
</template>

<style scoped>
.hero {
    background: url(../assets/background.jpeg) center center /cover no-repeat ;
    height: 230px;
}
</style>