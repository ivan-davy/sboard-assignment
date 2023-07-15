import styled from 'styled-components';

export const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  justify-content: center;
  padding-inline-start: 0;
`;

export const PStyled = styled.p`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: absolute;
  top: 400px;
  font-size: 2em;
  text-transform: uppercase;
  text-align: center;
  animation: fadeIn 1s;
`;
