import { Route, Routes } from 'react-router-dom';
import { PageRouteEnum } from '../../const/routes/page-route.enum';
import CommonLayout from '../../pages/common-layout/common-layout';
import GlobalStyles from '../shared-styles/global';
import SignIn from '../sign-in/sign-in';
import Register from '../register/register';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    accent: 'coral',
    bright: 'whitesmoke',
  },
};

function App(): ReactElement | null {
  /*const authData = {
    authStatus: useAppSelector(getAuthStatus),
  };*/

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
      </Routes>
    </ThemeProvider>
  );
}

export default App;

/*
      <Route
        path={PageRouteEnum.Posts}
        element={
          <AdminRoute authorizationData={authData}>
            <CommonLayout />
          </AdminRoute>
        }
      >
        <Route path={''} element={<ProductsMenu />} />
      </Route>

      <Route path="*" element={<CommonLayout />}>
        <Route path={'*'} element={<NotFound />} />
      </Route>
*/