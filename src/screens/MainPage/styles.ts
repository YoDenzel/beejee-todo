import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(255, 253, 244, 0.96);',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  todoListContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  addTodoButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    backgroundColor: '#DFBD43',
    borderRadius: 50,
  },
  listSeparator: { height: 10 },
});
