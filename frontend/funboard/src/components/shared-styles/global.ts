import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: azure;
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

export default GlobalStyles;
