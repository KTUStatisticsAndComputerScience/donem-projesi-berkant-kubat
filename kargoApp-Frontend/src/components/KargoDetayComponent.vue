<script setup>
//Veri Tanımları
import {useYukleniyorState} from "@/states/yukleniyor_state";
import {useKargolarState} from "@/states/kargo_state";
import {useGondericiState} from "@/states/gonderici_state";
import {ref} from "vue";
import GondericiBilgileriModalComponent from "@/components/modal/GondericiBilgileriModalComponent.vue";
import AliciBilgileriModalComponent from "@/components/modal/AliciBilgileriModalComponent.vue";
import AdresBilgileriModalComponent from "@/components/modal/AdresBilgileriModalComponent.vue";
import SubeBilgileriModalComponent from "@/components/modal/SubeBilgileriModalComponent.vue";

const yukleme = useYukleniyorState();
const kargoStore = useKargolarState();
const gondericiStore = useGondericiState();
kargoStore.yukle();
let ekleme_acik_gonderici=ref(false);
let ekleme_acik_alici=ref( false)
let ekleme_acik_adres=ref( false)
let ekleme_acik_sube=ref( false)

function extracted(kargo_bilgileri) {
  kargoStore.seciliKargo = kargo_bilgileri
}
</script>

<template lang="pug">
div.tablo_main
  table.main
    tr
      th.tablo_baslik ID
      th.tablo_baslik Kargo Adi
      th.tablo_baslik Kargo adeti
      th.tablo_baslik Kargo yükseklik
      th.tablo_baslik Kargo genişlik
      th.tablo_baslik Kargo kirilma
      th.tablo_baslik Kargo Tarihi
      th.tablo_baslik Gönderici Bilgileri
      th.tablo_baslik Alıcı Bilgileri
      th.tablo_baslik Sube Bilgileri
      th.tablo_baslik Ödeme Türü
    div.loader(v-if="yukleme.yukleniyor")
    div(v-else-if="kargoStore.kargolar.length===0") Kargo Bilgileri Bulunamadı!
    tr(v-else, v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
      td.tablo_detay {{ kargo_bilgileri.id }}
      td.tablo_detay {{ kargo_bilgileri.kargo.kargoAdi}}
      td.tablo_detay {{ kargo_bilgileri.kargo.adet}}
      td.tablo_detay {{ kargo_bilgileri.kargo.yukseklik}}
      td.tablo_detay {{ kargo_bilgileri.kargo.genislik}}
      td.tablo_detay {{ kargo_bilgileri.kargo.kirilma}}
      td.tablo_detay {{ kargo_bilgileri.kargo_tarihi}}
      td
        a(@click="ekleme_acik_gonderici=true") bilgileri gör
      td
        a(@click="ekleme_acik_alici=true") bilgileri gör
      td
        a(@click="ekleme_acik_sube=true") bilgileri gör
      td.tablo_detay {{ kargo_bilgileri.kargo_odemeTuru }}
button(@click="kargoStore.yukle()" :disabled="yukleme.yukleniyor") Yenile
  GondericiBilgileriModalComponent(:acik="ekleme_acik_gonderici")
    template(#model_baslik)
      div.ekleme_baslik
        h1 Gonderici Bilgileri
        table.main
          tr
            th.tablo_baslik ID
            th.tablo_baslik Ad
            th.tablo_baslik Soyad
            th.tablo_baslik Telefon
            th.tablo_baslik email
            th.tablo_baslik tc_kimlik
            th.tablo_baslik adres
          tr(v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.id }}
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.ad }}
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.soyad}}
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.telNo}}
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.email}}
            td.tablo_detay {{ kargo_bilgileri.gondericiBilgileri.tcKimlik}}
            td
              a(@click="ekleme_acik_adres=true") bilgileri gör
        button.kapat(@click="ekleme_acik_gonderici=false") X
  AliciBilgileriModalComponent(:acik="ekleme_acik_alici")
    template(#model_baslik)
      div.ekleme_baslik
        h1 Alici Bilgileri
        table.main
          tr
            th.tablo_baslik Ad
            th.tablo_baslik Soyad
            th.tablo_baslik Telefon
            th.tablo_baslik email
            th.tablo_baslik tc_kimlik
            th.tablo_baslik adres
          tr(v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.ad }}
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.soyad}}
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.telNo}}
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.email}}
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.tcKimlik}}
            td
              a(@click="ekleme_acik_adres=true") bilgileri gör
            td.tablo_detay {{ kargo_bilgileri.aliciBilgileri.adres}}
        button.kapat(@click="ekleme_acik_alici=false") X

  AdresBilgileriModalComponent(:acik="ekleme_acik_adres")
    template(#model_baslik)
      div.ekleme_baslik
        h1 Adres Bilgileri
        table.main
          tr
            th.tablo_baslik Adres_Turu
            th.tablo_baslik Adres
            th.tablo_baslik il
            th.tablo_baslik ilce
            th.tablo_baslik gonderici bilgileri
            th.tablo_baslik alici bilgileri
            th.tablo_baslik sube bilgileri
          tr(v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
            td.tablo_detay {{ kargo_bilgileri.adres.adresTuru }}
            td.tablo_detay {{ kargo_bilgileri.adres.adres}}
            td.tablo_detay {{ kargo_bilgileri.adres.il.ilAdi}}
            td.tablo_detay {{ kargo_bilgileri.adres.ilce.ilceadi}}
            td.tablo_detay {{ kargo_bilgileri.adres.gondericiBilgileri.id}}
            td.tablo_detay {{ kargo_bilgileri.adres.aliciBilgileri.id}}
            td.tablo_detay {{ kargo_bilgileri.adres.subeBilgileri.id}}
        button.kapat(@click="ekleme_acik_adres=false") X
  SubeBilgileriModalComponent(:acik="ekleme_acik_sube")
    template(#model_baslik)
      div.ekleme_baslik
        h1 Sube Bilgileri
        table.main
          tr
            th.tablo_baslik Ad
            th.tablo_baslik Adres
            th.tablo_baslik Telefon
            th.tablo_baslik sube yetkilisi
          tr(v-for="kargo_bilgileri in kargoStore.kargolar" @click="extracted(kargo_bilgileri)")
            td.tablo_detay {{ kargo_bilgileri.subeBilgileri.ad }}
            td.tablo_detay {{ kargo_bilgileri.subeBilgileri.adres_id}}
            td.tablo_detay {{ kargo_bilgileri.subeBilgileri.telNo}}
            td.tablo_detay {{ kargo_bilgileri.subeBilgileri.sube_yetkilisi}}
        button.kapat(@click="ekleme_acik_sube=false") X
</template>

<style scoped>
div.ekleme_baslik {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
button.kapat{
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
  color: #2005d7;
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
  background-color: rgba(112, 28, 28, 0.61);
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