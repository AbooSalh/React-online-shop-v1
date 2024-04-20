import axios from "axios";
import { useEffect, useState } from "react";
import { USER, USERS, baseUrl, roleIdentifier } from "../../API/Api";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
export default function Users(params) {
  const [users, setUsers] = useState([]);
  const [cookies] = useCookies(["Bearer"]);
  const [cellLoading, setCellLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [noUsers, setNoUsers] = useState(false);
  // current user
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => new Error("Error fetching current user:", err));
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
        if (response.data && response.data.length === 1) {
          setNoUsers(true);
        } else {
          setUsers(response.data);
        }
      })
      .then(() => {
        setCellLoading(false);
      })
      .catch((err) => {});
  }, []);

  // user filter
  const usersShow = users.map((user) => (
    <tr key={user.id} id={user.id}>
      <td>{user.id}</td>
      <td>
        {user?.name === currentUser?.name ? user?.name + " (You) " : user?.name}
      </td>
      <td>{user?.email}</td>
      <td>{roleIdentifier[user?.role]}</td>
      <td>
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <Link to={`${user.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentUser?.name !== user?.name && (
            <FontAwesomeIcon
              fontSize={"19px"}
              color="red"
              icon={faTrash}
              cursor={"pointer"}
              onClick={() => handleDelete(user.id)}
            />
          )}
        </div>
      </td>
    </tr>
  ));

  // handle delete
  async function handleDelete(id) {
    if (currentUser.id !== id) {
      try {
        const res = await Axios.delete(`${USER}/${id}`);
        document.getElementById(id).remove();
      } catch (error) {
        new Error("Error deleting user:", error);
      }
    }
  }
  return (
    <div className="w-100 bg-white">
      <div className="d-flex align-items-center justify-content-between m-4">
        <h1>Users page</h1>
        <Link to="/dashboard/user/add" className="btn btn-primary ">
          add user
        </Link>
      </div>
      <table
        className="table table-striped table-hover table-bordered p-3"
        style={{
          width: "95%",
          margin: "20px auto ",
        }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {cellLoading ? (
            <tr>
              <td colSpan={5} className="text-center">
                loading...
              </td>
            </tr>
          ) : noUsers ? (
            <tr>
              <td colSpan={5} className="text-center">
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
