import React from 'react'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import Main from 'components/Main'
import AuthStorageContext from 'contexts/AuthStorageContext'
import createApolloClient from 'utils/apolloClient'
import { authStorage } from 'utils';

const apolloClient = createApolloClient()

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  )
}

export default App
