import { useState } from "react";
import Form from "../../components/form/Form";
import { USER, roleIdentifier } from "../../API/Api";

export default function AddUser(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("1992");
  return (
    <>
      <Form
        endPoint={`${USER}/add`}
        heading="Add User"
        btn={{
          value: "Add",
        }}
        navigate={{
          to: "/dashboard/users",
        }}
        formInputs={{
          name: name,
          email: email,
          password: password,
          role: role,
        }}
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
            name: "password",
            type: "password",
            label: "password",
            value: password,
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
