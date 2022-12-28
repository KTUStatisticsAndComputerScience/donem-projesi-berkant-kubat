<script setup lang="ts">
import KargoDetayComponent from "@/components/KargoDetayComponent.vue";
import AdresDetayComponent from "@/components/AdresDetayComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import GondericiDetayComponent from "@/components/GondericiDetayComponent.vue";
</script>

<template>
  <div class="navbar position-absolute">
    <NavbarComponent/>
  </div>
  <div class="main position-absolute">
    <h2>Kargo Detay</h2>
    <KargoDetayComponent/>
  </div>
  <div class="adres position-absolute">
    <h2>Adres Detay</h2>
    <AdresDetayComponent/>
  </div>
  <div class="gonderici position-absolute">
    <h2>Gonderici Detay</h2>
    <GondericiDetayComponent/>
  </div>
</template>

<style scoped>

div.adres{
  top: 0;
  left: 0;
  width: 25vw;
  height: 50vw;
}
div.position-absolute {
  position: absolute;
}
div.navbar {
  padding: 20px;
  left: 0;
  top: 0;
  height: 100vh;
  width: 25vw;
  background: rgba(0, 0, 0, 0.51);
  box-sizing: border-box;
  /*overflow-y: scroll;*/
}
div.main {
  padding: 20px;
  left: 25vw;
  top: 0;
  width: 75vw;
  height: 50vh;
  background: #ECF0F1;
  box-sizing: border-box;
}
div.adres{
  padding: 20px;
  left: 25vw;
  top: 25vh;
  width: 75vw;
  height: 50vh;
  background: #ECF0F1;
  box-sizing: border-box;
}
div.gonderici{
  padding: 20px;
  left: 25vw;
  top: 55vh;
  width: 75vw;
  height: 50vh;
  background: #ECF0F1;
  box-sizing: border-box;
}
</style>