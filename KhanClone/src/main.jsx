import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom'; 
import AuthContextProvider from './Context/AuthContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </BrowserRouter>,
);