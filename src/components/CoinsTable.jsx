import { Table } from "antd"


const columns = [
    {
        title: '#',
        dataIndex: 'market_cap_rank',
        key: 'market_cap_rank',
    },
    {
        title: 'Назва',
        dataIndex: 'name',
        key: 'name',
        render: (name, record) => (
            <span>
                <img src={record.image} 
                alt={name} 
                width={20} 
                style={{ marginRight: 8, verticalAlign: 'middle' }} />
                {name}
            </span>
        ),
    },
    {
        title: 'Ціна',
        dataIndex: 'current_price',
        key: 'current_price',
        render: (price) => `$${price.toLocaleString()}`,
        sorter: (a, b) => a.current_price - b.current_price,
    },
    {
        title: '24h %',
        dataIndex: 'price_change_percentage_24h',
        key: 'price_change_percentage_24h',
        render: (val) => (
            <span style={{ color: val >= 0 ? 'green' : 'red' }}>
                {val?.toFixed(2)}%
            </span>
        ),
        sorter: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
    },
    {
        title: 'Market Cap',
        dataIndex: 'market_cap',
        key: 'market_cap',
        render: (val) => `$${val.toLocaleString()}`,
        sorter: (a, b) => a.market_cap - b.market_cap,
    },
    {
        title: 'Обʼєм 24h',
        dataIndex: 'total_volume',
        key: 'total_volume',
        render: (val) => `$${val.toLocaleString()}`,
        sorter: (a, b) => a.total_volume - b.total_volume,
    },
]

const CoinsTable = ({data,loading}) => {
  
    return (
        <div>
          <Table columns={columns} dataSource={data} loading={loading} rowKey='id' scroll={{y:500}}/>
        </div>
    )
}

export default CoinsTable