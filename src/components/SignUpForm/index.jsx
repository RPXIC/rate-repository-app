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
  passwordConfirmation: ''
}

const FORM_STATUS = {
  idle: 'idle',
  userExist: 'userExist'
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be greater or equal to 5')
    .max(30, 'Username must be lower or equal to 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be greater or equal to 5')
    .max(50, 'Username must be lower or equal to 50')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirmation is required'),
});

const Form = ({ handleSubmit, isSubmitting, status }) => (
  <View>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry />
    <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry />
    <Pressable disabled={isSubmitting} onPress={handleSubmit} >
      <Text style={styles.button}>SignUp</Text>
    </Pressable>
    {status === FORM_STATUS.userExist && <Text style={styles.error}>This username already exist</Text>}
  </View>
)

const SignUpForm = ({ onSubmit }) => (
  <View>
    <Formik
      component={Form}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  </View>
)

export default SignUpForm