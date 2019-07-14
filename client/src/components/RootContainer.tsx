import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/Auth/SignUpPage';


interface Props {
  token: string | null;
}

class RootContainer extends React.Component<Props> {

  state = {
    token: this.props.token
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default RootContainer
