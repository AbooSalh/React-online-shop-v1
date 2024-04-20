import { useEffect, useState } from "react";
import { USER, roleIdentifier } from "../../API/Api";
import Form from "../../components/form/Form";
import Loading from "../../components/Loading/Loading";
import { Axios } from "../../API/axios";
export default function User() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const id = window.location.pathname.replace("/dashboard/users/", "");
  useEffect(() => {
    Axios
      .get(`/${USER}/${id}`)
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
        navigate={{
          to: "/dashboard/users",
        }}
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
