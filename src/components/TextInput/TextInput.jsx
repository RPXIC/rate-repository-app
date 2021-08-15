import React from 'react'
import { TextInput as NativeTextInput } from 'react-native'
import { styles } from './styles'

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input]

  return <NativeTextInput style={textInputStyle} {...props} autoCapitalize='none' />
}

export default TextInput