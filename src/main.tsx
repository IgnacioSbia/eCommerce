import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './Components/MainPage/MainPage.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const Router  = createBrowserRouter([
  {path: "/", element: <MainPage/>}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>,
)
