import { Outlet } from 'react-router-dom';
import React, {ReactElement} from 'react';
import Header from '../../components/header/header';

export default function CommonLayout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
