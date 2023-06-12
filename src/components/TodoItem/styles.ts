import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  todoItemContainer: {
    borderWidth: 2,
    borderColor: '#D6D6D6',
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoTextContainer: { flex: 1 },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  todoText: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.01,
    color: '#0E173C',
    paddingVertical: 12,
  },
  switchStatusButton: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    width: 24,
    height: 24,
    backgroundColor: '#fff',
  },
  switchStatusButtonActive: {
    backgroundColor: '#DFBD43',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameText: { marginRight: 8, flex: 1 },
});
