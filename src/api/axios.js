import axios from "axios";

// 나중에 requests.js로 분리
const API_BASE_URLS = {
    'RND': 'http://rnd.localhost/api',
    'KINSDB': 'http://kinsdb.localhost/api',
    'CLOUD': 'http://cloud.localhost/api',
}
const axiosApi = (url) => {
    const instance = axios.create({
        baseURL: url,
        timeout: 10000,
    });
    return instance
}

const onError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    throw error;
}

const onRequest = (config) => {
    const { method, url, headers = {}, data, params } = config;
    if (["post", "put", "patch"].includes(method?.toLowerCase() || "")) {
        if (!data) {
            return Promise.reject(new Error("요청 데이터가 없습니다"));
        }
    }
    const query = new URLSearchParams(params).toString();
    console.log(`[API] ${method?.toUpperCase()} ${url}?${query} | Request`);
    return Promise.resolve({ ...config, headers });
}

const onErrorRequest = (error) => {
    switch (true) {
        case Boolean(error.config):
        console.log("에러: 요청 실패", error);
        break;
        case Boolean(error.request):
        console.log("에러: 응답 없음", error);
        break;
        default:
        console.log("에러:", error);
        break;
    }
    return Promise.reject(error);
};

const onResponse = (response) => {
    const method = response.config.method;
    const url = response.config.url;
    const status = response.status;
    console.log(`[API] ${method?.toUpperCase()} ${url} | Request ${status}`)
    return response;
}

const onErrorResponse = (error) => {
    if (axios.isAxiosError(error)) {
        const message = error.message;
        const method = error.config?.method;
        const url = error.config?.url;
        const status = error.response?.status;
        const statusText = error.response?.statusText;

        console.log(`[API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`);
        switch (status) {
            case 400:
                onError(status, "잘못된 요청입니다.");
                break;
            case 401:
                onError(status, "인증 실패입니다.");
                break;
            case 403:
                onError(status, "권한이 없습니다.");
                break;
            case 404:
                onError(status, "찾을 수 없는 페이지입니다.");
                break;
            case 500:
                onError(status, "서버 오류입니다.");
                break;
            default:
                onError(status, `에러가 발생했습니다. ${error.message}`);
        }
    }
    else if (error instanceof Error && error.name === "TimeoutError") {
        console.log(`[API] | TimeoutError ${error.toString()}`);
        onError(0, "요청 시간이 초과되었습니다.");
    }
    else {
        console.log(`[API] | Error ${error.toString()}`);
        onError(0, `알 수 없는 오류가 발생했습니다. ${error.toString()}`);
    }
    return Promise.reject(error);
}


// 요청 & 응답 인터셉터 추가하기
const setInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest, onErrorRequest);
    axiosInstance.interceptors.response.use(onResponse, onErrorResponse);

    return axiosInstance;
}
export const rndInstance = setInterceptors(axiosApi(API_BASE_URLS.RND));
export const kinsdbInstance = setInterceptors(axiosApi(API_BASE_URLS.KINSDB));
export const cloudInstance = setInterceptors(axiosApi(API_BASE_URLS.CLOUD));