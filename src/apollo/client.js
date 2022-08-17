import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || 'http://192.168.1.71:1337/graphql',
  cache: new InMemoryCache(),
});

export default client;
