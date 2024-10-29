import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Singin from "../components/Singin";
import SignUp from "../components/SignUp";
import CartPage from "../pages/Books/CartPage";
import CheckOutPage from "../pages/Books/CheckOutPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoutes";
import OrderPage from "../pages/Books/OrderPage";
import AdminLogin from "../components/AdminLogin";
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import AddBook  from '../pages/dashboard/createBook/AddBook';
import UpdateBook  from '../pages/dashboard/editbook/UpdateBook';
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <h1>About</h1>
            },
            {
                path: '/contact',
                element: <h1>Contact</h1>
            },
            {
                path: '/orders',
                element: <OrderPage/>
            },
            {
                path: '/cart',
                element: <CartPage/>
            },
            {
                path: 'login',
                element: <Singin/>
            },
            {
                path: '/checkout',
                element: <PrivateRoute>
                    <CheckOutPage/>
                </PrivateRoute>
            },
            {
                path: 'register',
                element: <SignUp/>
            },
            {
                path: '*',
                element: <h1>Not Found</h1>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
      },
    {
        path: "/dashboard",
        element: <AdminRoute>
          <DashboardLayout/>
        </AdminRoute>,
        children:[
          {
            path: "",
            element: <AdminRoute><Dashboard/></AdminRoute>
          },
          {
            path: "add-new-book",
            element: <AdminRoute>
              <AddBook/>
            </AdminRoute>
          },
          {
            path: "edit-book/:id",
            element: <AdminRoute>
              <UpdateBook/>
            </AdminRoute>
          },
          {
            path: "manage-books",
            element: <AdminRoute>
              <ManageBooks/>
            </AdminRoute>
          }
        ]
      }
]);

export default router;