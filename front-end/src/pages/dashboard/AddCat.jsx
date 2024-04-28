import { useState } from "react";
import Form from "../../components/form/Form";
import { aCAT } from "../../API/Api";

export default function AddCat(params) {
    const [title, setTitle] = useState(); 
    const [image, setImage] = useState();
  return (
    <Form
      endPoint={`${aCAT}/add`}
      heading="Add Category"
      btn={{
        value: "Add",
      }}
      navigate={{
        to: "/dashboard/users",
      }}
      formInputs={{
        title: title,
        image: image,
      }}
      inputFeilds={[
        {
          name: "title",
          type: "name",
          label: "title",
          value: title,
        },
        {
          name: "image",
          type: "file",
          label: "image",
          value: image,
        },
      ]}
    />
  );
}
