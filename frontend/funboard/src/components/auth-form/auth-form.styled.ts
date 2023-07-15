import styled from 'styled-components';

export const FormTitle = styled.h1`
  font-weight: lighter;
  margin: 0;
  font-size: 1.5em;
  text-transform: capitalize;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

export const FormColumn = styled.div`
  padding: 15px;
  background: white;
  border: 2px darkcyan solid;
  flex: 1;
  width: 80lvw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  /* max-width: 540px; */
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
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

export const FormButton = styled.button`
  border-radius: 10px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border: 2px darkcyan solid;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: darkcyan;
  }
`;
