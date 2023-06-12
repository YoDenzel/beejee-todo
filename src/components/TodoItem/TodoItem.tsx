import { Text, TouchableOpacity, View } from 'react-native';
import { useMemo } from 'react';

import { Icons } from 'assets/icons';

import styles from './styles';
import { useStore } from 'effector-react';
import { $accessToken } from 'models/auth';

const TodoItem = ({
  todoStatus,
  todoText,
  userEmail,
  userName,
  onCardPress,
  switchStatus,
  isLoading,
}: TTodoItem) => {
  const status = useMemo(
    () => todoStatus === 10 || todoStatus === 11,
    [todoStatus],
  );
  const isAuth = useStore($accessToken);

  return (
    <TouchableOpacity
      disabled={!isAuth}
      style={styles.todoItemContainer}
      onPress={onCardPress}>
      <TouchableOpacity
        onPress={switchStatus}
        disabled={!isAuth || isLoading}
        style={[
          styles.switchStatusButton,
          status && styles.switchStatusButtonActive,
        ]}>
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
    </TouchableOpacity>
  );
};

type TTodoItem = {
  userName: string;
  todoText: string;
  userEmail: string;
  todoStatus: number;
  onCardPress: () => void;
  switchStatus: () => void;
  isLoading?: boolean;
};

export default TodoItem;
