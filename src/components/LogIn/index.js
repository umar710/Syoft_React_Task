import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Signup/index.css";

const Login = () => {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitSinUpForm = async (event) => {
    event.preventDefault();
    const newUserDetails = {
      user_email,
      user_password,
    };
    console.log(newUserDetails);
    const api_Url = "https://syoft.dev/Api/userlogin/api/userlogin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      },
      body: JSON.stringify(newUserDetails),
    };
    const response = await fetch(api_Url, options);
    const data = await response.json();
    console.log(response);
    console.log(data);

    if (response.ok === true) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const LoginForm = () => {
    return (
      <div>
        <h2>LogIn</h2>
        <p>
          Create your account? <a href="/signup">SignUp</a>
        </p>
        <form onSubmit={onSubmitSinUpForm}>
          <br />
          <label className="input-label" htmlFor="email">
            Email address *
          </label>
          <br />
          <input
            className="input-field"
            value={user_email}
            id="email"
            type="text"
            placeholder="Email"
            onChange={onChangeEmail}
          />

          <br />

          <label className="input-label" htmlFor="password">
            Password *
          </label>
          <br />
          <input
            className="input-field"
            value={user_password}
            id="password"
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />

          <button type="submit" className="login-button">
            LogIn
          </button>
        </form>
      </div>
    );
  };

  const LogInPageImg = () => (
    <div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png"
        alt="SigUpImage"
      />
    </div>
  );

  return (
    <div className="signin-form-container">
      <div>{LogInPageImg()}</div>
      <div className="form-container">{LoginForm()}</div>
    </div>
  );
};

export default Login;
