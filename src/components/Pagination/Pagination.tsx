import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const Pagination = ({
  paginationRange,
  onPageChange,
  activePage,
}: TPagination) => {
  return (
    <View style={styles.container}>
      {paginationRange.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <Text key={item + index} style={styles.text}>
              &#8230;
            </Text>
          );
        }

        return (
          <TouchableOpacity
            key={item}
            style={styles.pageButton}
            onPress={() => onPageChange(item)}>
            <Text
              style={[styles.text, activePage === item && styles.activePage]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

type TPagination = {
  paginationRange: (number | string)[];
  onPageChange: (page: number) => void;
  activePage: number;
};

export default Pagination;
