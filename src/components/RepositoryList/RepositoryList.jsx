import React from 'react'
import { FlatList, Text, View } from 'react-native'
import RepositoryItem from 'components/RepositoryItem/RepositoryItem'
import { useRepositories } from 'hooks'

export const RepositoryListUI = ({ repositories }) => (
  <FlatList
    data={repositories}
    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    renderItem={({ item }) => <RepositoryItem item={item} />}
    keyExtractor={item => item.id}
  />
)

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()

  if (loading) return (<View><Text>Loading...</Text></View>)

  return (
    <RepositoryListUI repositories={repositories} />
  )
}

export default RepositoryList

