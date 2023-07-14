import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';

export type ServiceStateType = {
  isDataLoading: boolean;
  authStatus: AuthorizationStatusEnum;
};
