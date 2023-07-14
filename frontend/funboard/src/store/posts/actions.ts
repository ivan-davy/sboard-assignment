import { createAction } from '@reduxjs/toolkit';

export const deletePostFromStateAction = createAction(
  'posts/delete-by-id',
  (id: number) => ({ payload: id }),
);
