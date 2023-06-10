import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const TodoItem = ({ todoStatus, todoText, userEmail, userName }: TTodoItem) => {
  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.todoTextContainer}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userNameText} numberOfLines={1}>
            {userName}
          </Text>
          <Text style={{}} numberOfLines={1}>
            {userEmail}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text numberOfLines={1} style={styles.todoText}>
            {todoText}
          </Text>
          <Text>{todoStatus}</Text>
        </View>
      </View>
    </View>
  );
};

type TTodoItem = {
  userName: string;
  todoText: string;
  userEmail: string;
  todoStatus: 0 | 1 | 10 | 11;
};

export default TodoItem;
