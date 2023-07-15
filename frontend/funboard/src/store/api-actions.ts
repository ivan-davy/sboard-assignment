import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { redirectToRouteAction } from './service/actions';
import { saveToken } from '../api/token';
import React from 'react';
import { toast } from 'react-toastify';
import { PostType } from '../types/post.type';
import { AppDispatchType, StateType } from '../types/states/state.type';
import { ApiRouteEnum } from '../const/routes/api-route.enum';
import { PageRouteEnum } from '../const/routes/page-route.enum';
import { FormStatusEnum } from '../const/form-status.enum';
import { PostUpdateType } from '../types/post-update.type';
import { UserType } from '../types/user.type';
import { RegisterDataType } from '../types/register-data.type';
import { AuthDataType } from '../types/auth-data.type';
import HttpError from '../utils/http-error';

type FetchPostsReturnType = PostType[];
export const fetchPostsDataAction = createAsyncThunk<
  FetchPostsReturnType,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('posts/api/get-all', async (_, { getState, dispatch, extra: api }) => {
  try {
    return (await api.get<PostType[]>(ApiRouteEnum.Posts)).data;
  } catch (err) {
    throw err;
  }
});

type CreatePostReturnType = PostType;
export const createPostAction = createAsyncThunk<
  CreatePostReturnType,
  {
    post: PostType;
    setFormSubmitStateCb: React.Dispatch<React.SetStateAction<number>>;
  },
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('posts/api/new', async (formData, { dispatch, extra: api }) => {
  try {
    const newPost = (
      await api.post<PostType>(`${ApiRouteEnum.Posts}`, formData.post)
    ).data;
    formData.setFormSubmitStateCb(FormStatusEnum.Submitted);
    dispatch(redirectToRouteAction(`${PageRouteEnum.Posts}`));

    return newPost;
  } catch (err) {
    toast.error('Something went wrong...');
    formData.setFormSubmitStateCb(FormStatusEnum.Available);

    throw err;
  }
});

type UpdatePostReturnType = PostUpdateType;
export const updatePostAction = createAsyncThunk<
  UpdatePostReturnType,
  {
    post: PostUpdateType;
    setFormSubmitStateCb: React.Dispatch<React.SetStateAction<number>>;
    postId: number;
  },
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('posts/api/update-by-id', async (formData, { dispatch, extra: api }) => {
  const postId = formData.postId;
  try {
    const updatedPost = (
      await api.patch<PostType>(
        `${ApiRouteEnum.Posts}/${postId}`,
        formData.post,
      )
    ).data;
    formData.setFormSubmitStateCb(FormStatusEnum.Submitted);
    dispatch(redirectToRouteAction(`${PageRouteEnum.Posts}`));

    return updatedPost;
  } catch (err) {
    toast.error('Something went wrong...');
    formData.setFormSubmitStateCb(FormStatusEnum.Available);

    throw err;
  }
});

export const deletePostAction = createAsyncThunk<
  void,
  {
    postId: number;
  },
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('posts/api/delete-by-id', async (formData, { dispatch, extra: api }) => {
  const postId = formData.postId;
  try {
    await api.delete<PostType>(`${ApiRouteEnum.Posts}/${postId}`);
    dispatch(redirectToRouteAction(`${PageRouteEnum.Posts}`));
  } catch (err) {
    toast.error('Something went wrong...');
    throw err;
  }
});

type CheckAuthReturnType = UserType;
export const checkAuthAction = createAsyncThunk<
  CheckAuthReturnType,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/api/check-auth', async (_, { dispatch, extra: api }) => {
  const userData = (await api.get<UserType>(ApiRouteEnum.SignIn)).data;
  const completeUserData: CheckAuthReturnType = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token: userData.token,
  };
  return completeUserData;
});

type RegisterReturnType = UserType;
export const registerAction = createAsyncThunk<
  RegisterReturnType,
  RegisterDataType,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>(
  'user/api/register',
  async ({ name, email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserType>(ApiRouteEnum.Register, {
      name,
      email,
      password,
    });

    const userData: RegisterReturnType = {
      id: data.id,
      name: data.name,
      email: data.email,
      token: data.token,
    };

    saveToken(userData.token as string);
    return userData;
  },
);

type LoginReturnType = UserType;
export const loginAction = createAsyncThunk<
  LoginReturnType,
  AuthDataType,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/api/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<{
    id: number;
    name: string;
    email: string;
    accessToken: string;
  }>(ApiRouteEnum.SignIn, {
    email,
    password,
  });
  const userData: LoginReturnType = {
    id: data.id,
    name: data.name,
    email: data.email,
    token: data.accessToken,
  };

  saveToken(userData.token as string);
  return userData;
});

/*export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('user/api/logout', (_arg, { dispatch, extra: api }) => {
  //await api.delete(ApiRouteEnum.SignOut);
  dropToken();
});*/
