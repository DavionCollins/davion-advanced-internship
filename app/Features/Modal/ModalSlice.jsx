import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  setRegister: false,
  setForgotPassword: false,
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = !state.showModal;
      state.setRegister = false;
      state.setForgotPassword = false;
    },
    register: (state) => {
      state.setRegister = !state.setRegister;
      state.setForgotPassword = false;
    },
    forgot: (state) => {
      state.setForgotPassword = !state.setForgotPassword;
      state.setRegister = false;
    }
  },
});

export const { showModal, register, forgot } = ModalSlice.actions;

export default ModalSlice.reducer;
