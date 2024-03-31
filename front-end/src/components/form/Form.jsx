import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import "./form.css";
export default function Form(params) {
  // states
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  // onChange
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // on submit
  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/${params.endPoint}`, form);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <form onSubmit={submit}>
          <h1 className="mb-4">{params.heading}</h1>
          {params.inputFeilds.map((param, index) => (
            <div className="form-cell" key={index}>
              <input
                type={param.type}
                name={param.name}
                value={form[param.name]}
                placeholder={"Enter your " + param.name}
                id={param.name}
                onChange={handleChange}
                required
                {...param.customAttr}
              />
              <label htmlFor={param.name} className="form-label">
                {param.label}
              </label>
            </div>
          ))}
          <button type="submit" className="btn rounded-pill btn-secondary">
            {params.btnValue}
          </button>
        </form>
      </div>
    </div>
  );
}
