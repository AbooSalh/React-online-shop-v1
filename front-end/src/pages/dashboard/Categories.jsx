import { useEffect, useState } from "react";
import { CAT, USER, roleIdentifier } from "../../API/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
import Table from "./Table";
export default function Categories() {
  const [users, setUsers] = useState([]);
  const [cellLoading, setCellLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [noUsers, setNoUsers] = useState(false);
  // fetch users
  useEffect(() => {
    Axios.get(`/${CAT}`)
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
  const header = ["title", "image"];
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
            />
          )}
        </div>
      </td>
    </tr>
  ));

//   // handle delete
//   async function handleDelete(id) {
//     if (currentUser.id !== id) {
//       try {
//         const res = await Axios.delete(`${USER}/${id}`);
//         document.getElementById(id).remove();
//       } catch (error) {
//         new Error("Error deleting user:", error);
//       }
//     }
//   }
  return (
    <div className="w-100 bg-white">
      <div className="d-flex align-items-center justify-content-between m-4">
        <h1>categories page</h1>
        <Link to="/dashboard/user/add" className="btn btn-primary ">
          add user
        </Link>
      </div>
      <Table
        headers={header}
        data={{
          cellLoading: cellLoading,
          users: usersShow,
          noUsers: noUsers,
        }}
      />
    </div>
  );
}
