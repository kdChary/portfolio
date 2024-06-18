import { createTheme } from '@mui/material';
import { useMemo, useState, createContext } from 'react';

/*
black: {
  100: "#d3d3d3",
  200: "#a7a7a7",
  300: "#7a7a7a",
  400: "#4e4e4e",
  500: "#222222",
  600: "#1b1b1b",
  700: "#141414",
  800: "#0e0e0e",
  900: "#070707"
},
black: {
  100: "#cccccc",
  200: "#999999",
  300: "#666666",
  400: "#333333",
  500: "#000000",
  600: "#000000",
  700: "#000000",
  800: "#000000",
  900: "#000000"
},
*/

export const tokens = (mode) =>
	mode === 'light'
		? {
				blue: {
					100: '#d0d0ff',
					200: '#a1a1ff',
					300: '#7271ff',
					400: '#4342ff',
					500: '#1413ff',
					600: '#100fcc',
					700: '#0c0b99',
					800: '#080866',
					900: '#040433',
				},
				white: {
					100: '#ffffff',
					200: '#ffffff',
					300: '#fefefe',
					400: '#fefefe',
					500: '#fefefe',
					600: '#cbcbcb',
					700: '#989898',
					800: '#666666',
					900: '#333333',
				},
				teal: {
					100: '#d3f4f8',
					200: '#a6e8f1',
					300: '#7addea',
					400: '#4dd1e3',
					500: '#21c6dc',
					600: '#1a9eb0',
					700: '#147784',
					800: '#0d4f58',
					900: '#07282c',
				},
				black: {
					100: '#d2d4d8',
					200: '#a5a9b1',
					300: '#787f89',
					400: '#4b5462',
					500: '#1e293b',
					600: '#18212f',
					700: '#121923',
					800: '#0c1018',
					900: '#06080c',
				},
		  }
		: {
				blue: {
					100: '#040433',
					200: '#080866',
					300: '#0c0b99',
					400: '#100fcc',
					500: '#1413ff',
					600: '#4342ff',
					700: '#7271ff',
					800: '#a1a1ff',
					900: '#d0d0ff',
				},
				white: {
					100: '#333333',
					200: '#666666',
					300: '#989898',
					400: '#cbcbcb',
					500: '#fefefe',
					600: '#fefefe',
					700: '#fefefe',
					800: '#ffffff',
					900: '#ffffff',
				},
				teal: {
					100: '#07282c',
					200: '#0d4f58',
					300: '#147784',
					400: '#1a9eb0',
					500: '#21c6dc',
					600: '#4dd1e3',
					700: '#7addea',
					800: '#a6e8f1',
					900: '#d3f4f8',
				},
				black: {
					100: '#06080c',
					200: '#0c1018',
					300: '#121923',
					400: '#18212f',
					500: '#1e293b',
					600: '#4b5462',
					700: '#787f89',
					800: '#a5a9b1',
					900: '#d2d4d8',
				},
		  };

const themeSettings = (mode) => {
	const colors = tokens(mode);

	return {
		palette: {
			mode: mode,
			...(mode === 'dark'
				? {
						primary: {
							main: colors.blue[500],
						},
						secondary: {
							main: colors.teal[500],
						},
						neutral: {
							dark: colors.white[700],
							main: colors.white[500],
							light: colors.white[100],
						},
						background: {
							default: colors.teal[100],
						},
				  }
				: {
						primary: {
							main: colors.blue[200],
						},
						secondary: {
							main: colors.teal[500],
						},
						neutral: {
							dark: colors.white[700],
							main: colors.white[500],
							light: colors.white[100],
						},
						background: {
							default: colors.teal[100],
						},
				  }),
		},
		typography: {
			fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
			fontSize: 12,
			h1: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 40,
			},
			h2: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 32,
			},
			h3: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 24,
			},
			h4: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 20,
			},
			h5: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 16,
			},
			h6: {
				fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				fontSize: 14,
			},
		},
	};
};

export const ThemeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState('dark');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => setMode((p) => (p === 'dark' ? 'light' : 'dark')),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};
