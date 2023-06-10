import { TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from 'navigation/types';

import styles from './styles';
import { TodoItem } from 'components/TodoItem';
import { useGetTodosList } from 'hooks';
import { FlatList } from 'react-native-gesture-handler';
import { TTodo } from 'types';
import { Icons } from 'assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AddTodoForm } from 'modals/AddTodoForm';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';

export default function MainPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'MainPage'>) {
  const { top } = useSafeAreaInsets();
  const { data } = useGetTodosList({ page: 1 });
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      text: '',
      name: '',
      email: '',
    },
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = handleSubmit(todoData => {
    console.log(todoData);
    reset();
    setIsModalVisible(false);
  });

  return (
    <>
      <View style={styles.screen}>
        <TouchableOpacity
          style={[styles.addTodoButton, { top: top + 20 }]}
          onPress={() => setIsModalVisible(true)}>
          <Icons.Plus color="#fff" />
        </TouchableOpacity>
        <FlatList
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.todoListContainer}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          data={data?.message.tasks || ([] as unknown as TTodo[])}
          renderItem={({ item }) => (
            <TodoItem
              todoStatus={item.status}
              todoText={item.text}
              userEmail={item.email}
              userName={item.username}
            />
          )}
        />
      </View>
      <AddTodoForm
        visible={isModalVisible}
        control={control as unknown as Control<FieldValues>}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
}
