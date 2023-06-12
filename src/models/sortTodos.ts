import { createEvent, createStore } from 'effector';

type TSortField = 'id' | 'username' | 'email' | 'order';

type TSortStore = {
  id: 'none' | 'asc' | 'desc';
  username: 'none' | 'asc' | 'desc';
  email: 'none' | 'asc' | 'desc';
  order: 'none' | 'asc' | 'desc';
};

export const $sortStore = createStore<TSortStore>({
  id: 'none',
  username: 'none',
  email: 'none',
  order: 'none',
});

export const $sortLink = $sortStore.map(state => {
  return Object.keys(state).reduce((acc, key) => {
    const field = state[key as TSortField];
    if (field !== 'none') {
      acc += `sort_field=${key}&sort_direction=${field}`;
    }
    return acc;
  }, '');
});

export const setSort = createEvent<TSortField>();

$sortStore.on(setSort, (state, payload) => {
  const field = state[payload];
  Object.keys(state).forEach(key => {
    if (key !== payload) {
      state[key as TSortField] = 'none';
    }
  });
  if (field === 'none') {
    return {
      ...state,
      [payload]: 'asc',
    };
  } else if (field === 'asc') {
    return {
      ...state,
      [payload]: 'desc',
    };
  } else {
    return {
      ...state,
      [payload]: 'none',
    };
  }
});
