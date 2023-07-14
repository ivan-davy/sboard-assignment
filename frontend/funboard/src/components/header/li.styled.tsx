import styled from 'styled-components';

export const LiStyled = styled.li`
  display: inline;
  margin: 0 20px 0 0;
  text-transform: capitalize;

  :hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
