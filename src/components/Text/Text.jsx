import React from 'react'
import { Text as NativeText } from 'react-native'
import { styles } from './styles'

const Text = ({ color, fontSize, fontWeight, padding, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'navbar' && styles.colorNavbar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    padding === 'navbar' && styles.paddingNavBar,
    padding === 'verticalS' && styles.paddingVerticalS,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export default Text