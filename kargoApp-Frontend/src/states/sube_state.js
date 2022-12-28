import axios from "axios";
import {defineStore} from "pinia";

export const useSubeState = defineStore('subeler',
    {
        state: () => ({
            subeler: []
        }),
        actions: {
            ekle(sube) {
                axios.post('subeBilgileri/', sube)
                    .then((response) => {
                        const sube = response.data;
                        this.subeler.push(sube);
                    })
            },
            yukle() {
                axios.get("subeBilgileri/")
                    .then((response) => {
                        this.subeler = response.data;
                        console.log(response);
                    });
            },
            guncelle(sube) {
                axios.put("subeBilgileri/" + sube.id + "/", sube)
                    .then((response) => {
                        const sube = response.data;
                        const index = this.subeler.findIndex(sube => sube.id === sube.id);
                        this.subeler[index] = sube;
                    });
            },
            sil(sube) {
                axios.delete("subeBilgileri/" + sube.id + "/")
                    .then((response) => {
                        const index = this.subeler.findIndex(sube => sube.id === sube.id);
                        this.subeler.splice(index, 1);
                    });
            }
        }
    });