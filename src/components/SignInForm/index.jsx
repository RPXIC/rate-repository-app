import React from 'react'
import { Pressable, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from 'components/FormikTextInput'
import Text from 'components/Text'
import { styles } from './styles'

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

const Form = ({ handleSubmit, isSubmitting, status }) => (
  <View>
    <FormikTextInput name='username' placeholder='Username' testID='SignInFormUsername' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry testID='SignInFormPassword' />
    <Pressable disabled={isSubmitting} onPress={handleSubmit} testID='SignInFormSubmit' >
      <Text style={styles.button}>SignIn</Text>
    </Pressable>
    {status === FORM_STATUS.wrongCredentials && <Text style={styles.error}>Wrong Credentials</Text>}
  </View>
)

const SignInForm = ({ onSubmit }) => (
  <View>
    <Formik
      component={Form}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  </View>
)

export default SignInForm