import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Login from "./Login";
import Products from "./Products";
import NotFound from "./NotFound";
import App from "../App";
import { NotAuthRoute, AuthRoute } from "./ProtectedRoutes";
import Product from "./Product";

export const router = createBrowserRouter([
    {
        path: '', element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/register', element: <NotAuthRoute>< Register /></NotAuthRoute> },
            { path: '/login', element: <NotAuthRoute>< Login /> </NotAuthRoute> },
            { path: '/products', element: <AuthRoute>< Products /></AuthRoute> },
            { path: '/product', element: <AuthRoute>< Product /></AuthRoute> },
        ]
    },
    { path: '*', element: < NotFound /> }
]);