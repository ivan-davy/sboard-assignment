import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background: linear-gradient(to right, deepskyblue 0%, cadetblue 100%);
  padding: 20px;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 25%) 0 4px 3px;
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bright};
  font-size: 1.5em;
`;
export const LiStyled = styled.li`
  display: inline;
  margin: 0 20px 0 0;
  text-transform: capitalize;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
export const LinkStyled = styled(Link)`
  :hover {
    color: coral;
  }
`;
export const NavStyled = styled.nav`
  color: inherit;
  float: right;
  position: absolute;
  margin: 0;
  top: -12px;
  font-weight: normal;
  right: 0;
`;
