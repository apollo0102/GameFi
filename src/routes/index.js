import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { Mainnet, DAppProvider } from '@usedapp/core';
import {DAppProvider } from '@usedapp/core';
const HomePage = lazy(() => import('../pages/home'));
const StakePage = lazy(() => import('../pages/stake'));
const ErrorPage = lazy(() => import('../pages/error'));

const AppRoutes = () => {
  return (
    // <DAppProvider config={config}>
    <DAppProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stake' element={<StakePage />} />
        <Route component={ErrorPage} />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={'colored'}
        pauseOnHover={false}
        rtl={false}
      />
    </DAppProvider>
  );
};

export default AppRoutes;
