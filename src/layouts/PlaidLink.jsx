import React, { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import { Button, Box } from "@mui/material";

function PlaidLink({handlePlaidItemChange}) {
  const [token, setToken] = useState(localStorage.getItem('link_token'));
  const [plaidItem, setPlaidItem] = useState(localStorage.getItem('item_id'));
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // const authToken = localStorage.getItem('auth_token')

  const onSuccess = useCallback(async (publicToken) => {
    setLoading(true);
    console.log(`${process.env.REACT_APP_API_HOST}/plaid/exchange_public_token`)
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plaid/exchange_public_token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    const data = await response.json();

    if (data['item_id']?.length > 0) {
      setPlaidItem(data['item_id'])
    }
    // await getBalance();
  }, [setPlaidItem]);

  useEffect(()=> {
    if (plaidItem?.length > 0) {
      handlePlaidItemChange(plaidItem)
    }
  }, [plaidItem])

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
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      console.log(data)
      setToken(data.link_token);
      localStorage.setItem("link_token", data.link_token);
    }
  }, [setToken]);


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