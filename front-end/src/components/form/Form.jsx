import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import "./form.css";
import Loading from "../Loading/Loading";
import Cookie from "cookie-universal";
export default function Form(params) {
  // states
  const [form, setForm] = useState({
    ...params.formInputs,
  });
  const [error, setError] = useState("");
  // loading
  const [loading, setLoading] = useState(false);
  // cookies
  const cookie = new Cookie();
  // onChange
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // on submit
  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/${params.endPoint}`, form);
      const token = res.data.token;
      cookie.set("Bearer", token);
      window.location.pathname = "/users";
    } catch (error) {
      if (error.response.status === 422) {
        setError("Email is already in use");
      }
      if (error.response.status === 401) {
        setError("Email or password are incorrect");
      } else {
        setError("Internal Server Error");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
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
                  placeholder={param.name}
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
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="btn rounded-pill btn-secondary w-50"
            >
              {loading ? <Loading /> : params.btnValue}
            </button>
            <a
              className="flex items-center justify-center dark:bg-gray-800 d-block"
              href="http://127.0.0.1:8000/login-google"
            >
              <div className="btn btn-secondary rounded-pill mt-2">
                <img
                  style={{ width: "20px" }}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </div>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
