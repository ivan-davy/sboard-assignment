import styled from 'styled-components';

export const LiStyled = styled.li<{ borderColor: string }>`
  outline: 5px solid ${({ borderColor }) => borderColor};
  box-shadow: ${({ borderColor }) => borderColor} 0px 0px 20px;
  border-radius: 10px;
  width: 300px;
  max-height: 400px;
  margin: 20px;
  padding: 15px;
`;

export const StrongStyled = styled.strong`
  text-transform: uppercase;
  max-width: 270px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
`;

export const PStyled = styled.p`
  max-height: 65%;
  font-weight: normal;
  max-width: 270px;
  overflow-wrap: break-word;
  margin: 5px 0;
`;

export const IStyled = styled.i`
  font-weight: lighter;
  opacity: 75%;
  display: inline-block;
  text-align: center;
  margin: 10px 0;
`;

export const BtnContainerDiv = styled.div`
  display: flex;
  justify-content: center;
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
