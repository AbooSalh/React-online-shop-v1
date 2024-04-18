import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import TopBar from "../../components/dashboard/TopBar";
import "./dashboard.css";
export default function Dashboard(params) {
  return (
    <div className="p-relative dashboard d-flex gap-1">
      <TopBar />
      <div
        className="d-flex"
        style={{
          marginTop: "70px",
          width: "100%",
        }}
      >
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
