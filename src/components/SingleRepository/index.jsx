import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useParams } from 'react-router-native'
import RepostoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'
import useRepository from 'hooks/useRepository'

const RepositoryDetail = () => {
  const { id } = useParams()
  const { fetchMore, loading, repository, reviews } = useRepository({ id, first: 7 })

  if (loading) return <View><Text>Loading...</Text></View>

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepostoryItem item={repository} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryDetail