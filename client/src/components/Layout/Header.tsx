import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const spacerStyle = {
  margin: "auto"
};

const Header = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout
    //getTokenSilently
  } = useAuth0();

  //console.log(getTokenSilently);

  return (
    <div className="main-header">
      <div className="logo">
        <img src="/images/logo.png" />
      </div>
      <div style={spacerStyle}></div>
      <div className="header-part-right">
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
    </div>
  );
};

export default Header;
