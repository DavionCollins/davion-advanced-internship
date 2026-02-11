import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";

const Modal = () => {
  return (
    <>
      <div className="overlay"></div>

      <div className="overlay-hidden"></div>
      <div className="modal--wrapper">
        <div className="modal">
          <div className="modal__content">
            <h2 className="modal__title">Login To Summarist</h2>
            <div className="modal__btns">
              <button className="modal__login-btn">
                <figure className="btn__mask">
                  <div className="btn__icon">
                    <FaRegUser />

                  </div>
                </figure>
                <div className="modal__guest-login">Login as a Guest</div>
              </button>
              <div className="auth__separator">or</div>
              <button className="modal__login-btn google__login">
                <figure className="btn__mask btn__mask--google">
                  <div className="btn__icon">
                    <FcGoogle />
                  </div>
                </figure>
                <div className="modal__guest-login ">Login with Google</div>
              </button>
            </div>
            <form className="modal__login--form">
              <input
                type="email"
                placeholder="Email"
                className="login__email"
              />
              <input
                type="password"
                placeholder="Password"
                className="login__password"
              />
              <button className="login__submit btn">Submit</button>
            </form>
            <div className="modal__bottom">
              <div className="modal__register">Don't have an account?</div>
              <div className="modal__forgot__password">Forgot Password</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
