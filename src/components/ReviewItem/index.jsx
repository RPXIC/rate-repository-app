import React from 'react'
import { Alert, Pressable, View } from 'react-native'
import Text from '../Text'
import Rating from './Rating'
import { dateParser } from 'utils/dateParser'
import { styles } from './styles'
import { useHistory } from 'react-router-native'

const ReviewItem = ({ deleteReview, isAuthorized, review, refetch }) => {
  const history = useHistory()
  const { repositoryId, rating, createdAt, text, user: { username }, id } = review

  const createTwoButtonAlert = () => (
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", onPress: () => null, style: "cancel" },
        {
          text: "Delete", onPress: async () => {
            const deleted = await deleteReview(id)
            if (deleted) refetch()
          }
        }
      ]
    )
  )

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Rating rating={rating} />
      </View>
      <View style={styles.info}>
        <Text fontWeight='bold' padding='verticalS'>{username}</Text>
        <Text color='textSecondary' padding='verticalS'>{dateParser(createdAt)}</Text>
        <Text>{text}</Text>
        {isAuthorized && (
          <View style={styles.actionsContainer}>
            <Pressable style={styles.viewPressable} onPress={() => history.push(`/details/${repositoryId}`)}>
              <Text style={styles.text}>View repository</Text>
            </Pressable>
            <Pressable style={styles.deletePressable} onPress={createTwoButtonAlert}>
              <Text style={styles.text}>Delete review</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  )
}

export default ReviewItem