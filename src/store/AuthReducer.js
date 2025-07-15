import { REGISTER_SUCCESS, REGISTER_FAIL, RESET_REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_SUCCESS, LOAD_USER_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL,REFRESH_SUCCESS, REFRESH_FAIL, SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from './AuthAction';

const initialState = {
    user: null,
    isAuthenticated: false,
    accessToken: null,
};

const authReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, isAuthenticated: true, accessToken: action.payload.access}
        case LOGIN_FAIL:
            return {...state, isAuthenticated: false}
        case LOGOUT_SUCCESS:
            return {...state, isAuthenticated: false, user: null, accessToken: null}
        case LOGOUT_FAIL:
            return {...state}
        case LOAD_USER_SUCCESS:
            return {...state, user: action.payload.user}
        case LOAD_USER_FAIL:
            return {...state, user: null}
        case REFRESH_SUCCESS:
            return {...state, accessToken: action.payload.access}
        case REFRESH_FAIL:
            return {...state, isAuthenticated: false, user: null, accessToken: null}
        default:
            return state;
    };
};

export default authReducer;