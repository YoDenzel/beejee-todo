import { View, Text, TouchableOpacity } from 'react-native';

import { Icons } from 'assets/icons';
import { setSort } from 'models/sortTodos';

import styles from './styles';

const SortField = ({ sortDirection, title }: TSortField) => {
  const sortStyleDirection = () => {
    if (sortDirection === 'asc') {
      return styles.chevronTop;
    }
    if (sortDirection === 'desc') {
      return styles.chevronBottom;
    }
    return;
  };
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={() => setSort(title)}
        style={sortStyleDirection()}>
        <Icons.Chevron />
      </TouchableOpacity>
    </View>
  );
};

type TSortField = {
  title: 'id' | 'email' | 'username' | 'order';
  sortDirection: 'asc' | 'desc' | 'none';
};

export default SortField;
