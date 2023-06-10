import { Alert } from 'react-native';
import { TTodoList, TTodoListParams } from 'types';

const BASE_URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=DenisDolbilin';

export const getAllTodos = async ({
  page,
  sort_direction,
  sort_field,
}: TTodoListParams): Promise<TTodoList | undefined> => {
  const url = `${BASE_URL}&page=${page}&sort_direction=${sort_direction}&sort_field=${sort_field}`;
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    Alert.alert('Error', 'Что-то пошло не так, попробуйте позже');
  }
  return undefined;
};

export const createTodo = async (formData: FormData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const result = await response.json();
  return result;
};
