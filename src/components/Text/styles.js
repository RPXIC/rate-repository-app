import { StyleSheet } from 'react-native'
import theme from 'theme'

export const styles = StyleSheet.create({
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