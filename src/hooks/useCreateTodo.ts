import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo } from 'api';
import { TCreateTodoParams } from 'types';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (props: TCreateTodoParams) => createTodo(props),
    {
      onSettled: () => {
        queryClient.invalidateQueries(['todos']);
      },
    },
  );
  return mutation;
};
