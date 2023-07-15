import { Route, Routes } from 'react-router-dom';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import CommonLayout from '../../pages/common-layout/common-layout';
import GlobalStyles from '../shared-styles/global';
import SignIn from '../auth-form/sign-in';
import Register from '../auth-form/register';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import NotFound from '../not-found/not-found';
import PostsList from '../posts-list/posts-list';
import { getAuthStatus } from '../../store/service/selectors';
import { useAppSelector } from '../hooks/store-hooks';

const theme = {
  colors: {
    accent: 'crimson',
    bright: 'whitesmoke',
  },
};

function App(): ReactElement | null {
  const authData = {
    authStatus: useAppSelector(getAuthStatus),
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={PageRouteEnum.SignIn} element={<CommonLayout />}>
          <Route path={''} element={<SignIn />} />
        </Route>

        <Route path={PageRouteEnum.Register} element={<CommonLayout />}>
          <Route path={''} element={<Register />} />
        </Route>

        <Route path={PageRouteEnum.Posts} element={<CommonLayout />}>
          <Route path={''} element={<PostsList />} />
        </Route>

        <Route path="*" element={<CommonLayout />}>
          <Route path={'*'} element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

/*

*/
