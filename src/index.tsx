import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

//const token = localStorage.getItem('token')

ReactDOM.render(
  <ApolloProvider client={client}>
    <div></div>
  </ApolloProvider>,
  document.getElementById('root')
)
