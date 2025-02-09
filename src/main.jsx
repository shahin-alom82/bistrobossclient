import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Route/Home.jsx'
import RootLayout from './Route/RootLayout.jsx'
import OurMenu from './components/OurMenu/OurMenu.jsx'
import { HelmetProvider } from 'react-helmet-async';
import OrderShop from './components/OrderShop/OrderShop.jsx'
import Login from './components/Authentication/Login.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/menu",
      element: <OurMenu />
    },
    {
      path: "/order",
      element: <OrderShop />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
