import { StateType } from '../../types/states/state.type';
import { UserType } from '../../types/user.type';
import { NamespaceEnum } from '../../const/namespace.enum';

export const getUserData = (state: StateType): UserType =>
  state[NamespaceEnum.User];
export const getUserId = (state: StateType): number | null =>
  state[NamespaceEnum.User].id ?? null;
