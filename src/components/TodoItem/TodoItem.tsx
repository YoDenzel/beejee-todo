import { Text, TouchableOpacity, View } from 'react-native';
import { useMemo } from 'react';

import { Icons } from 'assets/icons';

import styles from './styles';

const TodoItem = ({ todoStatus, todoText, userEmail, userName }: TTodoItem) => {
  const status = useMemo(
    () => todoStatus === 10 || todoStatus === 11,
    [todoStatus],
  );

  return (
    <View style={styles.todoItemContainer}>
      <TouchableOpacity
        style={[
          styles.switchStatusButton,
          status && styles.switchStatusButtonActive,
        ]}
        disabled>
        {status ? <Icons.Tick /> : null}
      </TouchableOpacity>
      <View style={styles.todoTextContainer}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userNameText} numberOfLines={1}>
            {userName}
          </Text>
          <Text style={{}} numberOfLines={1}>
            {userEmail}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.todoText}>
          {todoText}
        </Text>
      </View>
    </View>
  );
};

type TTodoItem = {
  userName: string;
  todoText: string;
  userEmail: string;
  todoStatus: number;
};

export default TodoItem;
