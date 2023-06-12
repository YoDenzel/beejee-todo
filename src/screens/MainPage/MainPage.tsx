import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { FlatList } from 'react-native-gesture-handler';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore } from 'effector-react';

import { TTodo } from 'types';
import {
  useCreateTodo,
  useGetTodosList,
  usePagination,
  useUpdateTodo,
} from 'hooks';
import { RootStackParamList } from 'navigation/types';
import { TodoItem } from 'components/TodoItem';
import { ButtonDefault } from 'components/ButtonDefault';
import { Pagination } from 'components/Pagination';
import { Icons } from 'assets/icons';
import { AddTodoForm } from 'modals/AddTodoForm';
import { $accessToken, setAccessToken } from 'models/auth';
import { TodoListHeader } from 'components/TodoListHeader';

import styles from './styles';

export default function MainPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'MainPage'>) {
  const { top } = useSafeAreaInsets();
  const [page, setPage] = useState(1);
  const [activeTodo, setActiveTodo] = useState<TTodo | null>(null);
  const { data } = useGetTodosList(page);
  const isAuth = useStore($accessToken);
  const { control, handleSubmit, reset, setValue } = useForm({
    mode: 'all',
    defaultValues: {
      text: '',
      username: '',
      email: '',
    },
  });
  const { mutateAsync: createTodo } = useCreateTodo();
  const { mutateAsync: updateTodo, isLoading } = useUpdateTodo();
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

    if (activeTodo?.id) {
      updateTodo({
        params: {
          status: activeTodo.status === 0 ? 1 : 11,
          text:
            activeTodo.status === 1 || activeTodo.status === 11
              ? todoData.text
              : todoData.text + ' (задача отредактирована админом)',
        },
        id: activeTodo.id,
      }).then(() => {
        reset();
        setActiveTodo(null);
        setIsModalVisible(false);
        Alert.alert('Success', 'Todo successfully updated');
      });
    } else {
      createTodo(todoData)
        .then(() => {
          reset();
          setIsModalVisible(false);
          Alert.alert('Success', 'Todo successfully created');
        })
        .catch(e => {
          Alert.alert('Error', e.message);
        });
    }
  });

  const onTodoCardPress = (todo: TTodo) => {
    setValue('text', todo.text);
    setValue('username', todo.username);
    setValue('email', todo.email);
    setActiveTodo(todo);
    setIsModalVisible(true);
  };

  const onStatusChange = (todo: TTodo) => {
    switch (todo.status) {
      case 0:
        updateTodo({ id: todo.id, params: { status: 10 } });
        break;
      case 10:
        updateTodo({ id: todo.id, params: { status: 0 } });
        break;
      case 11:
        updateTodo({ id: todo.id, params: { status: 1 } });
        break;
      default:
        updateTodo({ id: todo.id, params: { status: 11 } });
        break;
    }
  };

  const onCloseForm = () => {
    reset();
    setActiveTodo(null);
    setIsModalVisible(false);
  };

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
          ListHeaderComponent={() => <TodoListHeader />}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          data={data?.message.tasks || ([] as unknown as TTodo[])}
          renderItem={({ item }) => (
            <TodoItem
              isLoading={isLoading}
              todoStatus={item.status}
              todoText={item.text}
              userEmail={item.email}
              userName={item.username}
              onCardPress={() => onTodoCardPress(item)}
              switchStatus={() => onStatusChange(item)}
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
        onClose={onCloseForm}
        onSubmit={onSubmit}
        isNameAndEmailDisabled={!!activeTodo?.id}
      />
    </>
  );
}
