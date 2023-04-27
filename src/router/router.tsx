import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/User/Login';
import Singin from '../pages/User/Singin';

export const router = createBrowserRouter([
	{path: '/', element: <Home />, children: []},
	{
		path: '/',
		children: [
			{path: 'entrar', element: <Login />, children: []},
			{path: 'cadastro', element: <Singin />, children: []},
		],
	},
]);
