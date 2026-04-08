import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./shears/Layout";
import ThemesPage from "./Pages/ThemePages/ThemesPage";
import LumaHomePages from "./Pages/Themes/Luma/LumaHomePages";
import LumaProductPages from "./Pages/Themes/Luma/LumaProductPages";
import WhatsNewPage from "./Pages/Themes/Luma/WhatsNewPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/ThemesPage",
                element: <ThemesPage />,
            },

        ]
    },
   
    {
        path: "/ThemesStorePage",
        element: <LumaHomePages />
    },
    {
        path: "/LumaProductPages",
        element: <LumaProductPages />
    },
    {
        path: "/WhatsNewPage",
        element: <WhatsNewPage />
    },
    


])