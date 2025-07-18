import { REGISTER_SUCCESS, REGISTER_FAIL, RESET_REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LoggedIn_SUCCESS, LoggedIn_FAIL,REFRESH_SUCCESS, REFRESH_FAIL, SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from './AuthAction';

const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    accessToken: null,
    csrfToken: null,
};

const authReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state}
        case REGISTER_FAIL:
            return {...state}
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true, accessToken: action.payload.accessToken, csrfToken: action.payload.csrfToken}
        case LOGIN_FAIL:
            return {...state}
        case LOGOUT_SUCCESS:
            return {...state, isLoggedIn: false, user: null, accessToken: null, csrfToken: null}
        case LOGOUT_FAIL:
            return {...state}
        case LOAD_USER_SUCCESS:
            return {...state, isLoggedIn: true, user: action.payload.user}
        case LOAD_USER_FAIL:
            return {...state, isLoggedIn: false, user: null}
        case REFRESH_SUCCESS:
            return {...state, isLoggedIn: false, accessToken: action.payload.accessToken, csrfToken: action.payload.csrfToken}
        case REFRESH_FAIL:
            return {...state, isLoggedIn: false, user: null}
        case SET_AUTH_LOADING:
            return {...state, loading: true}
        case REMOVE_AUTH_LOADING:
            return {...state, loading: false}
        default:
            return state;
    };
};

export default authReducer;