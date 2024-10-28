import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Singin from "../components/Singin";
import SignUp from "../components/SignUp";
import CartPage from "../pages/Books/CartPage";
import CheckOutPage from "../pages/Books/CheckOutPage";
import PrivateRoute from "./PrivateRoutes";
import OrderPage from "../pages/Books/OrderPage";
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
]);

export default router;