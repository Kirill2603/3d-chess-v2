import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { store } from './store/store'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
