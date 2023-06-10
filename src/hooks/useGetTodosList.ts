import { useQuery } from '@tanstack/react-query';
import { getAllTodos } from 'api';
import { TTodoListParams } from 'types';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useGetTodosList = (params: TTodoListParams) => {
  const query = useQuery(['todos'], () => getAllTodos(params), {
    staleTime: STALE_TIME,
  });
  return query;
};
