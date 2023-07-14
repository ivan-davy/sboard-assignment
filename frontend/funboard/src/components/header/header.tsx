import { HeaderStyled } from '../../styles/header.styled';
import { ReactElement } from 'react';

export default function Header(): ReactElement {
  //const authStatus: AuthorizationStatusEnum = useAppSelector(getAuthStatus);
  //const userData = useAppSelector(getUserData);

  return <HeaderStyled id="header">Hello world!</HeaderStyled>;
}
