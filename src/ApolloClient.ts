import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'

const uri = 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql'
const wss = 'wss://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql'

const httpLink = new HttpLink({
  uri
})
const wsLink = new WebSocketLink(
  new SubscriptionClient(wss)
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)
export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})
