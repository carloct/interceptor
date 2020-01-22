import React, { useEffect } from "react";
//import { useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../lib/ProtectedRoute";
import history from "../lib/history";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/Auth/SignUpPage";
import LoginPage from "../pages/Auth/LoginPage";
import DashboardPage from "../pages/DashboardPage";
//import { AppState } from "../store/types";
import { useAuth0 } from "../react-auth0-spa";

const RootContainer = () => {
  //const auth = useSelector((state: AppState) => state.auth);
  const { isLoading, getTokenSilently } = useAuth0();

  console.log(useAuth0());
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   async function getToken() {
  //     const auth0 = await useAuth0();
  //     console.log(auth0);
  //     await auth0.getTokenSilently();
  //   }

  //   getToken();
  //   setIsLoading(false);
  //   //const auth = useAuth0();
  // }, []);

  // if (!isLoading) {
  //   return <div></div>;
  // }

  useEffect(() => {
    getTokenSilently();
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute
            token={""}
            path="/dashboard"
            component={DashboardPage}
          />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootContainer;
