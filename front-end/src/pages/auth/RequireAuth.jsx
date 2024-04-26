import { Outlet } from "react-router-dom";
import Cookie from "cookie-universal";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER, baseUrl } from "../../API/Api";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

export default function RequireAuth({ allowedRole }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookie();
    const token = cookie.get("Bearer");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
    axios
      .get(`${baseUrl}/${USER}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, []);

  if (!user) {
    return <Loading />;
  }

  if (allowedRole.includes(user.role)) {
    return <Outlet />;
  }

  return <Navigate to="/403" replace={true} />;
}
