import { useSearchParams } from "react-router-dom"
import { useCoinsPaged } from "../hooks/useCoinsPaged"
import CoinsTable from "../components/CoinsTable"
import { Pagination } from "antd"

const CoinsPaged = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page')) || 1
    const { data, isLoading } = useCoinsPaged(page)

    return (
        <div>
            <CoinsTable data={data} loading={isLoading} />
            <Pagination
                current={page}
                total={400}
                pageSize={20}
                onChange={(p) => setSearchParams({ page: p })}
                
            />
        </div>
    )
}

export default CoinsPaged