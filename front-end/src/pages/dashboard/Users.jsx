import { useEffect, useState } from "react";
import { USER, USERS } from "../../API/Api";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
import Table from "./Table";
export default function Users(params) {
  const [users, setUsers] = useState([]);
  const [cellLoading, setCellLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  // current user
  useEffect(() => {
    Axios.get(`/${USER}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => new Error("Error fetching current user:", err));
  }, []);
  // handle delete
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${USER}/${id}`);
      document.getElementById(id).remove();
    } catch (error) {
      new Error("Error deleting user:", error);
    }
  }
  // fetch users
  useEffect(() => {
    Axios.get(`/${USERS}`)
      .then((response) => {
        if (response.data && response.data.length === 1) {
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
  return (
    <div className="w-100 bg-white">
      <div className="d-flex align-items-center justify-content-between m-4">
        <h1>Users page</h1>
        <Link to="/dashboard/user/add" className="btn btn-primary ">
          add user
        </Link>
      </div>
      <Table headers={header} data={users} delItem={handleDelete} currentUser={currentUser}/>
    </div>
  );
}
