import Cookie from "cookie-universal";
import { Outlet } from "react-router-dom";
export default function RequireBack(params) {
  const cookie = Cookie();
  const token = cookie.get("Bearer");
  return token ? window.history.back() : <Outlet />;
}
