import { axiosInstance, axiosPrivateInstance } from "../api/api";

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const RESET_REGISTER_SUCCESS = 'RESET_REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';
export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_FAIL = 'REFRESH_FAIL';
export const SET_AUTH_LOADING = 'SET_AUTH_LOADING';
export const REMOVE_AUTH_LOADING = 'REMOVE_AUTH_LOADING';

// export const verify_auth = () => {
//     try {
//         const res = await fetch('/api/account/verify', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//             }
//         });

//         if (res.status === 200) {
//             dispatch({
//                 type: AUTHENTICATED_SUCCESS
//             });
//             dispatch(load_user());
//         } else {
//             dispatch({
//                 type: AUTHENTICATED_FAIL
//             });
//         }
//     } catch(err) {
//         dispatch({
//             type: AUTHENTICATED_FAIL
//         });
//     }
// }
export const load_user = () => async dispatch => {
    try {
        const res = await axiosPrivateInstance.get('user')
        console.log("user info : ", res)
        if (res.status === 200) {
            dispatch({type: LOAD_USER_SUCCESS, payload: res?.data});
        } else {
            dispatch({type: LOAD_USER_FAIL});
        }
    }
    catch(error) {
        console.log(error)
        dispatch({type: LOAD_USER_FAIL});
    }
};

export const request_refresh = () => async dispatch => {
    try {
        const res = await axiosInstance.post('refresh-token')

        if (res.status === 200) {
            dispatch({type: REFRESH_SUCCESS, payload: {access: res.data?.access}});
            dispatch(load_user());
            // dispatch(check_auth_status());
        } else {
            dispatch({type: REFRESH_FAIL});
        }
    }
    catch(err) {
        dispatch({type: REFRESH_FAIL});
    }
};

// export const register = () => async dispatch => {
//     try {
//         const res = await axiosPrivateInstance.get('user')
//         console.log(res);
//         if (res.status == 200) {
//             dispatch({type: LOAD_USER_SUCCESS, payload: res.json()})
//         } else {
//             dispatch({type: LOAD_USER_FAIL})
//         }

//     }
//     catch (error) {
//         dispatch({type: LOAD_USER_FAIL})
//     } 
// }

export const login = (email, password) => async dispatch => {
    try {
        const res = await axiosInstance.post('login', JSON.stringify({email, password}))
        console.log(res);
        if (res.status == 200) {
            dispatch({type: LOGIN_SUCCESS, payload: {access: res.data?.access}});
            dispatch(load_user());
        } else {
            dispatch({type: LOGIN_FAIL})
        }
    }
    catch (error) {
        dispatch({type: LOGIN_FAIL})
    } 
}

export const logout = () => async dispatch => {
    try {
        const res = await axiosPrivateInstance.post('logout')
        console.log(res);
        if (res.status == 200) {
            dispatch({type: LOGOUT_SUCCESS})
        } else {
            dispatch({type: LOGOUT_FAIL})
        }

    }
    catch (error) {
        dispatch({type: LOGOUT_FAIL})
    } 
}