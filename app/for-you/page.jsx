import { FaSearch } from "react-icons/fa";
import "../../styles/ForYou.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaHighlighter } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdExitToApp } from "react-icons/md";

const page = () => {
  return (
    <>
      <div id="for-you">
        <div className="wrapper">
          <div className="search__background">
            <div className="search__wrapper">
              <figure>
                <img src={logo} alt="" />
              </figure>
              <div className="search__content">
                <div className="search">
                  <div className="search__input--wrapper">
                    <input
                      type="text"
                      placeholder="Search for Books"
                      className="search__input"
                    />
                    <div className="seicon--wrapper">
                      <FaSearch />
                    </div>
                  </div>
                </div>
                <div className="sidebar__toggle--btn">
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__overlay sidebar__overlay--hidden"></div>
        <div className="sidebar sidebar--closed">
          <div className="sidebar__logo">
            <Image src={logo} alt="logo" className="sidebar__logo--img" />
          </div>
          <div className="sidebar__wrapper">
            <div className="sidebar__top">
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <FaHome />
                </div>
                <div className="sidebar__link--text">For You</div>
              </a>
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <CiBookmark />
                </div>
                <div className="sidebar__link--text">Library</div>
              </a>
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <FaHighlighter />
                </div>
                <div className="sidebar__link--text">Highlights</div>
              </a>
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <FaSearch />
                </div>
                <div className="sidebar__link--text">Search</div>
              </a>
            </div>
            <div className="sidebar__bottom">
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <FaGear />
                </div>
                <div className="sidebar__link--text">Settings</div>
              </a>
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <HiQuestionMarkCircle />
                </div>
                <div className="sidebar__link--text">Help & Support</div>
              </a>
              <a href="/for-you" className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <MdExitToApp />
                </div>
                <div className="sidebar__link--text">Logout</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
