import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { useContext } from "react";
import { WindowSize } from "../../Context/WindowContext";
export default function SideBar(params) {
  const menu = useContext(Menu);
  const windowS = useContext(WindowSize);
  const isOpen = menu.isOpen;
  // navigation

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
        <NavLink
          to={"users"}
          className="d-flex align-items-center gap-2 side-bar-link fs-5 mt-3"
          style={{
            padding: isOpen ? "5px 5px" : "10px",
          }}
        >
          <FontAwesomeIcon icon={faUsers} />
          <p
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            Users
          </p>
        </NavLink>
      </div>
    </>
  );
}
