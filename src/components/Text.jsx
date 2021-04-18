import React from 'react'
import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorNavbar: {
    color: theme.colors.textNavbar
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  paddingNavBar: {
    padding: 15,
  },
  paddingVerticalS: {
    paddingVertical: 6
  },
})

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