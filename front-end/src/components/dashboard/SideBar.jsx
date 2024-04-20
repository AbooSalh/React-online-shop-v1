import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { useContext, useEffect, useState } from "react";
import { WindowSize } from "../../Context/WindowContext";
import { Axios } from "../../API/axios";
import { USER } from "../../API/Api";
import { Links } from "../NavLink";

export default function SideBar(params) {
  const menu = useContext(Menu);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const windowS = useContext(WindowSize);
  const isOpen = menu.isOpen;

  // navigation
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, []);

  const asideLinks = Links.map((link, i) => {
    return (
      user &&
      link.role.includes(user.role) && (
        <NavLink
          key={i}
          to={link.path}
          className="d-flex align-items-center gap-2 side-bar-link fs-5 mt-3"
          style={{
            padding: isOpen ? "5px 5px" : "10px",
          }}
        >
          <FontAwesomeIcon icon={link.icon} />
          <p
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            {link.name}
          </p>
        </NavLink>
      )
    );
  });

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.2)",
          display: windowS.windowSize < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3"
        style={{
          left: windowS.windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
          width: isOpen ? "240px" : "fit-content",
          position: windowS.windowSize < "768" ? "fixed" : "sticky",
        }}
      >
        {asideLinks}
      </div>
    </>
  );
}
