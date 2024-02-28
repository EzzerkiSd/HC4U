import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeButton={true}
      closeOnClick={true}
      rtl={false}
      draggable
      pauseOnHover
      pauseOnFocusLoss
      theme='dark'
    />
    <App />
  </React.StrictMode>
);