import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import GuidePage from "../pages/Guide";
import ContactPage from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "guide", element: <GuidePage /> },
            { path: "contact", element: <ContactPage /> }
        ]
    },
]);
    
export default function Routers() {
    return <RouterProvider router={router} />;
};