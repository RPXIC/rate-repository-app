import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
    backgroundColor: theme.colors.bgItem
  },
  ratingContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 8
  },
  info: {
    flex: 4
  },
  rating: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#2372c1',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionsContainer: {
    flexDirection: 'row'
  },
  viewPressable: {
    marginRight: 6,
    marginTop: 6,
    backgroundColor: '#0165d4',
  },
  deletePressable: {
    marginTop: 6,
    backgroundColor: '#d6394c',
  },
  text: {
    color: '#fff',
    margin: 8
  }
})