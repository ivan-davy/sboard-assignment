import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormRow,
  FormLabel,
  FormInputRow,
  FormButton,
  FormTitle,
  FormContainer,
} from './auth-form.styled';
import { useNavigate } from 'react-router-dom';
import { validateRegisterForm } from '../../utils/form-validators';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { registerAction } from '../../store/api-actions';
import { RegisterDataType } from '../../types/register-data.type';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import { getAuthStatus } from '../../store/service/selectors';
import { toast } from 'react-toastify';

export default function Register(): ReactElement {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationMessage = validateRegisterForm({ name, email, password });
    if (validationMessage) {
      toast.error(validationMessage);
      return;
    }

    dispatch(
      registerAction({
        name,
        email,
        password,
      } as RegisterDataType),
    );
    navigate(PageRouteEnum.Posts);
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatusEnum.Auth) {
      navigate(PageRouteEnum.Posts);
    }
  }, []);

  const formData = [
    {
      label: 'Name',
      value: name,
      onChange: (evt: React.FormEvent<HTMLInputElement>) =>
        setName(evt.currentTarget.value),
      type: 'text',
    },
    {
      label: 'Email',
      value: email,
      onChange: (evt: React.FormEvent<HTMLInputElement>) =>
        setEmail(evt.currentTarget.value),
      type: 'email',
    },
    {
      label: 'Password',
      value: password,
      onChange: (evt: React.FormEvent<HTMLInputElement>) =>
        setPassword(evt.currentTarget.value),
      type: 'password',
    },
  ];

  return (
    <main>
      <FormContainer>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign Up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((elem, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{elem.label}</FormLabel>
                  <FormInput
                    type={elem.type}
                    value={elem.value}
                    onChange={elem.onChange}
                  />
                </FormInputRow>
              ))}
              <FormButton type="submit">Confirm</FormButton>
            </FormWrapper>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </main>
  );
}
