import { createSlice } from '@reduxjs/toolkit';
import { NamespaceEnum } from '../../const/namespace.enum';
import { fetchPostsDataAction } from '../api-actions';
import { PostType } from '../../types/post.type';
import { addPostToStateAction, deletePostFromStateAction } from './actions';

export const initialState = [] as PostType[];

export const posts = createSlice({
  name: NamespaceEnum.Posts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPostsDataAction.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });

    builder.addCase(deletePostFromStateAction, (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    });

    builder.addCase(addPostToStateAction, (state, action) => {
      state.unshift(action.payload);
      return state;
    });
  },
});
