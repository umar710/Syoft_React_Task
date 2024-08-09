import { useState } from "react";

import "../Signup/index.css";

const SignUp = () => {
  const [user_firstname, setUserFirstName] = useState("");
  const [user_lastname, setUserLastName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_phone, setPhoneNumber] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_city, setCity] = useState("");
  const [user_zipcode, setZipCode] = useState("");

  const [error, setError] = useState("");

  const onSubmitSinUpForm = async (event) => {
    event.preventDefault();
    // Validate form data
    if (!user_firstname || !user_email || !user_password || !user_phone) {
      setError("All fields are required.");
      return;
    }
    const newUserDetails = {
      user_firstname,
      user_lastname,
      user_email,
      user_phone,
      user_password,
      user_city,
      user_zipcode,
    };
    console.log(newUserDetails);
    const api_Url =
      "https://syoft.dev/Api/user_registeration/api/user_registeration";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      },
      body: JSON.stringify(newUserDetails),
    };
    const response = await fetch(api_Url, options);
    const data = await response.json();
    console.log(data);
  };

  const onChangeUserFirstName = (event) => {
    setUserFirstName(event.target.value);
  };

  const onChangeUserLastName = (event) => {
    setUserLastName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  const onChangeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const SignUpForm = () => {
    return (
      <div>
        <h2>Sign Up</h2>
        <p>
          Alrady have an account? <a href="/login">Login</a>
        </p>
        <form onSubmit={onSubmitSinUpForm}>
          <label className="input-label" htmlFor="userfirstname">
            User FirstName *
          </label>
          <br />
          <input
            className="input-field"
            value={user_firstname}
            id="userfirstname"
            type="text"
            placeholder="user firstname"
            onChange={onChangeUserFirstName}
          />
          <br />
          <label className="input-label" htmlFor="userlastname">
            User LastName *
          </label>
          <br />
          <input
            className="input-field"
            value={user_lastname}
            id="userlastname"
            type="text"
            placeholder="user lastname"
            onChange={onChangeUserLastName}
          />
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
          <label className="input-label" htmlFor="phonenumber">
            Phone Number *
          </label>
          <br />
          <input
            className="input-field"
            value={user_phone}
            id="phonenumber"
            type="text"
            placeholder="Phone Number"
            onChange={onChangePhoneNumber}
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
          <br />
          <label className="input-label" htmlFor="city">
            City *
          </label>
          <br />
          <input
            className="input-field"
            value={user_city}
            id="city"
            type="text"
            placeholder="City"
            onChange={onChangeCity}
          />
          <br />
          <label className="input-label" htmlFor="zipcode">
            Zip Code
          </label>
          <br />
          <input
            className="input-field"
            value={user_zipcode}
            id="zipcode"
            type="text"
            placeholder="Zip Code"
            onChange={onChangeZipCode}
          />
          <br />
          <div>
            <input type="checkbox" />I agree
          </div>
          {error ? <p style={{ color: "red" }}>{error}</p> : null}
          <button type="submit" className="login-button">
            Create your account
          </button>
        </form>
      </div>
    );
  };

  const SignUpPageImg = () => (
    <div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-8694031-6983270.png"
        alt="SigUpImage"
      />
    </div>
  );

  return (
    <div className="signin-form-container">
      <div>{SignUpPageImg()}</div>
      <div className="form-container">{SignUpForm()}</div>
    </div>
  );
};

export default SignUp;
