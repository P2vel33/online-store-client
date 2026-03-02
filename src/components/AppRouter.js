import React from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
