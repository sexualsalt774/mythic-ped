import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import {
	ThemeProvider,
	createTheme,
	StyledEngineProvider,
} from '@mui/material';

import App from 'containers/App';

import WindowListener from 'containers/WindowListener';

import configureStore from './configureStore';
import KeyListener from './containers/KeyListener';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
	const muiTheme = createTheme({
		typography: {
			fontFamily: ['Oswald'],
			button: {
				textTransform: 'none',
				fontWeight: 500,
			},
		},
		palette: {
			primary: {
				main: '#7BDCFFFF',
				light: '#9CEDFFFF',
				dark: '#0098CAFF',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#2b2d31',
				light: '#313338',
				dark: '#1e1f22',
				contrastText: '#ffffff',
			},
			error: {
				main: '#ff4d4d',
				light: '#ff6b6b',
				dark: '#cc3d3d',
			},
			success: {
				main: '#4caf50',
				light: '#6bc06f',
				dark: '#3b8c3e',
			},
			warning: {
				main: '#ff9800',
				light: '#ffa726',
				dark: '#c66900',
			},
			info: {
				main: '#2196f3',
				light: '#42a5f5',
				dark: '#1a75c2',
			},
			text: {
				main: '#ffffff',
				alt: '#e0e0e0',
				info: '#b0b0b0',
				light: '#ffffff',
				dark: '#000000',
			},
			rarities: {
				rare1: '#ffffff',
				rare2: '#4caf50',
				rare3: '#2196f3',
				rare4: '#9c27b0',
				rare5: '#ffd700',
			},
			border: {
				main: 'rgba(255, 255, 255, 0.12)',
				light: 'rgba(255, 255, 255, 0.23)',
				dark: '#1e1f22',
				input: 'rgba(255, 255, 255, 0.23)',
				divider: 'rgba(255, 255, 255, 0.12)',
			},
			mode: 'dark',
			background: {
				default: '#1e1f22',
				paper: '#2b2d31',
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					'.fade-enter': {
						opacity: 0,
					},
					'.fade-exit': {
						opacity: 1,
					},
					'.fade-enter-active': {
						opacity: 1,
					},
					'.fade-exit-active': {
						opacity: 0,
					},
					'.fade-enter-active, .fade-exit-active': {
						transition: 'opacity 300ms ease-in-out',
					},
					'*': {
						'&::-webkit-scrollbar': {
							width: 8,
						},
						'&::-webkit-scrollbar-thumb': {
							background: '#7BDCFFFF',
							borderRadius: 4,
							transition: 'background ease-in 0.15s',
						},
						'&::-webkit-scrollbar-thumb:hover': {
							background: '#9CEDFFFF',
						},
						'&::-webkit-scrollbar-track': {
							background: '#2b2d31',
							borderRadius: 4,
						},
					},
				},
			},
			MuiTooltip: {
				styleOverrides: {
					tooltip: {
						fontSize: 14,
						backgroundColor: '#2b2d31',
						border: '1px solid rgba(255, 255, 255, 0.12)',
						borderRadius: 8,
						boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
						padding: '8px 12px',
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						background: '#2b2d31',
						borderRadius: 12,
						boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 8,
						padding: '8px 16px',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							transform: 'translateY(-1px)',
							boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 12,
						background: '#2b2d31',
						boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
					},
				},
			},
		},
		shape: {
			borderRadius: 8,
		},
	});
	ReactDOM.render(
		<Provider store={store}>
			<KeyListener>
				<WindowListener>
					<StyledEngineProvider injectFirst>
						<ThemeProvider theme={muiTheme}>
							<CssBaseline />
							<App />
						</ThemeProvider>
					</StyledEngineProvider>
				</WindowListener>
			</KeyListener>
		</Provider>,
		MOUNT_NODE,
	);
};

if (module.hot) {
	module.hot.accept(['containers/App'], () => {
		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
		render();
	});
}

render();
