import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Routes, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import ProtectRoutes from './components/ProtectRoutes.jsx';
import Homescreen from './screens/Homescreen.jsx';
import LoginPage from './screens/LoginPage.jsx';
import RegisterPage from './screens/RegisterPage.jsx';
import UserProfileScreen from './screens/UserProfileScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homescreen />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      {/* privte route for user */}

      <Route path='' element={<ProtectRoutes allowedRoles={['user']}/>} >
        <Route path="/profileScreen" element={<UserProfileScreen />} />
      </Route>
    </Route >
  )
);

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </Provider>
);
