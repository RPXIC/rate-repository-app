import React from 'react'
import { View } from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import AppBar from 'components/AppBar'
import RepositoryList from 'components/RepositoryList'
import SingleRepository from 'components/SingleRepository'
import SignIn from 'components/SignIn'
import SignOut from 'components/SignOut'
import CreateReview from '../CreateReview'
import SignUp from '../SignUp'
import MyReviews from '../MyReviews'
import { styles } from './styles'

const Main = () => (
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
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/details/:id">
        <SingleRepository />
      </Route>
      <Route path="/create-review">
        <CreateReview />
      </Route>
      <Route path="/my-reviews">
        <MyReviews />
      </Route>
      <Redirect to="/" />
    </Switch>
  </View>
)

export default Main