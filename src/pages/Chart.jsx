import { useEffect, useState } from "react"
import { Segmented, Button, Spin } from "antd"
import { useChart } from "../hooks/useChart"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const Chart = () => {
    const [coin, setCoin] = useState('bitcoin')
    const { data, isLoading, isFetching, refetch } = useChart(coin)
    const [segmented, setSegmented] = useState(true)

    useEffect(() => {
        if (!isFetching) {
            setSegmented(false)
        }
    }, [isFetching])
    const chartData = data?.prices?.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price
    }))
    return (
        <div>
            <Segmented
                options={['bitcoin', 'ethereum', 'dogecoin']}
                value={coin}
                onChange={(val) => {
                    setCoin(val)
                    setSegmented(true)
                }}
            />
            <Button onClick={refetch} loading={isFetching}>Оновити</Button>
            {isLoading || segmented ? 
            <div style={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Spin size="large" />
            </div> :
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={chartData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" dot={false} />
                    </LineChart>
                </ResponsiveContainer>}
        </div>
    )
}

export default Chart