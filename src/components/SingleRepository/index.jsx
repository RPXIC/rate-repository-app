import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useParams } from 'react-router-native'
import RepostoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'
import useRepository from 'hooks/useRepository'

const RepositoryDetail = () => {
  const { id } = useParams()
  const { loading, repository, reviews } = useRepository(id)

  if (loading) return <View><Text>Loading...</Text></View>

  return (
    <View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepostoryItem item={repository} />}
      />
    </View>
  )
}

export default RepositoryDetail