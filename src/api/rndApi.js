import axios from "axios";
import { rndInstance } from "./axios";

export const getRegs = (params) => {
    return rndInstance.get('/reginfo', {params})
}

export const getReg = (id) => {
    return rndInstance.get(`/reginfo/${id}/`);
}