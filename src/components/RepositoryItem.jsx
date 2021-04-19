import React from 'react'
import { Image, StyleSheet, Text as NativeText, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { numFormatter } from '../utils'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgItem,
    padding: 13,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  topText: {
    marginHorizontal: 15,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  languageContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  language: {
    color: 'white',
    backgroundColor: '#016ad1',
    fontWeight: '700',
    paddingHorizontal: 9,
    paddingVertical: 5,
    textAlign: 'center',
    borderRadius: 5,
  }
})

const RespositoryItem = ({ item }) => {
  const { ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviews, ratingAverage } = item

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          borderRadius={5}
          source={{uri: ownerAvatarUrl}}
          style={theme.avatar}
        />
        <View style={styles.topText}>
          <Text fontWeight='bold' padding='verticalS'>{fullName}</Text>
          <Text color='textSecondary' padding='verticalS'>{description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{language}</Text>
          </View>
        </View>
    </View>
    <View style={styles.bottom}>
        <View style={{alignItems:'center'}}>
          <Text fontWeight='bold'>{numFormatter(stargazersCount)}</Text>
          <NativeText>Stars</NativeText>
        </View>
        <View style={{alignItems:'center'}}>
          <Text fontWeight='bold'>{numFormatter(forksCount)}</Text>
          <NativeText>Forks</NativeText>
        </View>
        <View style={{alignItems:'center'}}>
          <Text fontWeight='bold'>{reviews.totalCount}</Text>
          <NativeText>Reviews</NativeText>
        </View>
        <View style={{alignItems:'center'}}>
          <Text fontWeight='bold'>{ratingAverage}</Text>
          <NativeText>Rating</NativeText>
        </View>
      </View>
    </View>
  )
}

export default RespositoryItem