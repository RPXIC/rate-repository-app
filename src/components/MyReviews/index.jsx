import React from 'react'
import { FlatList } from 'react-native'
import ReviewItem from '../ReviewItem'
import { useAuthorizedUser } from 'hooks'

const MyReviews = () => {
  const { deleteReview, myReviews, refetch } = useAuthorizedUser({ includeReviews: true })

  return (
    <FlatList
      data={myReviews}
      renderItem={({ item }) => <ReviewItem review={item} isAuthorized deleteReview={deleteReview} refetch={refetch} />}
      keyExtractor={({ repositoryId }) => repositoryId}
    />
  )
}

export default MyReviews