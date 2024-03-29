import { $accessToken, setAccessToken } from 'models/auth';
import { Alert } from 'react-native';
import {
  TCreateTodoParams,
  TSignInParams,
  TSignInResponse,
  TTodoList,
  TTodoListParams,
  TUpdateTodo,
} from 'types';

const BASE_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

const DEVELOPER_NAME = '?developer=DenisDolbilin';

export const getAllTodos = async ({
  page,
  sortUrl,
}: TTodoListParams): Promise<TTodoList | undefined> => {
  const url = `${BASE_URL + DEVELOPER_NAME}&page=${page}&${sortUrl}`;
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

export const updateTodo = async (formData: TUpdateTodo, id: number) => {
  const data = new FormData();
  const accessToken = $accessToken.getState();
  formData?.username && data.append('username', formData.username);
  formData?.status !== undefined && data.append('status', formData.status);
  formData?.text && data.append('text', formData.text);
  formData?.email && data.append('email', formData.email);
  data.append('token', accessToken);
  const response = await fetch(`${BASE_URL}/edit/${id}/${DEVELOPER_NAME}`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const result = await response.json();
  return result;
};
