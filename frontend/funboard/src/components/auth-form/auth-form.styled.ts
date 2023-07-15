import styled from 'styled-components';

export const FormTitle = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 1.5em;
  text-transform: uppercase;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

export const FormColumn = styled.div`
  padding: 15px;
  background: white;
  border: 5px #5a73ff solid;
  box-shadow: #5a73ff 0 0 20px;
  flex: 1;
  width: 80lvw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  max-width: 600px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  padding-top: 0;
  width: 100%;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: black;
`;

export const FormButton = styled.button<{ color?: string }>`
  border-radius: 5px;
  margin-top: 0.5rem;
  width: 100%;
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: ${({ color }) => color || '#5A73FF'};
  border: none;
  box-shadow: black 0 2px 2px;
  height: 40px;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  color: whitesmoke;

  :hover {
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: none;
    position: relative;
    top: 2px;
  }
`;
