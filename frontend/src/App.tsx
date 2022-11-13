/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MasterLayout } from './components/shared/master-layout';
import { About } from './pages/about';
import { CreateWebsite } from './pages/create-website';
import { PreviewWebsite } from './pages/preview-website';
import { Home } from './pages/home';
import { NavigationRoutes } from './constants';
import { Login } from './pages/login';
import { createContext, useState } from 'react';
import { Syllabus } from './pages/syllabus';
import { AuthProvider } from './utils/auth-provider';
import { ProtectedRoute } from './utils/protected-route';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={NavigationRoutes.Home.path} element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path={NavigationRoutes.About.path} element={<About />} />
            <Route path={NavigationRoutes.Syllabus.path} element={<Syllabus />} />
            <Route path={NavigationRoutes.Login.path} element={<Login />} />
            <Route
              path={NavigationRoutes.WebCreation.path}
              element={
                <ProtectedRoute>
                  <CreateWebsite />
                </ProtectedRoute>
              }
            />
            <Route
              path={NavigationRoutes.PreviewWebsite.path}
              element={
                <ProtectedRoute>
                  <PreviewWebsite />
                </ProtectedRoute>
              }
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
