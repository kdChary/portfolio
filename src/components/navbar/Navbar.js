import React, { useContext } from 'react';
import { useTheme } from '@mui/material';
import { ThemeContext, tokens } from '../../Theme';

const Navbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ThemeContext);
	return (
		<nav>
			<div className="navLeft">
				<button onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? 'L' : 'D'}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
