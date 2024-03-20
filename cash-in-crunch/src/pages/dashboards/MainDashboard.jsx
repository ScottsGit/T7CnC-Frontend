
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";


const MainDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'))
  const navigate = useNavigate();

  // Fetch balance data
  const getBalance = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/balance`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    setData(data);
    setLoading(false);
  }, [setData, setLoading]);

  useEffect(() => {
    if (authToken == null) {
      navigate('/login')
    }
    getBalance();
  }, [authToken]);



  return (
    <div>MainDashboard

      {!loading &&
        data != null &&
        Object.entries(data).map((entry, i) => (
          <pre key={i}>
            <code>{JSON.stringify(entry[1], null, 2)}</code>
          </pre>
        )
        )}
    </div>
  )
}

export default MainDashboard;
