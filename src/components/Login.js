import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
const Login = () => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "ilona@gmail.com" && formData.password === "123") {
      navigate("/");
    } else {
      setErrors("Invalid email or pasword");
    }
  };
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((userInfo) => login(userInfo));
  //       navigate("/");
  //     } else {
  //       response.json().then((err) => {
  //         if (err.errors) {
  //           setErrors(Object.values(err.errors));
  //         } else {
  //           setErrors([err.error]);
  //         }
  //       });
  //     }
  //   });
  // };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <mobiscroll.Form
        theme="mobiscroll"
        onSubmit={handleSubmit}
        className="form"
      >
        <label>email address</label>
        <mobiscroll.Input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
        <label>password</label>
        <mobiscroll.Input
          name="password"
          type="text"
          value={formData.password}
          onChange={handleChange}
        />
        <mobiscroll.Button type="submit">LogIn</mobiscroll.Button>
      </mobiscroll.Form>
    </div>
  );
};

export default Login;
