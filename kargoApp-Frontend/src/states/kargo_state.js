import {defineStore} from "pinia";
import {useYukleniyorState} from "@/states/yukleniyor_state";
import axios from "axios";


export const useKargolarState = defineStore('kargolar', {
    state: () => ({
        kargolar: [],
        seciliKargo: null
    }),
    actions: {
        yukle() {
            const yukleme = useYukleniyorState();
            yukleme.yuklemeBasla();
            this.seciliKisi = null;
            axios.get("kargoBilgileri/")
                .then((response) => {
                    this.kargolar = response.data;
                    yukleme.yuklemeBitir();
                    console.log(response);
                });
        },
        ekle(kargo) {
            axios.post('kargoBilgileri/', kargo)
                .then((response) => {
                    const kargo = response.data;
                    this.kargolar.push(kargo);
                })
        },
        guncelle(kargo) {
            axios.put('kargoBilgileri/' + kargo.id, kargo)
                .then((response) => {
                        const kargo = response.data;
                        const index = this.kargolar.findIndex(k => k.id === kargo.id);
                        this.kargolar[index] = kargo;
                    }
                )
        },
        sil(kargo) {
            axios.delete('kargoBilgileri/' + kargo.id)
                .then((response) => {
                    const index = this.kargolar.findIndex(k => k.id === kargo.id);
                    this.kargolar.splice(index, 1);
                })
        }
    }
});