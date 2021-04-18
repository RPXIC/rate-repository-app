import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, ScrollView } from 'react-native'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgNavBar,
    flexDirection: 'row',
  },
})

const AppBar = () => (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' text='Repositories' />
        <AppBarTab path='/signin' text='SignIn' />
      </ScrollView>
    </View>
)

export default AppBar