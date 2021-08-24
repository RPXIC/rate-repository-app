import { useMutation } from "@apollo/client"
import { SIGN_UP } from "graphql/mutations"

const useSignUp = () => {
  const [signUpMutation] = useMutation(SIGN_UP)

  const signUp = async (values) => {

    const user = {
      username: values.username,
      password: values.password
    }
    const { data } = await signUpMutation({
      variables: {
        user
      }
    })
    // and singIn
    return data
  }

  return {
    signUp
  }
}

export default useSignUp