import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./shears/Layout";
import ThemesPage from "./Pages/ThemePages/ThemesPage";
import LumaHomePages from "./Pages/Themes/Luma/LumaHomePages";
import LumaProductPages from "./Pages/Themes/Luma/LumaProductPages";
import WhatsNewPage from "./Pages/Themes/Luma/WhatsNewPage";
import HomePage from "./Materials/Luma/Pages/HomePage";
import LumaLayout from "./Materials/Luma/Components/LumaLayout";
import WhatsNew from "./Materials/Luma/Pages/WhatsNew";
import WomenPage from "./Materials/Luma/Pages/WomenPage";
import MenPage from "./Materials/Luma/Pages/MenPage";
import GearPage from "./Materials/Luma/Pages/GearPage";
import TrainingPage from "./Materials/Luma/Pages/TrainingPage";
import SalePage from "./Materials/Luma/Pages/SalePage";
import JacketsPage from "./Materials/Luma/Pages/JacketsPage";
import ProductPage from "./Materials/Luma/Pages/ProductPage";
import CreateAccountPage from "./Materials/Luma/Pages/CreateAccountPage";
import LoginPage from "./Materials/Luma/Pages/LoginPage";
import MyAccountPage from "./Materials/Luma/Pages/User/MyAccountPage";
import MyOrdersPage from "./Materials/Luma/Pages/User/MyOrdersPage";
import MyWishListPage from "./Materials/Luma/Pages/User/MyWishListPage";
import AddressBookPage from "./Materials/Luma/Pages/User/AddressBookPage";
import EditAddressPage from "./Materials/Luma/Pages/User/EditAddressPage";
import EditAccountInformationPage from "./Materials/Luma/Pages/User/EditAccountInformationPage";
import ShippingPage from "./Materials/Luma/Pages/User/ShippingPage";
import ReviewAndPaymentsPage from "./Materials/Luma/Pages/User/ReviewAndPaymentsPage";
import CompareProductsPage from "./Materials/Luma/Pages/User/CompareProductsPage";

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
    {
        path: "/LumaHome",
        element: <LumaLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "Whats_new",
                element: <WhatsNew />
            },
            {
                path: "Women_page",
                element: <WomenPage />
            },
            {
                path: "Men_page",
                element: <MenPage />
            },
            {
                path: "Gear_page",
                element: <GearPage />
            },
            {
                path: "Training_page",
                element: <TrainingPage />
            },
            {
                path: "Sale_page",
                element: <SalePage />
            },
            {
                path: "Jackets_page",
                element: <JacketsPage />
            },
            {
                path: "Product_page/:id",
                element: <ProductPage />
            },
            {
                path: "CreateAccount",
                element: <CreateAccountPage />
            },
            {
                path: "LoginPage",
                element: <LoginPage />
            },
            {
                path: "MyAccountPage",
                element: <MyAccountPage />
            },
            {
                path: "MyOrdersPage",
                element: <MyOrdersPage />
            },
            {
                path: "MyWishListPage",
                element: <MyWishListPage />
            },
            {
                path: "AddressBookPage",
                element: <AddressBookPage />
            },
            {
                path: "EditAddressPage",
                element: <EditAddressPage />
            },
            {
                path: "EditAccountInformationPage",
                element: <EditAccountInformationPage />
            },
            {
                path: "ShippingPage",
                element: <ShippingPage />
            },
            {
                path: "ReviewAndPaymentsPage",
                element: <ReviewAndPaymentsPage />
            },
            {
                path: "CompareProductsPage",
                element: <CompareProductsPage />
            },
        ]
    },
])