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
import ManageItem from './dashboard/ManageItem.jsx'
import UpdateItem from './dashboard/UpdateItem.jsx'
import UserHome from './dashboard/UserHome.jsx'
import AdminHome from './dashboard/AdminHome.jsx'
import Payment from './dashboard/Payment/Payment.jsx'
import PaymentHistory from './dashboard/Payment/PaymentHistory.jsx'
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
      path: "userHome",
      element:
        <UserHome />
    },
    {
      path: 'cart',
      element: <Cart />
    },


    {
      path: "payment",
      element: <Payment />
    },
    {
      path: "paymenthistory",
      element: <PaymentHistory />
    },

    // Admin Route 
    {
      path: "additems",
      element: <AdminRoute><AddItem /></AdminRoute>
    },

    {
      path: "adminHome",
      element: <AdminHome />
    },

    {
      path: 'allusers',
      element: <AdminRoute><PrivateRoute><AllUsers /></PrivateRoute></AdminRoute>
    },
    {
      path: 'manageitems',
      element: <AdminRoute><PrivateRoute><ManageItem /></PrivateRoute></AdminRoute>
    },
    {
      path: 'update/:id',
      element: <AdminRoute><UpdateItem /></AdminRoute>,
      loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
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
