import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native'
import { useDebouncedCallback } from 'use-debounce';
import RepositoryItem from 'components/RepositoryItem'
import OrderPicker from '../OrderPicker'
import SearchForm from '../SearchForm'
import { useRepositories } from 'hooks'
import { useHistory } from 'react-router-native'

export const RepositoryListUI = ({ repositories, onEndReach, order, setOrder, keyword, setKeyword, debounced }) => {
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
      ListHeaderComponent={
        <>
          <SearchForm keyword={keyword} setKeyword={setKeyword} debounced={debounced} />
          <OrderPicker order={order} setOrder={setOrder} />
        </>
      }
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryList = () => {
  const [order, setOrder] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC', defaultSelected: 0 })
  const [keyword, setKeyword] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const { orderBy, orderDirection } = order
  const { repositories, loading, fetchMore } = useRepositories({ first: 7, orderBy, orderDirection, searchKeyword })

  const debounced = useDebouncedCallback(setSearchKeyword, 1000);

  const onEndReach = () => fetchMore()

  if (loading) return <ActivityIndicator size='large' style={{ marginTop: 15 }} />

  return (
    <RepositoryListUI repositories={repositories} onEndReach={onEndReach} order={order} setOrder={setOrder} keyword={keyword} setKeyword={setKeyword} debounced={debounced} />
  )
}

export default RepositoryList

