<script setup>
 import Plus from '../components/icons/IconPlus.vue';
 import IconDownArrow from '../components/icons/IconDownArrow.vue'
</script>

<template>
  <nav class="w-100 nav-height nav-blue-color ">
    <div class="nav-content nav-flex">
      <div class="nav-logo">
        <img src="../assets/new_logo_utils.svg.svg" alt="" />
      </div>
      <div class="nav-links  text-white">
        <a href="">Conéctate</a>
        <a href="">Mi muros</a>
        <a href="">Mis listas</a>
        <a href="">Aprende</a>
      </div>
      <div class="nav-profile flex gap-6 items-center">
        <button class="nav-button flex items-center gap-3 text-white py-1 px-2 rounded-lg">
          Comenzar
          <Plus />
        </button>
        <a href="">
          <img src="../assets/envelope-light 9.svg" alt="" />
        </a>
        <a href="">
          <img src="../assets/bell-light 9.svg" alt="" />
        </a>
        <a class="flex items-center" href="">
          <img src="../assets/Ellipse 164.svg" alt="" />
          <IconDownArrow />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.nav-blue-color {
  background-color: #1a237e;
}
.nav-height {
  height: 85px;
}
.nav-content{
  width: 1200px;
  margin: 0 auto;
}
.nav-button {
  background: #DE1C7D;
;
}
.nav-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.nav-links a {
  margin-right: 24px;
}
</style>
