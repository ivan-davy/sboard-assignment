import { ReactElement, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import { AuthorizationStatusEnum } from '../../const/authorization-status.enum';

export default function SignIn(): ReactElement {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);

  const handleEmptyFields = () => {
    let errFlag = false;
    if (!emailRef.current?.value) {
      toast.error('Enter the email address');
      errFlag = true;
    }
    if (!passwordRef.current?.value) {
      toast.error('Enter the password');
      errFlag = true;
    }
    return errFlag;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (handleEmptyFields()) {
      return;
    }

    dispatch(
      loginAction({
        email: emailRef.current?.value as string,
        password: passwordRef.current?.value as string,
      } as AuthDataType),
    );
    navigate(PageRouteEnum.Posts);
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatusEnum.Auth) {
      navigate(PageRouteEnum.Posts);
    }
  }, [authStatus]);

  return (
    <main>
      <section>
        <h1>Войти</h1>
        <form onSubmit={handleSubmit} method="post" noValidate>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="passwordLogin">Пароль</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="• • • • • •"
              id="passwordLogin"
              name="password"
              autoComplete="off"
              required
            />
          </div>
          <button className="button login__button button--medium" type="submit">
            Войти
          </button>
        </form>
      </section>
    </main>
  );
}
