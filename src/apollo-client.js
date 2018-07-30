import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { LoggingLink, wrapPubSub, formatResponse } from 'apollo-logger';
import { persistCache } from 'apollo-cache-persist';
import apolloLogger from 'apollo-link-logger'
import { AsyncStorage } from 'react-native'

const logOptions = { logger: console.log };
const cache = new InMemoryCache()
persistCache({
  cache,
  storage: AsyncStorage
})
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: 'TVJ5MWN4VjB6RjU1NjlnczJPTmZuRTlzNkdESXBNZnY5YkdTWW01UlFTYz0=' || null,
    } 
  }));

  return forward(operation);
})

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    apolloLogger,
    new LoggingLink(logOptions),
    authMiddleware,
    new HttpLink({
      uri: 'http://localhost:4000/api'
    })
  ]),
  cache: cache
});