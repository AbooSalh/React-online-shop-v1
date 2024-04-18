import { Outlet } from "react-router-dom";
import Cookie from "cookie-universal";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER, baseUrl } from "../../API/Api";

import Loading from "../../components/Loading/Loading";
import axios from "axios";
export default function RequireAuth() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => navigate("/login", { replace: true }));
  },[]);
  const cookie = Cookie();
  const token = cookie.get("Bearer");
  return token ? (
    !user ? (
      <Loading />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
