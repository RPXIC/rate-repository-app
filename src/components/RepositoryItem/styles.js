import { StyleSheet } from "react-native"
import theme from '../../theme'

export const styles = StyleSheet.create({
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
  },
  button: {
    backgroundColor: '#016ad1',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  }
})
