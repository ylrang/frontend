import axios from "axios";
import { store } from "../store/store";
import { request_refresh, logout } from "../actions/authAction";

const API_URL = "http://auth.127.0.0.1.nip.io/api"

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosPrivateInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosPrivateInstance.interceptors.request.use(
    (config) => {
        const { accessToken, csrfToken } = store.getState().auth;
        if (!config.headers["Authorization"] && accessToken && csrfToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.headers['X-CSRFToken'] = csrfToken;
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosPrivateInstance.interceptors.response.use(
    response => {
        return response
    },
    async (error) => {
        const prevRequest = error?.config;
        // 토큰 갱신
        if ((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest?.sent) {
            prevRequest.sent = true; //무한 재요청 방지
            
            await store.dispatch(request_refresh());
            const { accessToken, csrfToken } = store.getState().auth;
            prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            prevRequest.headers['X-CSRFToken'] = csrfToken
            
            return axiosPrivateInstance(prevRequest)
            // } catch (err) {
            //     store.dispatch(logout());
            //     return Promise.reject(err);
            // }
        }
        store.dispatch(logout());
        return Promise.reject(error);
    }
)