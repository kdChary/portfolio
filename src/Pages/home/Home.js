import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { ThemeContext, tokens } from '../../Theme';

const Home = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ThemeContext);

	return (
		<div>
			Home
			<h1>Hello</h1>
		</div>
	);
};

export default Home;
