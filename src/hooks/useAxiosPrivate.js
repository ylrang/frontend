
import { axiosPrivateInstance } from "../api/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import { useSelector } from "react-redux";
import { store } from "../store/store";

export default function useAxiosPrivate() {
    const state = store.getState()
    const accessToken = state.auth.access
    const csrfToken = state.auth.csrf
    // const { accessToken, setAccessToken, csrftoken, user } = useAuth()
    // const refresh = useRefreshToken()
    useEffect(() => {
        const requestIntercept = axiosPrivateInstance.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    console.log("access token: ", accessToken)
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                    config.headers['X-CSRFToken'] = csrfToken
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        // const responseIntercept = axiosPrivateInstance.interceptors.response.use(
        //     response => response,
        //     async (error) => {
        //         const prevRequest = error?.config;
        //         // 토큰 갱신
        //         if ((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest?.sent) {
        //             prevRequest.sent = true; //무한 재요청 방지
        //             const { csrfToken: newCSRFToken, accessToken: newAccessToken } = await refresh();
        //             setAccessToken(newAccessToken);
        //             prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        //             prevRequest.headers['X-CSRFToken'] = newCSRFToken
        //             return axiosPrivateInstance(prevRequest)
        //         }
        //         return Promise.reject(error);
        //     }
        // )

        return () => {
            axiosPrivateInstance.interceptors.request.eject(requestIntercept)
            // axiosPrivateInstance.interceptors.response.eject(responseIntercept)
        }
    }, [accessToken])

    return axiosPrivateInstance
}