import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import store from './app/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const storedTheme = localStorage.getItem('theme');
const defaultTheme = !isEmpty(storedTheme) ? storedTheme : 'dark';

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={defaultTheme}
        insertionPoint="styles-insertion-point"
      >
        <App />
      </ThemeSwitcherProvider>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
