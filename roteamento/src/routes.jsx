import { lazy } from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom"
import Public from './layouts/public'

const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Product = lazy(() => import('./pages/Product'))
const NotFound = lazy(() => import('./pages/NotFound'))

const routes = createBrowserRouter([
  {
    path: "/", element: <Public />, children: [
      { path: "", element: <Navigate to='/home' replace /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "products", children: [
          { path: "", element: <Products /> },
          { path: ":id", element: <Product /> },
        ]
      },
    ]
  },
  { path: "*", element: <NotFound /> },
])

export default routes
export { routes }
