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
import { validateLoginForm } from '../../utils/form-validators';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { loginAction } from '../../store/api-actions';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';
import { getAuthStatus } from '../../store/service/selectors';
import { toast } from 'react-toastify';
import { AuthDataType } from '../../types/auth-data.type';

export default function SignIn(): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationMessage = validateLoginForm({ email, password });
    if (validationMessage) {
      toast.error(validationMessage);
      return;
    }

    dispatch(
      loginAction({
        email,
        password,
      } as AuthDataType),
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
            <FormTitle>Sign In</FormTitle>
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
