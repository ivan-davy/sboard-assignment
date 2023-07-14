import { combineReducers } from '@reduxjs/toolkit';
import { posts } from './posts/posts';
import { user } from './user/user';
import { service } from './service/service';
import { NamespaceEnum } from '../const/namespace.enum';

export const rootReducer = combineReducers({
  [NamespaceEnum.Posts]: posts.reducer,
  [NamespaceEnum.User]: user.reducer,
  [NamespaceEnum.Service]: service.reducer,
});
