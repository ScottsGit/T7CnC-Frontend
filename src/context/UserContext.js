import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setLoggedIn(false);
        } else {
          setUser(data);
          setLoggedIn(true);
        }
      });
  }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
    Navigate("/");
  };
  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };
  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        errors,
        setErrors,
        loggedIn,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
