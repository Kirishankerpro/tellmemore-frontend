import "../assets/style/Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Logo from "../assets/img/tellmemore.svg";

const Header = ({ dark, setDark, token, darkToken }) => {
  const navigate = useNavigate();

  const darkmode = () => {
    if (dark === true) {
      setDark(false);
    }
    if (dark === false) {
      setDark(true);
      Cookies.set("darkToken", "hellodarktoken", {
        expires: 10,
      });
    }
    window.location.reload(true);
  };

  const deleteToken = () => {
    Cookies.remove("adminToken");
  };

  return token ? (
    <div className={darkToken ? "header-dark" : "header-white"}>
      <div className="header-items">
        <div className="header-logo">
          <Link to="/" className="header-logo-items">
            <img src={Logo} alt="Tellmemore logo" />
            <h2> TellMeMore</h2>
          </Link>
        </div>
        <div className="header-buttons">
          {darkToken ? (
            <button
              className="whitemode-button"
              onClick={() => {
                darkmode();
                Cookies.remove("darkToken");
              }}
            >
              Whitemode
            </button>
          ) : (
            <button
              className="darkmode-button"
              onClick={() => {
                darkmode();
              }}
            >
              Darkmode
            </button>
          )}

          <NavLink to="/backoffice" activeclassname="active">
            <button id="admin"> Admin </button>
          </NavLink>

          <button
            id="header-deconnection"
            onClick={() => {
              deleteToken();
              navigate("/");
              window.location.reload(true);
            }}
          >
            Deconnexion
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className={darkToken !== null ? "header-dark" : "header-white"}>
      <div className="header-items">
        <div className="header-logo">
          <Link to="/" className="header-logo-items">
            <img src={Logo} alt="Tellmemore logo" />
            <h2> TellMeMore</h2>
          </Link>
        </div>
        <div className="header-buttons">
          {darkToken ? (
            <button
              className="whitemode-button"
              onClick={() => {
                darkmode();
                Cookies.remove("darkToken");
              }}
            >
              Whitemode
            </button>
          ) : (
            <button
              className="darkmode-button"
              onClick={() => {
                darkmode();
              }}
            >
              Darkmode
            </button>
          )}

          <NavLink to="/backoffice/login" activeclassname="active">
            <button> Backoffice </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
