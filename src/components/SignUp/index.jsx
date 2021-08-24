import React from 'react'
import { useHistory } from 'react-router'
import SignUpForm from '../SignUpForm'
import { useSignUp, useSignIn } from 'hooks'

const FORM_STATUS = {
  idle: 'idle',
  userExist: 'userExist'
}

const SignUp = () => {
  const { signUp } = useSignUp()
  const { signIn } = useSignIn()
  const history = useHistory()

  const handleFormikSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      const { createUser: { id, username } } = await signUp(values)
      if (id && username) {
        await signIn(username, values.password)
      }
      actions.setSubmitting(false)
      actions.setStatus(FORM_STATUS.idle)
      history.push('/')
    } catch (error) {
      actions.setStatus(FORM_STATUS.userExist)
    }
  }

  return <SignUpForm onSubmit={handleFormikSubmit} />
}

export default SignUp