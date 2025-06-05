import { useState, useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../atoms";

export const useAxios = (opts) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [trigger, setTrigger] = useState(0);
    const axiosInstance = axios.create({
        baseURL: "http://localhost/api",
        timeout: 60000,
        headers: {'X-Custom-Header': 'foobar'},
    });
    axiosInstance.interceptors.request.use(
        (config) =>  {
                setLoading(true);
                console.log("axios config : ", config);
            return config;
        },
        (error) => {
                setLoading(true);
                console.log("axios config : ", error);
            return Promise.reject(error);
        },
    );
    axiosInstance.interceptors.response.use(
        (response) =>  {
                setLoading(true);
                console.log("axios config : ", response);
            return response;
        },
        (error) => {
                setLoading(true);
                console.log("axios config : ", error);
            return Promise.reject(error);
        },
    );

    const refetch = () => {
        setResponse([...response]);
        setError(error);
        setTrigger(Date.now());
    };

    const axiosData = async (opts) => {
        axiosInstance(opts)
            .then((data) => {
                console.log("데이터 가져오기 성공");
                setResponse(data)
            })
            .catch ((error) => {
                console.log("데이터 가져오기 실패");
                setError(error);
            })
    };

    useEffect(() => {
        axiosData(opts);
    }, [trigger]);

    return {response, error, refetch};
};