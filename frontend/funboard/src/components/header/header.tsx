import { HeaderStyled, LinkStyled, LiStyled, NavStyled } from './header.styled';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import { useAppSelector } from '../hooks/store-hooks';
import { getAuthStatus } from '../../store/service/selectors';
import { getUserData } from '../../store/user/selectors';

export default function Header(): ReactElement {
  const authStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);

  return (
    <HeaderStyled id="header">
      <LinkStyled to={PageRouteEnum.Posts}>Funboard</LinkStyled>
      {authStatus === AuthorizationStatusEnum.NoAuth ? (
        <NavStyled>
          <ul>
            <LiStyled>
              <Link to={PageRouteEnum.SignIn}>Login</Link>
            </LiStyled>
            <LiStyled>
              <Link to={PageRouteEnum.Register}>Register</Link>
            </LiStyled>
          </ul>
        </NavStyled>
      ) : null}
      {authStatus === AuthorizationStatusEnum.Auth ? (
        <NavStyled>
          <ul>
            <LiStyled>Hi, {userData.name}!</LiStyled>
          </ul>
        </NavStyled>
      ) : null}
    </HeaderStyled>
  );
}
