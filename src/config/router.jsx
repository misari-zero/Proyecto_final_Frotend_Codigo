import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Private from "../layout/PrivateLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import SideBarLayout from "../layout/SideBarLayout";
import CardComponent from "../components/CardComponent";
import ProductDetail1 from "../components/productDetail/ProductDetail1";
import ProductComponent from "../components/ProductComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "dashboard",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: "sidebar",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <SideBarLayout />,
                    },
                ],
            },
            {
                path: "product",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <ProductComponent />,
                    },
                ],
            },
            {
                path: "tecnologia",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <CardComponent />,
                    },
                ],
            },
            {
                path: "product/:id",
                element: <Private />,
                children: [
                    {
                        index: true,
                        element: <ProductDetail1 />,
                    },
                ],
            },
        ],
    },
]);