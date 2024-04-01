import axios from "axios";
import { useEffect, useState } from "react";
import { USERS, baseUrl } from "../../API/Api";
import { useCookies } from "react-cookie";
import Logout from "../auth/Logout";
export default function Users(params) {
  const [users, setUsers] = useState([]);
  const [cookies, setCookie] = useCookies(["Bearer"]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`, {
        headers: {
          Authorization: `Bearer ${cookies.Bearer}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Users page</h1>
      <Logout />
    </>
  );
}
