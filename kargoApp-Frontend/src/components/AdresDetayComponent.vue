<script setup>
//Veri Tanımları
import {useYukleniyorState} from "@/states/yukleniyor_state";
import {useAdreslerState} from "@/states/Adres_state";
import {ref} from "vue";
import ModalComponent from "@/components/modal/ModalComponent.vue"

const yukleme = useYukleniyorState();
const adresStore = useAdreslerState();
adresStore.yukle();
let ekleme_acik = ref(false);

function extracted(adres_bilgileri) {
  adresStore.seciliKargo = adres_bilgileri
}
</script>

<template lang="pug">
div.tablo_main
  table.main
    tr
      th.tablo_baslik ID
      th.tablo_baslik Adres Türü
      th.tablo_baslik Adres
      th.tablo_baslik İl
      th.tablo_baslik İlce
    div.loader(v-if="yukleme.yukleniyor")
    div(v-else-if="adresStore.adresler.length===0") Adres Bilgileri Bulunamadı!
    tr(v-else, v-for="adres_bilgileri in adresStore.adresler" @click="extracted(adres_bilgileri)")
      td.tablo_detay {{ adres_bilgileri.id }}
      td.tablo_detay {{ adres_bilgileri.adres_turu }}
      td.tablo_detay {{ adres_bilgileri.adres}}
      td.tablo_detay {{ adres_bilgileri.il.ilAdi}}
      td.tablo_detay {{ adres_bilgileri.ilceler.ilceadi}}
button(@click="adresStore.yukle()" :disabled="yukleme.yukleniyor") Yenile
ModalComponent(:acik="ekleme_acik")
  template(#model_baslik)
    div.ekleme_baslik
      h1 Adres Detayları
      button.kapat(@click="ekleme_acik=false") X
</template>

<style scoped>
div.ekleme_baslik {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

button.kapat {
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
  background-color: white;
  border: none;
}

table {
  border-collapse: collapse;
  width: 100%;
}

a {
  color: #4C32FC;
  text-decoration: none;
  cursor: pointer;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table td {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(159, 55, 55, 0.38);
  color: white;
}

.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: black;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}

.loader::after, .loader::before {
  content: '';
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  box-sizing: border-box;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}

.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 48px
  }
  100% {
    height: 4px
  }
}
</style>