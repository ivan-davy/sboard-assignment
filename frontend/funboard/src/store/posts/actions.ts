import { createAction } from '@reduxjs/toolkit';

export const deletePostFromStateAction = createAction(
  'posts/delete-by-id',
  (id: number) => ({ payload: id }),
);

export const addPostToStateAction = createAction(
  'posts/add-new',
  (newPostImitation: {
    title: string;
    text: string;
    color: string;
    createdBy: string;
    createdById: number;
    postedDate: string;
  }) => ({ payload: newPostImitation }),
);
