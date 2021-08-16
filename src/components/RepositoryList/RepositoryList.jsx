import React from 'react'
import { FlatList, Text, View } from 'react-native'
import RepositoryItem from 'components/RepositoryItem/RepositoryItem'
import { useRepositories } from 'hooks'

export const RepositoryListUI = ({ repositories, onEndReach }) => (
  <FlatList
    data={repositories}
    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    renderItem={({ item }) => <RepositoryItem item={item} />}
    keyExtractor={item => item.id}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
  />
)

const RepositoryList = () => {
  const { repositories, loading, fetchMore } = useRepositories({ first: 8 })

  if (loading) return (<View><Text>Loading...</Text></View>)

  const onEndReach = () => fetchMore()

  return (
    <RepositoryListUI repositories={repositories} onEndReach={onEndReach} />
  )
}

export default RepositoryList

