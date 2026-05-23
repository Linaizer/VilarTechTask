import { HomeOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import CoinsPage from "./pages/Coins.jsx";
import { StockOutlined } from "@ant-design/icons"

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    {path: '/coins', label:"Coins", icon: <StockOutlined/> , element: <CoinsPage/>}
];
