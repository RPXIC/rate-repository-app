import React from 'react'
import { useField } from 'formik'
import Text from 'components/Text/Text'
import TextInput from 'components/TextInput/TextInput'
import { styles } from './styles'

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError && styles.errorInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput