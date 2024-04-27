import { useEffect, useState } from "react";
import { CAT } from "../../API/Api";
import { Link } from "react-router-dom";
import { Axios } from "../../API/axios";
import Table from "./Table";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  // fetch users
  useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((response) => {
        if (response.data && response.data.length === 1) {
          categories(true);
        } else {
          setCategories(response.data);
        }
      })
      .catch((err) => {});
  }, []);
  const header = [{ name: "title" }, { name: "image" }];
  // handle delete
  async function handleDelete(id) {
    try {
      await Axios.delete(`${CAT}/${id}`);
      document.getElementById(id).remove();
    } catch (error) {
      new Error("Error deleting user:", error);
    }
  }
  return (
    <div className="w-100 bg-white">
      <div className="d-flex align-items-center justify-content-between m-4">
        <h1>categories page</h1>
        <Link to="/dashboard/categories/add" className="btn btn-primary ">
          add user
        </Link>
      </div>
      <Table headers={header} data={categories} delItem={handleDelete} />
    </div>
  );
}
