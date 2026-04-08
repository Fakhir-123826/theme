import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./shears/Layout";
import ThemesPage from "./Pages/ThemePages/ThemesPage";
import ThemesStorePage from "./Pages/Themes/Luma/ThemesStorePage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
           
        ]
    },
 {
                path:"/themes",
                element:<ThemesStorePage />
            }

])