'use client'
import { GiWhiteBook } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaHighlighter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdExit } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/app/Features/Modal/ModalSlice";
import { logOutUser } from "@/app/Features/Auth/AuthSlice";

const Siderbar = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal)
  return (
    <div>
      <div className="side-bar__wrapper">
        <div className="side-bar">
          <div className="side-bar__content">
            <h2 className="side-bar__title">
              {" "}
              <GiWhiteBook />
              Summarist
            </h2>
            <div className="side-bar__items">
              <div className="side-bar__top">
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <FaHome /> For You
                </a>
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <FaBookmark /> My Library
                </a>
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <FaHighlighter /> Highlights
                </a>
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <FaSearch /> Search
                </a>
              </div>
              <div className="side-bar__bottom">
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <FaGear /> Settings
                </a>
                <a href="" className="side-bar__link">
                  <div className="side-bar__link--line"></div>
                  <IoIosHelpCircleOutline /> Help & Support
                </a>
                {user ? <a href="" className="side-bar__link" onClick={(e) => {e.preventDefault(); dispatch(logOutUser(user))}}>
                  <div className="side-bar__link--line"></div>
                  <IoMdExit /> Logout
                </a> : <a href="" className="side-bar__link" onClick={(e) => {e.preventDefault(); dispatch(showModal());}}>
                  <div className="side-bar__link--line"></div>
                  <IoMdExit /> Login
                </a>}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
