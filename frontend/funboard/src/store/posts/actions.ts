import { createAction } from '@reduxjs/toolkit';

export const deletePostFromStateAction = createAction(
  'posts/delete-by-id-local',
  (id: number) => ({ payload: id }),
);

export const addPostToStateAction = createAction(
  'posts/add-new-local',
  (newPostImitation: {
    title: string;
    text: string;
    color: string;
    createdBy: string;
    createdById: number;
    postedDate: string;
  }) => ({ payload: newPostImitation }),
);

export const updatePostInStateAction = createAction(
  'posts/update-local',
  (updatedPostImitation: {
    id: number;
    title: string;
    text: string;
    color: string;
  }) => ({
    payload: updatedPostImitation,
  }),
);
