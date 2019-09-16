import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router'
// import jwt from 'jsonwebtoken'

interface PrivateRouteProps extends RouteProps {
  component: any;
  token: string | null;
}

export const ProtectedRoute = ({ component: Component, token, ...rest}: PrivateRouteProps) => {

  return token ? (
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
  ) : (
    <Redirect to="/login" />
  )
}
