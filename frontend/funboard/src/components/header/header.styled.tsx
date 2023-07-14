import styled from 'styled-components';

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
