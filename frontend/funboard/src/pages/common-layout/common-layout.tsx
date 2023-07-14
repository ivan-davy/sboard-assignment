import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header/header';

export default function CommonLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
