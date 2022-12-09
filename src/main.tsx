import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes';
import { RouterProvider } from "react-router-dom";
import './main.css'

export const MainElements = (
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(MainElements)
