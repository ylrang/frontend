import axios from "axios"
import { store } from "../store/store"
const API_URL = "http://localhost:8000/api"

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

const privateInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})

privateInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const csrfToken = state.auth.csrfToken;
        const accessToken = state.auth.accessToken;
        if (accessToken && csrfToken) {
            console.log("access token: ", accessToken)
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.headers['X-CSRFToken'] = csrfToken
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const axiosPrivateInstance = privateInstance;