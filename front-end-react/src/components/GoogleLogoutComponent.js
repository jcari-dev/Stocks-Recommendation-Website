import React from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { useHistory } from "react-router-dom";

require('dotenv').config()

function GoogleLogoutComponent() {
  let history = useHistory();

    const logoutGoogle = (response) =>{
        console.log(response)
        localStorage.clear()
        history.push("/")
        window.location.reload();
    }

    return (
        <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logoutGoogle}
        />
    )
}

export default GoogleLogoutComponent
