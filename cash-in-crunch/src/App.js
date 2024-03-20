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
// import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";


import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Landing from "./pages/landingPage";
import MultiForm from "./pages/signup";
import Dashboard from "./pages/dashboards/MainDashboard";

import Routers from "./routes/index";


const theme = createTheme({
  palette: {
    primary: {
      main: '#32004C', // Change primary color
    },
    secondary: {
      main: '#E4D5EC', // Change secondary color
    },
    text: {
      secondary: '#32004C'
    }
  },
  typography: {
    fontFamily: 'Staatliches, sans-serif',
  },
});




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
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        {/* <NavBar />
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul> */}
        <UserProvider>
          <Routers />

          <Routes>
            {/* <Route exact path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<MultiForm />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}



            {/* <Route exact path="/dashboard" element={<Dashboard />}> 
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
            </Route> */}
          </Routes>


          {/* <Footer /> */}
        </UserProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
