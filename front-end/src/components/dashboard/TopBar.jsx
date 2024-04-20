import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import axios from "axios";
import {LOGOUT, USER, baseUrl } from "../../API/Api";
import Cookie from "cookie-universal";

export default function TopBar(params) {
  const menu = useContext(Menu);
  const [userName, setuserName] = useState();
  const cookie = Cookie();
  const token = cookie.get("Bearer");
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setuserName(res.data.name);
      });
  }, []);
  async function handleLogout() {
    try {
      axios.get(`${baseUrl}/${LOGOUT}` ,{headers:{
        Authorization: "Bearer " + token
      }}).then(cookie.remove("Bearer")).then((window.location.pathname = "login"));
    } catch (error) {}
  }
  return (
    <div className="top-bar d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between flex-row gap-5 fs-4">
          {" "}
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
