import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import { useMode, ThemeContext } from './Theme';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Skills from './Pages/skills/Skills';
import Projects from './Pages/projects/Projects';
import Contacts from './Pages/contacts/Contacts';

const App = () => {
	const [theme, colorMode] = useMode();

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<>
					<div>Hello</div>
					<Outlet />
				</>
			),
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/about', element: <About /> },
				{ path: '/skills', element: <Skills /> },
				{ path: '/projects', element: <Projects /> },
				{ path: '/contacts', element: <Contacts /> },
			],
		},
	]);

	return (
		<ThemeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;
