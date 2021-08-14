import { useMutation, useApolloClient } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const [signInMutation] = useMutation(SIGN_IN)
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const signIn = async (username, password) => {
    const { data } = await signInMutation({
      variables: {
        username,
        password
      }
    })
    await authStorage.setAccessToke(data.authorize.accessToken)
    await apolloClient.resetStore()
  }

  return {
    signIn
  }
}

export default useSignIn