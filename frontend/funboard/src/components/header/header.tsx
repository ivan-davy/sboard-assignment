import { HeaderStyled, LinkStyled, LiStyled, NavStyled } from './header.styled';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PageRouteEnum } from '../../const/routes/page-route.enum';

export default function Header(): ReactElement {
  //const authStatus: AuthorizationStatusEnum = useAppSelector(getAuthStatus);
  //const userData = useAppSelector(getUserData);

  return (
    <HeaderStyled id="header">
      <LinkStyled to={PageRouteEnum.Posts}>Funboard</LinkStyled>
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
    </HeaderStyled>
  );
}
