import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { LoggingLink, wrapPubSub, formatResponse } from 'apollo-logger';
import { persistCache } from 'apollo-cache-persist';
import apolloLogger from 'apollo-link-logger'
import { AsyncStorage } from 'react-native'
import { Toast } from 'native-base';
import { Alert } from 'react-native'
import { withClientState }  from 'apollo-link-state'
import { typeDefs } from './graphql/client/types';
import { defaults, resolvers } from './graphql/client/resolvers';
const logOptions = { logger: console.log };
const cache = new InMemoryCache()

persistCache({
  cache,
  storage: AsyncStorage
})


const clientState = withClientState({
  cache,
  defaults,
  typeDefs,
  resolvers
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // console.log('========')
  // // const { response: { headers } } = operation.getContext();
  // console.log(forward)
  // return forward(operation);
  return forward(operation).map(response => {
    const { response: { headers } } = operation.getContext();
    console.log(operation.getContext())
    return response;
  });
})

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const { response: { headers } } = operation.getContext();
    console.log(headers)
    return response;
  });
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>{
          Alert.alert('Error', message)
        })
        console.log(`[Network error]: ${networkError}`);
    }),
    apolloLogger,
    clientState,
    new LoggingLink(logOptions),
    new HttpLink({
      uri: 'http://localhost:4000/api'
    }),

  ]),
  cache: cache,
});