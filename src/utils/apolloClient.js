import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import { setContext } from '@apollo/client/link/context';
import authStorage from './authStorage';

const httpLink = createHttpLink({
  uri: `${Constants.manifest.extra.env}/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await authStorage.getAccessToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  } catch (error) {
    console.log(error)
  }
});

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export default createApolloClient
