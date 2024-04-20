import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { LOGOUT, USER } from "../../API/Api";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../API/axios";

export default function TopBar(params) {
  const menu = useContext(Menu);
  const navigate = useNavigate();
  const [userName, setuserName] = useState();
  const cookie = Cookie();
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((res) => {
        setuserName(res.data.name);
      })
      .catch(() => navigate("/login", { replace: true }));
  }, []);
  async function handleLogout() {
    try {
      Axios
        .get(`/${LOGOUT}`)
        .then(cookie.remove("Bearer"))
        .then((window.location.pathname = "login"));
    } catch (error) {}
  }
  return (
    <div className="top-bar d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center justify-content-between flex-row gap-5 fs-4">
        <h1 className="fs-3 poin">E-commerce</h1>
        <FontAwesomeIcon
          icon={faBars}
          cursor={"pointer"}
          onClick={() => menu.setIsOpen((prev) => !prev)}
        />
      </div>
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {userName}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
