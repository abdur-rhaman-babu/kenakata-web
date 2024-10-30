import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Products from './components/Products/Products.jsx'
import Countries from './components/Countries/Countries.jsx'
import CountryDetails from './components/CountryDetails/CountryDetails.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products',
        loader: ()=> fetch('https://fakestoreapi.com/products'),
        element:<Products/>
      },
      {
        path:'product/:userId',
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.userId}`),
        element:<ProductDetails/>
      },
      {
        path:'/countries',
        loader: ()=> fetch('https://restcountries.com/v3.1/all'),
        element:<Countries/>
      },
      {
        path:'country/:userId',
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/all/${params.userId}`),
        element:<CountryDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
    
  </StrictMode>,
)
