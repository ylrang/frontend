import axios from "axios";
import { kinsdbInstance } from "./axios";

export const getRegDocs = (params) => {
    return kinsdbInstance.get('/regdocs', {params})
}

export const getReport = (id) => {
    return kinsdbInstance.get(`/report/${id}/`);
}