import React, { memo } from 'react'
import { Image, Pressable, Text as NativeText, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import Text from 'components/Text'
import theme from 'theme'
import { numFormatter } from 'utils'
import { styles } from './styles'

const RepositoryItem = ({ item, details }) => {
  const { ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount, reviews, ratingAverage, url } = item

  return (
    <View testID='name' style={styles.container}>
      <View style={styles.top}>
        <Image
          borderRadius={5}
          source={{ uri: ownerAvatarUrl }}
          style={theme.avatar}
        />
        <View style={styles.topText}>
          <Text testID='RepositoryItemName' fontWeight='bold' padding='verticalS'>{fullName}</Text>
          <Text testID='RepositoryItemDescription' color='textSecondary' padding='verticalS'>{description}</Text>
          <View testID='RepositoryItemLanguage' style={styles.languageContainer}>
            <Text style={styles.language}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{numFormatter(stargazersCount)}</Text>
          <NativeText>Stars</NativeText>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{numFormatter(forksCount)}</Text>
          <NativeText>Forks</NativeText>
        </View>
        {reviews?.totalCount ? <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{reviews.totalCount}</Text>
          <NativeText>Reviews</NativeText>
        </View> : null}
        <View style={{ alignItems: 'center' }}>
          <Text fontWeight='bold'>{ratingAverage}</Text>
          <NativeText>Rating</NativeText>
        </View>
      </View>
      {details && (
        <View style={styles.button}>
          <Pressable onPress={() => WebBrowser.openBrowserAsync(url)}>
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default memo(RepositoryItem)