import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateTodo } from 'api';
import { TUpdateTodo } from 'types';
import { QUERY_KEYS } from './queryKeys';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ params, id }: { params: TUpdateTodo; id: number }) =>
      updateTodo(params, id),
    {
      onSettled: () => {
        queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
      },
    },
  );
  return mutation;
};
