import { LOGOUT } from "../../API/Api";
import { Axios } from "../../API/axios";

export default function Logout(params) {
  async function handleLogout() {
    try {
      Axios.get(`/${LOGOUT}`).then((window.location.pathname = "login"));
    } catch (error) {}
  }
  return <button onClick={handleLogout}>Logout</button>;
}
