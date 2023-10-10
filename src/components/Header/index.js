import Cookie from "js-cookie";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";

import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    Cookie.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };
  return (
    <nav className="nav-container">
      <div className="nav">
        <div className="nav-mobile-view">
          <h1 className="nav-heading">Job Search</h1>
          <ul className="nav-mobile-button-container">
            <Link to="/login">
              <li className="nav-mobile-link-items">
                <button
                  className="nav-mobile-button"
                  type="button"
                  onClick={onClickLogout}
                >
                  <AiFillHome className="nav-mobile-icons" />
                </button>
              </li>
            </Link>
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
            <Link to="/login">
              <li className="nav-menu-item">
                <button
                  className="logout-button"
                  type="button"
                  onClick={onClickLogout}
                >
                  LogOut
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
