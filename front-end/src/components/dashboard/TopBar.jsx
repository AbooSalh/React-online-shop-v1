import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";

export default function TopBar(params) {
  const menu = useContext(Menu);
  return (
    <div className="top-bar d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-5">
        <h1 className="fs-3 poin">E-commerce</h1>
        <FontAwesomeIcon
          icon={faBars}
          cursor={"pointer"}
          onClick={()=> menu.setIsOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
}
