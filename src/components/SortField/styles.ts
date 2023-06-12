import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  chevronTop: {
    transform: [{ rotate: '90deg' }],
  },
  chevronBottom: {
    transform: [{ rotate: '270deg' }],
  },
});
