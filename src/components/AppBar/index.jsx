import React from 'react'
import { View, ScrollView } from 'react-native'
import AppBarTab from '../AppBarTab'
import { useAuthorizedUser } from 'hooks'
import { styles } from './styles'

const AppBar = () => {
  const { isAuthorized } = useAuthorizedUser()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path='/' text='Repositories' />
        {isAuthorized
          ? (
            <>
              <AppBarTab path='/create-review' text='Create Review' />
              <AppBarTab path='/my-reviews' text='My Reviews' />
              <AppBarTab path='/signout' text='Sign out' />
            </>
          )
          : (
            <>
              <AppBarTab path='/signin' text='Sign in' />
              <AppBarTab path='/signup' text='Sign up' />
            </>
          )
        }
      </ScrollView>
    </View>
  )
}

export default AppBar