import { View } from 'react-native';

import { SortField } from 'components/SortField';

import styles from './styles';
import { useStore } from 'effector-react';
import { $sortStore } from 'models/sortTodos';

const TodoListHeader = () => {
  const { email, id, order, username } = useStore($sortStore);
  return (
    <View style={styles.container}>
      <SortField title="id" sortDirection={id} />
      <SortField title="email" sortDirection={email} />
      <SortField title="username" sortDirection={username} />
      <SortField title="order" sortDirection={order} />
    </View>
  );
};

export default TodoListHeader;
