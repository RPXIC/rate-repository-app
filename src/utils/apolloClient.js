import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import Constants from 'expo-constants'
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import authStorage from './authStorage';

const httpLink = createHttpLink({
  uri: `${Constants.manifest.extra.env}/graphql`,
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      }
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      }
    },
  },
});

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
    cache
  })
}

export default createApolloClient
