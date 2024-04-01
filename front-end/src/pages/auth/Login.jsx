import { LOGIN } from "../../API/Api";
import Form from "../../components/form/Form";
export default function Login(params) {
  //   the output
  return (
    <Form
      endPoint={LOGIN}
      heading="login"
      btnValue="login"
      formInputs={{email:"", password:""}}
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
