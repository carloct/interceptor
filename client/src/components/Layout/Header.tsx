import React from "react";
//import { useAuth0 } from "../../react-auth0-spa";
import { useAuth } from "react-use-auth";

const spacerStyle = {
  margin: "auto"
};

const Header = () => {
  //const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="justify-content-between navbar navbar-expand navbar-light">
      <span className="navbar-brand">MockPilot</span>
      <div style={spacerStyle}></div>
      <div className="header-part-right">
        {!isAuthenticated() && <button onClick={() => login()}>Log in</button>}

        {isAuthenticated() && <button onClick={() => logout()}>Log out</button>}
      </div>
    </div>
  );
};

export default Header;
