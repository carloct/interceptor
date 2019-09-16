import React from 'react'
import { useSelector } from 'react-redux'
import { Router, Switch, Route} from 'react-router-dom'
import { ProtectedRoute } from '../lib/ProtectedRoute'
import history from '../lib/history'
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/Auth/SignUpPage'
import LoginPage from '../pages/Auth/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import { AppState } from '../store/types';


const RootContainer = () => {
  const auth = useSelector((state: AppState) => state.auth)

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute token={auth.jwt} path="/dashboard" component={DashboardPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default RootContainer
