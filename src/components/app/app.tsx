import React from 'react';
import { Route, Routes } from "react-router-dom";
import LogInPage from '../logInPage/logInPage';
import UserPage from '../userPage/userPage';

function App(): JSX.Element {
  const routes = [
    { path: "/", element: <LogInPage /> },
    { path: "/user", element: <UserPage /> },
  ];

  return <Routes>
    {routes.map(({ path, element }) => (
      <Route path={path} element={element} key={path} />
    ))}
  </Routes>
}

export default App;
