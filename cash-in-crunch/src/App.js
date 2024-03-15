import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Accounts from "./components/Accounts";
import Spending from "./components/Spending";
import Goals from "./components/Goals";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { UserProvider, UserContext } from "./context/UserContext";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  const { loggedIn } = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db.json");
        const data = await response.json();
        setUserData(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route
            path="/profile"
            element={loggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/accounts"
            element={loggedIn ? <Accounts /> : <Navigate to="/login" />}
          />
          <Route
            path="/spendings"
            element={loggedIn ? <Spending /> : <Navigate to="/login" />}
          />
          <Route
            path="/goals"
            element={loggedIn ? <Goals /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
