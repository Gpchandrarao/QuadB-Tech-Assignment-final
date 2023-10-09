import Cookies from "js-cookie";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import "./index.css";

const Header = (props) => {
  const onClickLogOut = () => {
    const { history } = this.props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };
  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="nav-mobile-view">
          <h1 className="nav-heading">Job Search</h1>
          <ul className="nav-mobile-button-container">
            <li className="nav-mobile-link-items">
              <button
                className="nav-mobile-button"
                type="button"
                onClick={onClickLogOut}
              >
                <AiFillHome className="nav-mobile-icons" />
              </button>
            </li>
            <li className="nav-mobile-link-items">
              <button className="nav-mobile-button">
                <BsBriefcaseFill className="nav-mobile-icons" />
              </button>
            </li>
            <li className="nav-mobile-link-items">
              <button className="nav-mobile-button">
                <FiLogOut className="nav-mobile-icons" />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-desktop-view-container">
          <h1 className="nav-heading">Job Search</h1>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <button
                className="logout-button"
                type="button"
                onClick={onClickLogOut}
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
