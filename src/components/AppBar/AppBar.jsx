import React from 'react'
import { View, ScrollView } from 'react-native'
import AppBarTab from '../AppBarTab/AppBarTab'
import { useAuthorizedUser } from 'hooks'
import { styles } from './styles'

const AppBar = () => {
  const { isAuthorized } = useAuthorizedUser()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' text='Repositories' />
        {isAuthorized
          ? <AppBarTab path='/signout' text='SignOut' />
          : <AppBarTab path='/signin' text='SignIn' />
        }
      </ScrollView>
    </View>
  )
}

export default AppBar