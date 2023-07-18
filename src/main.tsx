import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './Components/MainPage/MainPage.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Product from './Components/Product/Product.tsx';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage.tsx';
import CheckOutPage from './Components/CheckOutPage/CheckOutPage.tsx';


const Router  = createBrowserRouter([
  {path: "/", element: <MainPage/>},
  {path: "/Product",  element: <Product/>},
  {path:"/AboutUs", element: <AboutUsPage/>},
  {path:"/CheckOut", element: <CheckOutPage/>}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={Router}/>
  </React.StrictMode>,
)
