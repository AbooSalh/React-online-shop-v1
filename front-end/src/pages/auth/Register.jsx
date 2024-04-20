import { REGISTER } from "../../API/Api";
import Form from "../../components/form/Form";
export default function Register(params) {
  return (
    <Form
      endPoint={REGISTER}
      heading="register now"
      btn={{
        value: "Register",
        disabled: false,
      }}
      navigate={{
        to: "/dashboard",
        method: "replace",
      }}
      enableGoogle={true}
      formInputs={{ email: "", password: "", name: "" }}
      inputFeilds={[
        {
          name: "name",
          type: "name",
          label: "name",
        },
        {
          name: "email",
          type: "email",
          label: "Email",
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          customAttr: {
            minLength: 7,
          },
        },
      ]}
    />
  );
}
