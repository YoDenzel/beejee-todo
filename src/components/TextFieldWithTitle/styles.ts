import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    marginRight: 15,
    width: 60,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
  },
  input: {
    marginTop: 0,
    marginLeft: 0,
    minHeight: 45,
    maxHeight: 60,
    justifyContent: 'center',
    paddingRight: 10,
    fontSize: 17,
    lineHeight: 19,
    color: '#0E173C',
    flex: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: 50,
    paddingLeft: 10,
    width: '100%',
  },
});
