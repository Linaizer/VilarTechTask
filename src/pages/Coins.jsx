import { useCoins } from "../hooks/useCoins"
import CoinsTable from "../components/CoinsTable"

const Coins = () => {
    const { data, isLoading } = useCoins()
  
    return (
        <div>
            <CoinsTable data={data} loading={isLoading}  />
        </div>
    )
}

export default Coins