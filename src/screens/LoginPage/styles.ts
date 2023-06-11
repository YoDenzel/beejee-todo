import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.01,
    color: '#0E173C',
    marginBottom: 20,
  },
  loginButtonsContainer: {
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowColor: Platform.OS === 'android' ? '#000000' : 'rgba(0, 0, 0, 0.08)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 24,
    elevation: 4,
    padding: 20,
  },
  authButtonContainer: { backgroundColor: '#14bd88' },
  authButtonText: { color: '#fff' },
  inputContainer: {
    marginBottom: 20,
  },
});
