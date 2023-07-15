import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: aliceblue;
    font-family: 'Helvetica', sans-serif;
    font-size: 1.25em;
    font-weight: bold;
    margin: 0 auto;
  }

  p {
    line-height: 1.2;
  }

  img {
    max-width: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style-type: none;
  }
`;

export const ButtonStyled = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  margin: 5px;
  border: none;
  box-shadow: black 0 2px 2px;
  width: 100px;
  height: 40px;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: none;
    position: relative;
    top: 2px;
  }
`;
