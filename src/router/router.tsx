import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Landpage/Home';
import Login from '../pages/User/Login';
import Singin from '../pages/User/Singin';
import PricePage from '../pages/Landpage/Price';
import FeaturesPage from '../pages/Landpage/Features';
import AboutPage from '../pages/Landpage/About';

export const router = createBrowserRouter([
	{path: '/', element: <Home />, children: []},
	{path: '/entrar', element: <Login />},
	{path: '/registrar', element: <Singin />},
	{path: '/preco', element: <PricePage />},
	{path: '/caracteristica', element: < FeaturesPage />},
	{path: '/sobre', element: < AboutPage />},
]);
