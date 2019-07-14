import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import client from './apollo'
import store from './store'
import RootContainer from './components/RootContainer';

import './assets/styles/app.scss'


const token = localStorage.getItem('token')

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <RootContainer token={token} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
