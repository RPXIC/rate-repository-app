import React from 'react'
import Text from './Text'

const AppBarTab = ({ text }) => (
    <Text 
        color='navbar' 
        fontSize='subheading' 
        fontWeight='bold'
        padding='navbar'
    >
    {text}</Text>
)

export default AppBarTab