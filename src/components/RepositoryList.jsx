import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const RepositoryList = () => {
  const { repositoryNodes, error, loading } = useRepositories()

  if (loading) return (<View><Text>Loading...</Text></View>)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => <RepositoryItem item={item} /> }
      keyExtractor={item => item.id}
    />
  )
}

export default RepositoryList