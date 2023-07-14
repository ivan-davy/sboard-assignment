import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, registerAction } from '../api-actions';
import { NamespaceEnum } from '../../const/namespace.enum';
import { UserType } from '../../types/user.type';

export const initialState: UserType = {
  id: null,
  name: null,
  email: null,
  token: null,
};

export const user = createSlice({
  name: NamespaceEnum.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkAuthAction.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    });

    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    });

    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    });
  },
});
