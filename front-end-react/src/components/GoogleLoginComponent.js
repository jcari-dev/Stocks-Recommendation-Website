import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

require("dotenv").config();

function GoogleLoginComponent() {
  let history = useHistory();

  const successGoogle = (response) => {
    localStorage.setItem("UserIn", response.profileObj.email);
    localStorage.setItem("ProfileImg", response.profileObj.imageUrl);
    localStorage.setItem("userRealName", response.profileObj.givenName);
    localStorage.setItem("userfRealName", response.profileObj.name);
    console.log(response);
    fetch("http://127.0.0.1:8000/testing/", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
 
    email: localStorage.getItem("UserIn"), 
    results: 'uwu',
    name: localStorage.getItem("userRealName")

    }),
  });
    history.push("/");
    window.location.reload();
  };

  const failedGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Sign In with Google"
      onSuccess={successGoogle}
      onFailure={failedGoogle}
    />
  );
}

export default GoogleLoginComponent;
