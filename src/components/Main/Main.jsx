import React from 'react'
import { View } from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import AppBar from 'components/AppBar/AppBar'
import RepositoryList from 'components/RepositoryList/RepositoryList'
import SignIn from 'components/SignIn/SignIn'
import SignOut from 'components/SignOut/SignOut'
import { styles } from './styles'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signout" exact>
          <SignOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main