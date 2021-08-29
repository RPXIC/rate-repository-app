import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

const SearchForm = ({ keyword, setKeyword, debounced }) => {
  return (
    <TextInput style={styles.search} autoFocus placeholder='Search' value={keyword} onChangeText={text => {
      setKeyword(text)
      debounced(text)
    }} />
  )
}
export default SearchForm