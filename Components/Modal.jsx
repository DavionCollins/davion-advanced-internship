"use client";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { showModal, register, forgot } from "@/app/Features/Modal/ModalSlice";
import {
  loginUser,
  loginwithGoogle,
  signUpUser,
  signInGuest,
  resetPassword,
} from "@/app/Features/Auth/AuthSlice";
import { useState } from "react";

const Modal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modal = useSelector((state) => state.modal.showModal);
  const isRegister = useSelector((state) => state.modal.setRegister);
  const isForgotPassword = useSelector(
    (state) => state.modal.setForgotPassword,
  );
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  if (!modal) return null;
  return (
    <>
      <div className="overlay"></div>

      <div className="overlay-hidden"></div>
      <div className="modal--wrapper">
        <div className="modal">
          <div className="modal__content">
            {error && <div className="modal__error">{error}</div>}
            <h2 className="modal__title">
              {isForgotPassword
                ? "Reset Password"
                : isRegister
                  ? "Create an Account"
                  : "Login to Summarist"}
            </h2>

            {isForgotPassword ? null : isRegister ? null : (
              <>
                <div className="modal__btns">
                  <button className="modal__login-btn">
                    <figure className="btn__mask">
                      <div className="btn__icon">
                        <FaRegUser />
                      </div>
                    </figure>

                    <div
                      className="modal__guest-login"
                      onClick={async () => {
                        await dispatch(signInGuest()).unwrap();
                        dispatch(showModal());
                      }}
                    >
                      {loading && (
                        <ImSpinner8 className="btn__loading--spinner" />
                      )}
                      {!loading && "Login as a Guest"}
                    </div>
                  </button>
                  <div className="auth__separator">or</div>
                  <button className="modal__login-btn google__login">
                    <figure className="btn__mask btn__mask--google">
                      <div className="btn__icon">
                        <FcGoogle />
                      </div>
                    </figure>
                    <div
                      className="modal__guest-login"
                      onClick={ async () => {await dispatch(loginwithGoogle()).unwrap(); dispatch(showModal())}}
                    >
                      {loading && (
                        <ImSpinner8 className="btn__loading--spinner" />
                      )}
                      {!loading && "Login with Google"}
                    </div>
                  </button>
                </div>
              </>
            )}

            <form
              className="modal__login--form"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                setPassword("");
              }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="login__email"
                onChange={(e) => setEmail(e.target.value)}
              />

              {isForgotPassword ? null : (
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  className="login__password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}

              {isRegister ? (
                <button
                  className="login__submit btn"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(signUpUser({ email, password }));
                  }}
                >
                  {loading && <ImSpinner8 className="btn__loading--spinner" />}
                  {!loading && "Register"}
                </button>
              ) : isForgotPassword ? (
                <button
                  className="login__submit btn"
                  onClick={async () => {
                    await dispatch(resetPassword({ email })).unwrap();
                    dispatch(showModal());
                  }}
                >
                  {" "}
                  {loading && <ImSpinner8 className="btn__loading--spinner" />}
                  {!loading && "Submit"}
                </button>
              ) : (
                <button
                  className="login__submit btn"
                  onClick={async () => {
                    await dispatch(loginUser({ email, password })).unwrap();
                    dispatch(showModal());
                  }}
                >
                  {loading && <ImSpinner8 className="btn__loading--spinner" />}
                  {!loading && "Submit"}
                </button>
              )}
            </form>
            <div className="modal__bottom">
              <div
                className="modal__register"
                onClick={() => dispatch(register())}
              >
                {isRegister
                  ? "Login"
                  : isForgotPassword
                    ? "Don't have an account?"
                    : "Don't have an Account ?"}
              </div>

              <div
                className="modal__forgot__password"
                onClick={() => dispatch(forgot())}
              >
                {isForgotPassword ? "Login" : "Forgot Password"}
              </div>
            </div>
            <div
              className="modal__exit-btn"
              onClick={() => dispatch(showModal(false))}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
