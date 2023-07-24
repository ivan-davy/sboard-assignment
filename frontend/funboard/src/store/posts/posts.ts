import { createSlice } from '@reduxjs/toolkit';
import { NamespaceEnum } from '../../const/namespace.enum';
import { fetchPostsDataAction } from '../api-actions';
import { PostType } from '../../types/post.type';
import {
  addPostToStateAction,
  deletePostFromStateAction,
  updatePostInStateAction,
} from './actions';

export const initialState = [] as PostType[];

export const posts = createSlice({
  name: NamespaceEnum.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPostsDataAction.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(deletePostFromStateAction, (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    });

    builder.addCase(addPostToStateAction, (state, action) => {
      return [action.payload, ...state];
    });

    builder.addCase(updatePostInStateAction, (state, action) => {
      const postToBeReplaced = state.find(
        (post) => post.id === action.payload.id,
      );
      postToBeReplaced!.title = action.payload.title;
      postToBeReplaced!.text = action.payload.text;
      postToBeReplaced!.color = action.payload.color;
      return state;
    });
  },
});
