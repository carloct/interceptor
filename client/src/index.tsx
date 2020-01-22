import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import client from "./apollo";
import store from "./store";
import history from "./lib/history";
import { Auth0Provider } from "./react-auth0-spa.js";
import RootContainer from "./components/RootContainer";

import "./assets/styles/app.scss";

//const token = localStorage.getItem('token')

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        client_id={process.env.AUTH0_CLIENTID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <RootContainer />
      </Auth0Provider>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
