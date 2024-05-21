import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import { createTheme, MantineProvider } from '@mantine/core';
import '/css/index.scss'
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

let init = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)

window.addEventListener('load', () => {init})
