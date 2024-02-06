import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/reducers";
import { thunk } from 'redux-thunk'

// Middleware personnalisé pour inclure Redux Thunk

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
