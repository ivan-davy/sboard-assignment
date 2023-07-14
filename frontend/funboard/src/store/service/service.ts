import { createSlice } from '@reduxjs/toolkit';
import { setLoadingStatusAction } from './actions';
import {
  checkAuthAction,
  deletePostAction,
  fetchPostsDataAction,
  loginAction,
  updatePostAction,
} from '../api-actions';
import { ServiceStateType } from '../../types/states/service-state.type';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import { NamespaceEnum } from '../../const/namespace.enum';

export const initialState: ServiceStateType = {
  authStatus: AuthorizationStatusEnum.Unknown,
  isDataLoading: false,
};

export const service = createSlice({
  name: NamespaceEnum.Service,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setLoadingStatusAction, (state, action) => {
      state.isDataLoading = action.payload;
    });

    builder
      .addCase(fetchPostsDataAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPostsDataAction.fulfilled, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPostsDataAction.rejected, (state) => {
        state.isDataLoading = false;
      });

    builder
      .addCase(updatePostAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(updatePostAction.fulfilled, (state) => {
        state.isDataLoading = false;
      })
      .addCase(updatePostAction.rejected, (state) => {
        state.isDataLoading = false;
      });

    builder
      .addCase(deletePostAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(deletePostAction.fulfilled, (state) => {
        state.isDataLoading = false;
      })
      .addCase(deletePostAction.rejected, (state) => {
        state.isDataLoading = false;
      });

    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatusEnum.Auth;
        state.isDataLoading = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatusEnum.NoAuth;
        state.isDataLoading = false;
      });

    builder
      .addCase(loginAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatusEnum.Auth;
        state.isDataLoading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatusEnum.NoAuth;
        state.isDataLoading = false;
      });

    /*builder.addCase(logoutAction.fulfilled, (state) => {
      state.authStatus = AuthorizationStatusEnum.NoAuth;
    });*/
  },
});
