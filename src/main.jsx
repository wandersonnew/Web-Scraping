import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import $ from "jquery"


import Routes from './Routes.jsx'

import Navbar from './components/navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
