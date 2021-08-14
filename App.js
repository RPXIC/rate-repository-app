import React from 'react'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import Main from './src/components/Main'
import AuthStorageContext from './src/contexts/AuthStorageContext'
import createApolloClient from './src/utils/apolloClient'
import authStorage from './src/utils/authStorage';

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
