import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import RepositoryItem from 'components/RepositoryItem'
import { useRepositories } from 'hooks'
import { useHistory } from 'react-router-native'

export const RepositoryListUI = ({ repositories, onEndReach }) => {
  const history = useHistory()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <Pressable onPress={() => history.push(`/details/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryList = () => {
  const { repositories, loading, fetchMore } = useRepositories({ first: 8 })

  if (loading) return (<View><Text>Loading...</Text></View>)

  const onEndReach = () => fetchMore()

  return (
    <RepositoryListUI repositories={repositories} onEndReach={onEndReach} />
  )
}

export default RepositoryList

