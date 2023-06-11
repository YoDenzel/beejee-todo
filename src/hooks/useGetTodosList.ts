import { useQuery } from '@tanstack/react-query';

import { getAllTodos } from 'api';
import { TTodoListParams } from 'types';

import { QUERY_KEYS } from './queryKeys';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useGetTodosList = (params: TTodoListParams) => {
  const query = useQuery(
    [QUERY_KEYS.TODOS, params.page],
    () => getAllTodos(params),
    {
      staleTime: STALE_TIME,
    },
  );
  return query;
};
