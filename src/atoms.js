import { atom, selector } from 'recoil';
import { rndInstance } from './api/axios';

export const isDarkMode = atom({
    key: "dark",
    default: localStorage.getItem("mode") === "dark",
});

export const themeColor = atom({
    key: "color",
    default: localStorage.getItem("color") || "green",
});

export const loadingState = atom({
  key: "loading",
  default: false,
});


export const getRegInfo = selector({
    key: "RegInfo",
    get: (page) => async ({ get }) => {
        const params = {}
        if (page) params.page = page;
        const response = await rndInstance.get('/reginfo/', {params});
        return response.data;
    },
});

export const getRegInfoDetail = selector({
    key: "RegInfoDetail",
    get: (id) => async ({ get }) => {
        const response = await rndInstance.get(`/reginfo/${id}`);
        return response.data;
    },
});