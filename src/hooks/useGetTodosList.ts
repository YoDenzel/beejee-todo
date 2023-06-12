import { useQuery } from '@tanstack/react-query';
import { useStore } from 'effector-react';

import { getAllTodos } from 'api';
import { $sortLink } from 'models/sortTodos';

import { QUERY_KEYS } from './queryKeys';

const STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useGetTodosList = (page: number) => {
  const sortUrl = useStore($sortLink);
  const query = useQuery(
    [QUERY_KEYS.TODOS, page, sortUrl],
    () => getAllTodos({ page, sortUrl }),
    {
      staleTime: STALE_TIME,
    },
  );
  return query;
};
