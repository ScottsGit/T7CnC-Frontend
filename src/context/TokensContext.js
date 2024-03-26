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
        const token = localStorage.getItem('auth_token'); 
        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000; 
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                navigate("/login");
            }
        }
    };

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