import React from 'react'
import { Pressable, View } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from 'components/FormikTextInput'
import Text from 'components/Text'
import { styles } from './styles'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
}

const FORM_STATUS = {
  idle: 'idle',
  error: 'error'
}

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number().min(0).max(100)
    .required('Rating is required'),
  text: yup
    .string()
});

const Form = ({ handleSubmit, isSubmitting, status }) => (
  <View>
    <FormikTextInput name='ownerName' placeholder='Repository Owner' />
    <FormikTextInput name='repositoryName' placeholder='Repository Name' />
    <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
    <FormikTextInput name='text' placeholder='Review' multiline />
    <Pressable disabled={isSubmitting} onPress={handleSubmit} >
      <Text style={styles.button}>Create Review</Text>
    </Pressable>
    {status === FORM_STATUS.error && <Text style={styles.error}>Something went wrong</Text>}
  </View>
)

const CreateReviewForm = ({ onSubmit }) => (
  <View>
    <Formik
      component={Form}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  </View>
)

export default CreateReviewForm