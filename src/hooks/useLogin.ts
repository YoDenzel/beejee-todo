import { useQueryClient, useMutation } from '@tanstack/react-query';
import { signIn } from 'api';
import { QUERY_KEYS } from './queryKeys';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (payload: { password: string; username: string }) => signIn(payload),
    {
      onSettled: () => {
        queryClient.invalidateQueries([QUERY_KEYS.LOGIN]);
      },
    },
  );
  return mutation;
};
