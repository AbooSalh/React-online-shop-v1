import axios from "axios";
import { useEffect, useState } from "react";
import { USER, USERS, baseUrl } from "../../API/Api";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
import Cookie from "cookie-universal";

export default function Users(params) {
  const [users, setUsers] = useState([]);
  const [cookies] = useCookies(["Bearer"]);
  const cookie = new Cookie();
  const token = cookie.get("Bearer");
  const [cellLoading, setCellLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [noUsers, setNoUsers] = useState(false);

  // current user
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log("Error fetching current user:", err));
  }, []);

  // fetch users
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USERS}`, {
        headers: {
          Authorization: `Bearer ${cookies.Bearer}`,
        },
      })
      .then((response) => {
        console.log("Fetched users:", response.data);
        if (response.data && response.data.length === 1) {
          setNoUsers(true);
        } else {
          setUsers(response.data);
        }
      })
      .then(() => {
        console.log("Setting cellLoading to false");
        setCellLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching users:", err);
      });
  }, []);

  // user filter
  const userFilter = users.filter((user) => user.id !== currentUser?.id);
  const usersShow = userFilter.map((user) => (
    <tr key={user.id} id={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <Link to={`${user.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          <FontAwesomeIcon
            fontSize={"19px"}
            color="red"
            icon={faTrash}
            cursor={"pointer"}
            onClick={() => handleDelete(user.id)}
          />
        </div>
      </td>
    </tr>
  ));

  // handle delete
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${USER}/${id}`);
      document.getElementById(id).remove();
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  }

  console.log("users:", users);
  console.log("noUsers:", noUsers);
  console.log("cellLoading:", cellLoading);

  return (
    <div className="w-100 bg-white">
      <table className="table table-striped table-hover table-bordered m-3 p-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {cellLoading ? (
            <tr>
              <td colSpan={4} className="text-center">
                loading...
              </td>
            </tr>
          ) : noUsers ? (
            <tr>
              <td colSpan={4} className="text-center">
                no users
              </td>
            </tr>
          ) : (
            usersShow
          )}
        </tbody>
      </table>
    </div>
  );
}
