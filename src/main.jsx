import ReactDOM                         from 'react-dom/client'
import App                              from '@/App.jsx'
import { Provider }                     from 'react-redux'
import { createTheme, MantineProvider } from '@mantine/core';
import { store }                        from '/state/store.js'
import { getProject }                   from './state/projectSlice';
import config                           from '@/json/config.json'
import '/css/index.scss'
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

console.log(config.defaultProject)
store.dispatch(getProject(config.defaultProject))

let init = ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
      <MantineProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    //</React.StrictMode>,
)

window.addEventListener('load', () => init)
