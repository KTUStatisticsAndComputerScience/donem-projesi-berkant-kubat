import axios from "axios";
import {defineStore} from "pinia";
import {useYukleniyorState} from "@/states/yukleniyor_state";

export const useIllerState = defineStore('iller',
    {
        state: () => ({
            iller: []
        }),
        actions: {
            ekle(il) {
                axios.post('il/', il)
                    .then((response) => {
                        const il = response.data;
                        this.iller.push(il);
                    })
            },
            yukle() {
                axios.get("il/")
                    .then((response) => {
                        this.iller = response.data;
                        console.log(response);
                    });
            },
            guncelle(il) {
                axios.put("il/" + il.id + "/", il)
                    .then((response) => {
                        const il = response.data;
                        const index = this.iller.findIndex(il => il.id === il.id);
                        this.iller[index] = il;
                    });
            },
            sil(il) {
                axios.delete("il/" + il.id + "/")
                    .then((response) => {
                        const index = this.iller.findIndex(il => il.id === il.id);
                        this.iller.splice(index, 1);
                    });
            }
        }

    });