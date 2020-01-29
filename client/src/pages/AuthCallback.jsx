import React, { useEffect } from "react";

import { useAuth } from "react-use-auth";

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/dashboard" });
  }, []);

  return <h1>Callback page</h1>;
};

export default Auth0CallbackPage;
