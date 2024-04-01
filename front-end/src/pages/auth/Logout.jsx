import axios from "axios";
import { LOGOUT, baseUrl } from "../../API/Api";
import { useCookies } from "react-cookie";

export default function Logout(params) {
    const [cookie] = useCookies([`Bearer`]);
  async function handleLogout() {
    try {
        axios
          .get(`${baseUrl}/${LOGOUT}`, {
            headers: {
              Authorization: "Bearer " + cookie.Bearer,
            },
          })
    } catch (error) {}
  }
  return <button onClick={handleLogout}>Logout</button>;
}
