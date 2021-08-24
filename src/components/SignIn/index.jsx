import React from 'react'
import { useHistory } from 'react-router'
import SignInForm from '../SignInForm'
import { useSignIn } from 'hooks'

const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials'
}

const SignIn = () => {
  const { signIn } = useSignIn()
  const history = useHistory()

  const handleFormikSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      const { username, password } = values
      await signIn(username, password)
      actions.setSubmitting(false)
      actions.setStatus(FORM_STATUS.idle)
      history.push('/')
    } catch (error) {
      actions.setStatus(FORM_STATUS.wrongCredentials)
    }
  }

  return <SignInForm onSubmit={handleFormikSubmit} />
}

export default SignIn