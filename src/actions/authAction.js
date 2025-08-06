import { axiosInstance, axiosPrivateInstance } from "../api/authApi";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LoggedIn_SUCCESS, LoggedIn_FAIL,REFRESH_SUCCESS, REFRESH_FAIL, SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from '../actions/types'

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
            dispatch({type: LOAD_USER_SUCCESS, payload: {user: res?.data}});
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
            dispatch({type: REFRESH_SUCCESS, payload: {accessToken: res.data.access, csrfToken: res.headers['x-csrftoken']}});
            dispatch(load_user());
        } else {
            dispatch({type: REFRESH_FAIL});
            dispatch(logout());
        }
    }
    catch(err) {
        dispatch({type: REFRESH_FAIL});
        dispatch(logout());
    }
};

export const login = (email, password) => async dispatch => {
    dispatch({type: SET_AUTH_LOADING});
    try {
        const res = await axiosInstance.post('login', JSON.stringify({email, password}))
        if (res.status == 200) {
            dispatch({type: LOGIN_SUCCESS, payload: {accessToken: res.data?.access, csrfToken: res.headers['x-csrftoken']}});
            dispatch(load_user());
        } else {
            dispatch({type: LOGIN_FAIL})
        }
    }
    catch (error) {
        dispatch({type: LOGIN_FAIL})
    }
    dispatch({type: REMOVE_AUTH_LOADING});
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