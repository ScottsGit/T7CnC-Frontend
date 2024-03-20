import React, { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import { Button, Box } from "@mui/material";

function PlaidLink(props) {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth_token = localStorage.getItem('auth_token')

  const onSuccess = useCallback(async (publicToken) => {
    setLoading(true);
    console.log(`${process.env.REACT_APP_API_HOST}/plaid/exchange_public_token`)
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/exchange_public_token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    const data = await response.json();
    console.log(data)
    await getBalance();
  }, []);

  // Creates a Link token
  const createLinkToken = React.useCallback(async () => {
    // For OAuth, use previously generated Link token
    if (window.location.href.includes("?oauth_state_id=")) {
      const linkToken = localStorage.getItem('link_token');
      setToken(linkToken);
    } else {
      console.log(`${process.env.REACT_APP_API_HOST}/plaid/create_link_token`)
      const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/create_link_token`, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      console.log(data)
      setToken(data.link_token);
      localStorage.setItem("link_token", data.link_token);
    }
  }, [setToken]);

  // Fetch balance data
  const getBalance = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch("/plaid/balance", {
      headers: {
        Authorization: `Bearer ${auth_token}`,
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    console.log(data)
    setData(data);
    setLoading(false);
  }, [setData, setLoading]);

  let isOauth = false;

  const config = {
    token,
    onSuccess,
  };

  // For OAuth, configure the received redirect URI
  if (window.location.href.includes("?oauth_state_id=")) {
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }
  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (token == null) {
      console.log("call createLinkToken")
      createLinkToken();
    }
    if (isOauth && ready) {
      open();
    }
  }, [token, isOauth, ready, open]);

  return (
    <React.Fragment>
      <Button variant="contained" onClick={() => open()
      } disabled={!ready}
        sx={{}}>
        <strong>Link account</strong>
      </Button>
    </React.Fragment>
  );
}

export default PlaidLink;