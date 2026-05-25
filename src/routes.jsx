import { HomeOutlined, LineChartOutlined, StockOutlined ,FormOutlined  } from "@ant-design/icons";
import { Home, CoinsPage, CoinsPaged, Chart, Wizard } from './pages'
export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: "/coins", label: "Coins", icon: <StockOutlined />, element: <CoinsPage /> },
    { path: "/coins-paged", label: "All Coins", icon: <StockOutlined />, element: <CoinsPaged /> },
    { path: "/chart", label: "Chart", icon: <LineChartOutlined />, element: <Chart /> },
    {path: "/wizard", label: "Wizard", icon: <FormOutlined/> , element:<Wizard/>}

];
