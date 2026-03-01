import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../app/Features/Modal/ModalSlice'
import authReducer from '../app/Features/Auth/AuthSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        auth: authReducer,
    },
})