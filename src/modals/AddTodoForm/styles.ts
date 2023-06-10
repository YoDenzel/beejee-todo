import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    flex: 1,
  },
  inputContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  requestInputTitle: {
    fontSize: 18,
    lineHeight: 22,
    width: '100%',
    textAlign: 'center',
    marginBottom: 12,
  },
  requestInputContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  requestInputWrapper: {
    width: '100%',
    borderRadius: 8,
  },
  requestInput: {
    textAlignVertical: 'top',
    flex: 1,
    minHeight: 150,
    paddingBottom: 5,
    borderRadius: 8,
    paddingTop: 5,
    paddingRight: 10,
  },
  addTodoTitle: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.01,
    color: '#0E173C',
  },
  sendButtonContainer: { backgroundColor: '#FCDE31' },
  closeIconButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
