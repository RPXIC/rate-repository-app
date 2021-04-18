import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const initialValues = {
  username: '',
  password: '',
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

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>SignIn</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
    </View>
  )
}

export default SignIn