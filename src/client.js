import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`
  },
  cache: new InMemoryCache()
});