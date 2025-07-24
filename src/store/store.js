
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({ reducer: rootReducer });