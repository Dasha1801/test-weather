import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import { TStore } from '../../redux';
import LogInPage from '../logInPage/logInPage';
import UserPage from '../userPage/userPage';

function App(): JSX.Element {
  const { isLogin } = useSelector((state: TStore) => state.logIn);

  const routes = [
    { path: "/", element: <LogInPage /> },
    { path: "/user", element: isLogin ? <UserPage /> : <Navigate replace to="/" /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  )
}

export default App;
