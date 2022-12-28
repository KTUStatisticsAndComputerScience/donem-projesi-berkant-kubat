import axios from "axios";
import {defineStore} from "pinia";

export const useGondericiState = defineStore('gondericiler',
    {
        state: () => ({
            gondericiler: []
        }),
        actions: {
            ekle(gonderici) {
                axios.post('gondericiBilgileri/', gonderici)
                    .then((response) => {
                        const gonderici = response.data;
                        this.gondericiler.push(gonderici);
                    })
            },
            yukle() {
                axios.get("gondericiBilgileri/")
                    .then((response) => {
                        this.gondericiler = response.data;
                        console.log(response);
                    });
            },
            guncelle(gonderici) {
                axios.put("gondericiBilgileri/" + gonderici.id + "/", gonderici)
                    .then((response) => {
                        const gonderici = response.data;
                        const index = this.gondericiler.findIndex(gonderici => gonderici.id === gonderici.id);
                        this.gondericiler[index] = gonderici;
                    });
            },
            sil(gonderici) {
                axios.delete("gondericiBilgileri/" + gonderici.id + "/")
                    .then((response) => {
                        const index = this.gondericiler.findIndex(gonderici => gonderici.id === gonderici.id);
                        this.gondericiler.splice(index, 1);
                    });
            }
        }
    });