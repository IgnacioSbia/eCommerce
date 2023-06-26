import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './Components/MainPage/MainPage.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from './Components/Product/Product.tsx';


const Router  = createBrowserRouter([
  {path: "/", element: <MainPage/>},
  {path: "/Product",  element: <Product/>}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>,
)
