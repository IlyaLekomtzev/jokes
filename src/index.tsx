import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Color } from './const';
import 'normalize.css';

const rootNode = document.getElementById('root');
const GlobalStyled = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${Color.MainBg};
        color: ${Color.MainText};
    }
`;

const theme = {
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px)'
    }
};

render(
    <Provider store={store}>
        <GlobalStyled />
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    </Provider>,
    rootNode
);
