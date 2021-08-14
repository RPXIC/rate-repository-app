import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, ScrollView } from 'react-native'
import AppBarTab from './AppBarTab'
import theme from '../theme'
import useAuthorizedUser from '../hooks/useAuthorizedUser'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgNavBar,
    flexDirection: 'row',
  },
})

const AppBar = () => {
  const {isAuthorized} = useAuthorizedUser()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' text='Repositories' />
        { isAuthorized 
          ? <AppBarTab path='/signout' text='SignOut' />
          : <AppBarTab path='/signin' text='SignIn' />
        }
      </ScrollView>
    </View>
  )
}

export default AppBar