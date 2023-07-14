import { StateType } from '../../types/states/state.type';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import { NamespaceEnum } from '../../const/namespace.enum';

export const getLoadingStatus = (state: StateType): boolean =>
  state[NamespaceEnum.Service].isDataLoading;
export const getAuthStatus = (state: StateType): AuthorizationStatusEnum =>
  state[NamespaceEnum.Service].authStatus;
