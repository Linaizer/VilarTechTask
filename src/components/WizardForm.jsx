import { Form, Input, Select, Button, InputNumber } from "antd"


const WizardForm = ({ onSubmit }) => {
    const [form] = Form.useForm()

    return (
        <div>
            <Form form={form} onFinish={onSubmit}>
                <Form.Item name="name" rules={[
                    { required: true, message: "Обов'язкове поле" },
                    { min: 2, message: "Мінімум 2 символи" }
                ]}>
                    <Input placeholder="Ваше ім'я" />
                </Form.Item>
                <Form.Item name="email" rules={[
                    { required: true, message: "Обов'язкове поле" },
                    { type: 'email', message: "Невірний формат email" }
                ]}>
                    <Input placeholder="Ваша електронна пошта " />
                </Form.Item>

                <Form.Item name="country" rules={[{ required: true, message: "Оберіть країну" }]}>
                    <Select placeholder="Оберіть країну">
                        <Select.Option value="ua">Україна</Select.Option>
                        <Select.Option value="us">США</Select.Option>
                        <Select.Option value="jp">Японія</Select.Option>
                        <Select.Option value="sw">Швеція</Select.Option>
                        <Select.Option value="pl">Польша</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="age" rules={[
                    { required: true, message: "Обов'язкове поле" },
                    { type: 'number', min: 18, max: 100, message: "Від 18 до 100" }
                ]}>
                    <InputNumber placeholder="Ваш вік" />
                </Form.Item>
                <Button htmlType="submit">Відправити </Button>
            </ Form>

        </div>
    )
}

export default WizardForm