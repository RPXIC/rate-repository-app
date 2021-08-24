import React from 'react'
import { View } from 'react-native'
import Text from '../Text'
import Rating from './Rating'
import { dateParser } from 'utils/dateParser'
import { styles } from './styles'

const ReviewItem = ({ review }) => {
  const { rating, createdAt, text, user: { username } } = review

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Rating rating={rating} />
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold' padding='verticalS'>{username}</Text>
        <Text color='textSecondary' padding='verticalS'>{dateParser(createdAt)}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem