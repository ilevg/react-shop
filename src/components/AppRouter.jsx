import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { routes } from "../router/routes"

import { AuthContext } from "../context/AuthProvider"
import { useContext, useEffect } from "react"


const NotFound = React.lazy(() => import('../pages/NotFound.jsx'));
const Login = React.lazy(() => import('../pages/Login.jsx'));
const Signup = React.lazy(() => import('../pages/Signup.jsx'));
const Profile = React.lazy(() => import('../pages/Profile.jsx'));

export const AppRouter = () => {
  const path = useLocation()
  
  useEffect(() => {
     window.scrollTo(0, 0);
  }, [path])

  const { user } = useContext(AuthContext)
  return (
    <Suspense>
      {user ? (
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
          <Route path="/profile" element={<Profile />} exact={true} />
          <Route path="*" element={<NotFound />} exact={true} />
        </Routes>
      ) : (
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
          <Route path="/login" element={<Login />} exact={true} />
          <Route path="/signup" element={<Signup />} exact={true} />
          <Route path="*" element={<NotFound />} exact={true} />
        </Routes>
      )}
    </Suspense>
  )
}
