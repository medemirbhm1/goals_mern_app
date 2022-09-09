import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  useEffect(() => {}, []);
  function onChange(e) {
    setFormData((old) => ({ ...old, [e.target.name]: e.target.value }));
  }
  function onSubmit() {}
  return (
    <div>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>And Start Setting Goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Your password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
