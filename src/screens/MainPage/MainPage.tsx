import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { FlatList } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore } from 'effector-react';

import { TTodo } from 'types';
import { useCreateTodo, useGetTodosList, usePagination } from 'hooks';
import { RootStackParamList } from 'navigation/types';
import { TodoItem } from 'components/TodoItem';
import { ButtonDefault } from 'components/ButtonDefault';
import { Pagination } from 'components/Pagination';
import { Icons } from 'assets/icons';
import { AddTodoForm } from 'modals/AddTodoForm';
import { $accessToken, setAccessToken } from 'models/auth';

import styles from './styles';

export default function MainPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'MainPage'>) {
  const { top } = useSafeAreaInsets();
  const [page, setPage] = useState(1);
  const { data } = useGetTodosList({ page });
  const isAuth = useStore($accessToken);
  const { control, handleSubmit, reset } = useForm({
    mode: 'all',
    defaultValues: {
      text: '',
      username: '',
      email: '',
    },
  });
  const { mutateAsync } = useCreateTodo();
  const paginationRange = usePagination({
    total: data?.message.total_task_count || 0,
    currentPage: page,
    pageSize: 3,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = handleSubmit(todoData => {
    if (
      todoData.text === '' ||
      todoData.username === '' ||
      todoData.email === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(todoData.email)
    ) {
      Alert.alert('Error', 'Please enter valid email');
      return;
    }
    mutateAsync(todoData)
      .then(() => {
        reset();
        setIsModalVisible(false);
        Alert.alert('Success', 'Todo successfully created');
      })
      .catch(e => {
        Alert.alert('Error', e.message);
      });
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
          ListFooterComponent={() => (
            <Pagination
              onPageChange={setPage}
              paginationRange={paginationRange || []}
              activePage={page}
            />
          )}
        />
        <ButtonDefault
          text={isAuth ? 'Выйти' : 'Войти как админ'}
          onPress={
            !isAuth
              ? () => navigation.navigate('LoginPage')
              : () => setAccessToken(null)
          }
        />
      </View>
      <AddTodoForm
        visible={isModalVisible}
        control={control as unknown as Control<FieldValues>}
        onClose={() => setIsModalVisible(false)}
        onSubmit={onSubmit}
      />
    </>
  );
}
