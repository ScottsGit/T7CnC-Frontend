import React, { useState } from "react";
import { GoogleLogin } from "@leecheuk/react-google-login";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordMessage(true);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const onFailureGoogle = (error) => {
    console.log(error);
  };
  return (
    <div>
      <mobiscroll.Form
        theme="mobiscroll"
        onSubmit={handleSubmit}
        className="form"
      >
        <div>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={onFailureGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <label>email address</label>
        <mobiscroll.Input
          type="text"
          onChange={handleEmailChange}
          value={email}
        />
        <label>password</label>
        <mobiscroll.Input
          type="text"
          onChange={handlePasswordChange}
          value={password}
        />
        <div className="password">
          {showPasswordMessage && (
            <div>
              <li className={password.length >= 8 ? "valid" : "invalid"}>
                At least 8 characters
              </li>
              <li
                className={
                  /[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"
                }
              >
                At least one special character
              </li>
              <li className={/\d/.test(password) ? "valid" : "invalid"}>
                At least one number
              </li>
              <li className={/[A-Z]/.test(password) ? "valid" : "invalid"}>
                At least one uppercase letter
              </li>
            </div>
          )}
        </div>
        <mobiscroll.Button type="submit">Sign up</mobiscroll.Button>
      </mobiscroll.Form>
    </div>
  );
};

export default Signup;
