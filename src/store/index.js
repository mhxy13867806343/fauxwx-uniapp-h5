// stores/counter.js
import { defineStore } from 'pinia';

// pinia
export const useUserStore = defineStore("user", {
    persist: false,
    state: () => {
        return {
            styleNcss: "normal", // elder normal
        };
    },
    getters: {
        isElderlyOrientedMode: (state) => state.styleNcss === "elder" ? true : false
    },
    actions: {
        //设置
        setStyleNcss(styleNcss) {
            this.styleNcss = styleNcss;
        },
        //获取
        getStyleNcss() {
            return this.styleNcss;
        }
    }
});
