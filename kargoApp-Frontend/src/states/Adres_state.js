import {defineStore} from "pinia";
import {useYukleniyorState} from "@/states/yukleniyor_state";
import axios from "axios";


export const useAdreslerState = defineStore('adresler', {
    state: () => ({
        adresler: [],
        seciliAdres: null
    }),
    actions: {
        yukle() {
            const yukleme = useYukleniyorState();
            yukleme.yuklemeBasla();
            this.seciliAdres = null;
            axios.get("adres/")
                .then((response) => {
                    this.adresler = response.data;
                    yukleme.yuklemeBitir();
                    console.log(response);
                });
        },
        ekle(kargo) {
            axios.post('adres/', kargo)
                .then((response) => {
                    const adres = response.data;
                    this.adresler.push(adres);
                })
        },
        guncelle(adres) {
            axios.put("adres/" + adres.id + "/", adres)
                .then((response) => {
                    const adres = response.data;
                    const index = this.adresler.findIndex(adres => adres.id === adres.id);
                    this.adresler[index] = adres;
                });
        },
        sil(adres) {
            axios.delete("adres/" + adres.id + "/")
                .then((response) => {
                    const index = this.adresler.findIndex(adres => adres.id === adres.id);
                    this.adresler.splice(index, 1);
                });
        }
    }
});