import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import securityReducer from './features/Security';
import detailReducer from './features/Detail'

const store=configureStore({
  reducer:{
    security:securityReducer,
    detail:detailReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


