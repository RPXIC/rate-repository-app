import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useHistory } from 'react-router'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
}

const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials'
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be greater or equal to 3')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password must be greater or equal to 3')
    .required('Password is required'),
});

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 20
  },
  button: {
    color: 'white',
    backgroundColor: '#016ad1',
    fontWeight: '700',
    paddingVertical: 10,
    marginHorizontal: 19,
    textAlign: 'center',
    borderRadius: 5,
    marginVertical: 10,
  }
})

const SignInForm = ({ onSubmit, isSubmitting, status }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable disabled={isSubmitting} onPress={onSubmit}>
        <Text style={styles.button}>SignIn</Text>
      </Pressable>
      {status === FORM_STATUS.wrongCredentials && <Text style={styles.error}>Wrong Credentials</Text>}
    </View>
  )
}

const SignIn = () => {
  const {signIn} = useSignIn()
  const history = useHistory()

  const onSubmit = async(values, actions) => {
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

  return (
    <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit, isSubmitting, status }) => <SignInForm onSubmit={handleSubmit} isSubmitting={isSubmitting} status={status} />}
    </Formik>
    </View>
  )
}

export default SignIn