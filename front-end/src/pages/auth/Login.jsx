import { LOGIN } from "../../API/Api";
import Form from "../../components/form/Form";
export default function Login() {
  //   the output
  return (
    <Form
      endPoint={LOGIN}
      heading="login"
      btn={{
        value: "Login",
        disabled: false,
      }}
      navigateTo="/dashboard"
      enableGoogle={true}
      formInputs={{ email: "", password: "" }}
      inputFeilds={[
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
