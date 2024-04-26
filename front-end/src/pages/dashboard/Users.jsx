import { useEffect, useState } from "react";
import { USER, USERS, roleIdentifier } from "../../API/Api";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
import Table from "./Table";
export default function Users(params) {
  const [users, setUsers] = useState([]);
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
    Axios.get(`/${USERS}`)
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
  const header = [
    { key: "id", label: "id" },
    { key: "name", label: "user name" },
    { key: "email", label: "email" },
    { key: "role", label: "role" },
  ];
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
      </td>
    </tr>
  ));

  return (
    <div className="w-100 bg-white">
      <div className="d-flex align-items-center justify-content-between m-4">
        <h1>Users page</h1>
        <Link to="/dashboard/user/add" className="btn btn-primary ">
          add user
        </Link>
      </div>
      <Table headers={header} data={users} delItem={USER} currentUser={currentUser}/>
    </div>
  );
}
