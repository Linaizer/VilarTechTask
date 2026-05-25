import { useState } from "react"
import { Table, Button  } from "antd"
import WizardForm from "../components/WizardForm"

const Wizard = () => {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState(null)

    const columns = [
        { title: 'Поле', dataIndex: 'field', key: 'field' },
        { title: 'Значення', dataIndex: 'value', key: 'value' },
    ]

    const tableData = [
        { field: "Ім'я", value: formData?.name },
        { field: 'Email', value: formData?.email },
        { field: 'Країна', value: formData?.country },
        { field: 'Вік', value: formData?.age },
    ]

    return (
        <div>
            {submitted ? (
                <div>
                    <Table columns={columns} dataSource={tableData} rowKey="field" pagination={false} />
                    <Button onClick={() => setSubmitted(false)}>Почати заново</Button>
                </div>
            ) : (
                <WizardForm onSubmit={(values) => {
                    setFormData(values)
                    setSubmitted(true)
                }} />
            )}
        </div>
    )
}

export default Wizard