import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from 'theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgNavBar,
    flexDirection: 'row',
  },
})