import { HomeOutlined, LineChartOutlined ,StockOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import CoinsPage from "./pages/Coins.jsx";
import CoinsPaged from "./pages/CoinsPaged.jsx"
import Chart from "./pages/Chart.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: "/coins", label: "Coins", icon: <StockOutlined />, element: <CoinsPage /> },
    { path: "/coins-paged", label: "All Coins", icon: <StockOutlined />, element: <CoinsPaged /> },
    {path:"/chart", label: "Chart", icon: <LineChartOutlined/>,  element: <Chart/>}
];
