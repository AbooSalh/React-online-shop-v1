import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Menu } from "../../Context/MenuContext";
import { useContext } from "react";
import { WindowSize } from "../../Context/WindowContext";
export default function SideBar(params) {
  const menu = useContext(Menu);
  const windowS = useContext(WindowSize)
  const isOpen = menu.isOpen;
  console.log(windowS.windowSize);

  return (
    <div
      className="side-bar pt-3"
      style={{
        left: windowS.windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
        width: isOpen ? "240px" : "fit-content",
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
  );
}
