import React from 'react'
import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 19,
    paddingVertical: 10
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput