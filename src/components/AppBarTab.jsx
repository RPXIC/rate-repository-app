import React from 'react'
import { Link } from 'react-router-native'
import Text from './Text'

const AppBarTab = ({ path, text }) => (
  <Link to={path}>
    <Text 
      color='navbar' 
      fontSize='subheading' 
      fontWeight='bold'
      padding='navbar'
    >
    {text}</Text>
  </Link>
)

export default AppBarTab