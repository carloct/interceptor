import React from "react";
//import { useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "../lib/history";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/Auth/SignUpPage";
import LoginPage from "../pages/Auth/LoginPage";
import DashboardPage from "../pages/DashboardPage";
//import { AppState } from "../store/types";
//import { useAuth0 } from "../react-auth0-spa";
import createApolloClient from "../apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Auth0CallbackPage from "../pages/AuthCallback";
import { useAuth } from "react-use-auth";

const RootContainer = () => {
  let idToken = "";

  const { authResult } = useAuth();

  if (typeof authResult !== "undefined" && authResult !== null) {
    idToken = authResult.idToken;
  }

  const apolloClient = createApolloClient(idToken);

  return (
    <Router history={history}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/auth0_callback" component={Auth0CallbackPage} />
          </Switch>
        </Layout>
      </ApolloProvider>
    </Router>
  );
};

export default RootContainer;
