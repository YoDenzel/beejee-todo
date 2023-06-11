import { setAccessToken } from 'models/auth';
import { Alert } from 'react-native';
import {
  TCreateTodoParams,
  TSignInParams,
  TSignInResponse,
  TTodoList,
  TTodoListParams,
} from 'types';

const BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

const DEVELOPER_NAME = '?developer=DenisDolbilin';

export const getAllTodos = async ({
  page,
  sort_direction,
  sort_field,
}: TTodoListParams): Promise<TTodoList | undefined> => {
  const url = `${
    BASE_URL + DEVELOPER_NAME
  }&page=${page}&sort_direction=${sort_direction}&sort_field=${sort_field}`;
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    Alert.alert('Error', 'Что-то пошло не так, попробуйте позже');
  }
  return undefined;
};

export const createTodo = async (createTodoParams: TCreateTodoParams) => {
  const formData = new FormData();
  formData.append('username', createTodoParams.username);
  formData.append('email', createTodoParams.email);
  formData.append('text', createTodoParams.text);
  const response = await fetch(`${BASE_URL}/create/${DEVELOPER_NAME}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const result = await response.json();
  return result;
};

export const signIn = async (
  signInParams: TSignInParams,
): Promise<TSignInResponse | undefined> => {
  const data = new FormData();
  data.append('username', signInParams.username);
  data.append('password', signInParams.password);
  try {
    const response = await fetch(`${BASE_URL}/login/${DEVELOPER_NAME}`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = (await response.json()) as TSignInResponse;
    if (result.status !== 'error') {
      setAccessToken(result.message.token);
    }
    return result;
  } catch (error) {
    setAccessToken(null);
    Alert.alert('Error', 'Что-то пошло не так, попробуйте позже');
  }
};

export const updateTodo = async (formData: FormData) => {
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
