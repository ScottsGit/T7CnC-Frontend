import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import jwt_decode from 'jwt-decode';


const TokensContext = React.createContext();
const TokensProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'))
    const [linkToken, setlinkToken] = useState(localStorage.getItem('link_token'))
    const [item, setItem] = useState(localStorage.getItem('item_id'))

    const navigate = useNavigate();

    // Check token expiry
    const checkAuthTokenExpiry = () => {
        const token = localStorage.getItem('auth_token'); // Assuming token is stored in localStorage
        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
            if (decodedToken.exp < currentTime) {
                // Token has expired, remove it from storage
                localStorage.removeItem('token');
                // Redirect to login page or display message
                navigate("/login");
            }
        }
    };

    // Call checkTokenExpiry when the app initializes or when performing authenticated actions
    useEffect(() => {
        checkAuthTokenExpiry();
    }, [authToken]);


    return (
        <TokensContext.Provider
          value={{
            authToken,
            setAuthToken,
            linkToken,
            setlinkToken,
            item,
            setItem
            
          }}
        >
          {children}
        </TokensContext.Provider>
      );
}

export { TokensProvider, TokensContext };