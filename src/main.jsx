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
import Register from './components/Authentication/Register.jsx'
import AuthProvider from './firebase/AuthProvider.jsx'
import Contact from './components/Contact.jsx'
import PrivateRoute from './components/Authentication/PrivateRoute.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './dashboard/Dashboard.jsx'
import Cart from './dashboard/Cart.jsx'
import AllUsers from './dashboard/AllUsers.jsx'
import AddItem from './dashboard/AddItem.jsx'
import AdminRoute from './components/Authentication/AdminRoute.jsx'
const queryClient = new QueryClient()

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
      element: <PrivateRoute><OurMenu /></PrivateRoute>
    },
    {
      path: "/order",
      element: <OrderShop />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/contact",
      element: <Contact />
    },

  ]
},
{
  path: "dashboard",
  element: <Dashboard />,
  children: [
    {
      path: 'cart',
      element: <Cart />
    },
    // Admin Route 
    {
      path: "additems",
      element: <AdminRoute><AddItem /></AdminRoute>
    },
    {
      path: 'allusers',
      element: <AdminRoute><PrivateRoute><AllUsers /></PrivateRoute></AdminRoute>
    },
  ]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
