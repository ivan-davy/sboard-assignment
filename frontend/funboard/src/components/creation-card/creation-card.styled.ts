import styled from 'styled-components';

export const LiStyled = styled.li<{ borderColor: string }>`
  outline: 5px solid ${({ borderColor }) => borderColor};
  box-shadow: ${({ borderColor }) => borderColor} 0 0 20px;
  border-radius: 10px;
  width: 300px;
  max-height: 400px;
  margin: 20px;
  padding: 15px;
`;

export const TitleInputStyled = styled.input`
  width: 270px;
  font-size: 0.75em;
  display: inline-block;
`;

export const TextInputStyled = styled.textarea`
  font-weight: normal;
  font-family: inherit;
  font-size: 0.75em;
  margin: 5px 0;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  resize: none;
`;

export const ColorInputStyled = styled.input`
  display: block;
  width: 100%;
`;

export const BtnContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`;
