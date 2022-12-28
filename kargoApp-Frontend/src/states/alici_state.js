import axios from "axios";
import {defineStore} from "pinia";

export const useAliciState = defineStore('alicilar',
    {
        state: () => ({
            alicilar: []
        }),
        actions: {
            ekle(alici) {
                axios.post('aliciBilgileri/', alici)
                    .then((response) => {
                        const alici = response.data;
                        this.alicilar.push(alici);
                    })
            },
            yukle() {
                axios.get("aliciBilgileri/")
                    .then((response) => {
                        this.alicilar = response.data;
                        console.log(response);
                    });
            },
            guncelle(alici) {
                axios.put("aliciBilgileri/" + alici.id + "/", alici)
                    .then((response) => {
                        const alici = response.data;
                        const index = this.alicilar.findIndex(alici => alici.id === alici.id);
                        this.alicilar[index] = alici;
                    });
            },
            sil(alici) {
                axios.delete("aliciBilgileri/" + alici.id + "/")
                    .then((response) => {
                        const index = this.alicilar.findIndex(alici => alici.id === alici.id);
                        this.alicilar.splice(index, 1);
                    });
            }
        }
    });