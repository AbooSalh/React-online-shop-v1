import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import TopBar from "../../components/dashboard/TopBar";
import "./dashboard.css";
export default function Dashboard(params) {
  return (
    <div className="p-relative dashboard">
      <TopBar />
      <SideBar />
      <Outlet />
    </div>
  )
}
