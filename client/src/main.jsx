import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from './App.jsx';
import "../src/index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>
      Sorry !!!!!!!!!! Page Not Found
    </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);