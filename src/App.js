import React from 'react';
import { useMode, ThemeContext } from './Theme';
import { ThemeProvider } from '@emotion/react';

import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
	const [theme, colorMode] = useMode();

	const router = createBrowserRouter([
		{ path: '/', element: <div>Hello</div>, children: [] },
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
