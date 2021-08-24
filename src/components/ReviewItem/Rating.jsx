import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const Rating = ({ rating }) => (
  <View style={styles.rating}>
    <Text style={{ color: '#2372c1' }}>{rating}</Text>
  </View>
)

export default Rating