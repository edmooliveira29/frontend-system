import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Login, Singin} from '../pages/User';
import {Home, PricePage, FeaturesPage, AboutPage} from '../pages/Landpage';
import {ContactUs} from '../pages/Landpage/Contact';

export const router = createBrowserRouter([
	{path: '/', element: <Home />},
	{path: '/entrar', element: <Login />},
	{path: '/registrar', element: <Singin />},
	{path: '/preco', element: <PricePage />},
	{path: '/caracteristica', element: < FeaturesPage />},
	{path: '/sobre', element: < AboutPage />},
	{path: '/contato', element: < ContactUs />},

]);
