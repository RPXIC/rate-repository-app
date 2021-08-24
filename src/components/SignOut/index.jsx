import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useApolloClient } from '@apollo/client'
import { authStorage } from 'utils'

const SignOut = () => {
  const apolloClient = useApolloClient()
  const history = useHistory()

  useEffect(() => {
    (async () => {
      await authStorage.removeAccessToken()
      await apolloClient.resetStore()
      history.push('/')
    })()
  })
  return null
}

export default SignOut