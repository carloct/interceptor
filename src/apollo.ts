import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-boost'
import { getMainDefinition } from 'apollo-utilities'

const { API_ROOT } = process.env

const httpLink = new HttpLink({ uri: API_ROOT })

const httpAuthMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })

  return (forward) ? forward(operation) : null
})

const httpLinkAuth = ApolloLink.from([httpLink, httpAuthMiddleware])

const wsLinkAuth = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const def: any = getMainDefinition(query);
    if (def.operation) {
      return def.kind === 'OperationDefinition' && def.operation === 'subscription'
    }

    return false
  },
  wsLinkAuth,
  httpLinkAuth,
)

const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default client
