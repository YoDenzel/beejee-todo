import { persist } from 'effector-storage/rn/async';
import { createEvent, createStore } from 'effector';

export const setAccessToken = createEvent<string | null>();

export const $accessToken = createStore<string | null>(null).on(
  setAccessToken,
  (_, payload) => payload,
);

persist({ store: $accessToken, key: 'accessToken' });
