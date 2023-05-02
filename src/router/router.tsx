import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Login, Singin} from '../pages/Internal/User';
import {Home, PricePage, FeaturesPage, AboutPage} from '../pages/Website';
import {ContactUs} from '../pages/Website/Contact';
import {Dashboard} from '../pages/Internal/dashboard/Dashboard';

export const router = createBrowserRouter([
	{path: '/', element: <Home />},
	{path: '/entrar', element: <Login />},
	{path: '/registrar', element: <Singin />},
	{path: '/preco', element: <PricePage />},
	{path: '/caracteristica', element: < FeaturesPage />},
	{path: '/sobre', element: < AboutPage />},
	{path: '/contato', element: < ContactUs />},
	{path: '/dashboard', element: < Dashboard />},

]);
