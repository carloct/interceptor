import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import history from "./lib/history";
//import { Auth0Provider } from "./react-auth0-spa.js";
import RootContainer from "./components/RootContainer";
import { AuthProvider } from "react-use-auth";

import "./assets/styles/App.css";

// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

//const navigate = () => {};

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider
      navigate={history.push}
      auth0_domain={process.env.AUTH0_DOMAIN || ""}
      auth0_client_id={process.env.AUTH0_CLIENTID || ""}
      auth0_params={{}}
    >
      <RootContainer />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
