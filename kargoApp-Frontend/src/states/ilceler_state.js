import axios from "axios";
import {defineStore} from "pinia";
export const useIlcelerState = defineStore('ilceler',
    {
        state: () => ({
            ilceler: []
        }),
        actions: {
            ekle(ilce) {
                axios.post('ilce/', ilce)
                    .then((response) => {
                        const ilce = response.data;
                        this.ilceler.push(ilce);
                    })
            },
            yukle() {
                axios.get("ilce/")
                    .then((response) => {
                        this.ilceler = response.data;
                        console.log(response);
                    });
            },
            guncelle(ilce) {
                axios.put("ilce/" + ilce.id + "/", ilce)
                    .then((response) => {
                        const ilce = response.data;
                        const index = this.ilceler.findIndex(ilce => ilce.id === ilce.id);
                        this.ilceler[index] = ilce;
                    });
            },
            sil(ilce) {
                axios.delete("ilce/" + ilce.id + "/")
                    .then((response) => {
                        const index = this.ilceler.findIndex(ilce => ilce.id === ilce.id);
                        this.ilceler.splice(index, 1);
                    });
            }
        }

    });