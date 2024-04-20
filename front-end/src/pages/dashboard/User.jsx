import { useEffect, useState } from "react";
import { USER, baseUrl, roleIdentifier } from "../../API/Api";
import Form from "../../components/form/Form";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Cookie from "cookie-universal";
export default function User() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const id = window.location.pathname.replace("/dashboard/users/", "");
  const cookie = new Cookie();
  const token = cookie.get("Bearer");
  useEffect(() => {
    axios
      .get(`${baseUrl}/${USER}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setRole(data.data.role);
      })
      .then(() => setDisabled(false))
      .then(() => setLoading(false));
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <Form
        endPoint={`${USER}/edit/${id}`}
        heading="Update"
        btn={{
          value: "Update",
          disabled: disabled,
        }}
        navigateTo="/dashboard/users"
        userID={id}
        formInputs={{ name: name, email: email, role: role }}
        inputFeilds={[
          {
            name: "name",
            type: "name",
            label: "Name",
            value: name,
          },
          {
            name: "email",
            type: "email",
            label: "Email",
            value: email,
          },
          {
            name: "role",
            type: "select",
            label: "Role",
            value: role,
            options: Object.values(roleIdentifier),
          },
        ]}
      />
    </>
  );
}
