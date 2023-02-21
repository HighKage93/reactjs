import { Modal, Form, Input, Button } from "antd"
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

const Auth = () => {
    const [form] = Form.useForm()
    const onFinish = () => {}
    return (
        <div className="container">
            <Form layout="vertical" form={form} onFinish={onFinish} requiredMark>
                <Modal
                    open={true}
                    centered
                    closable={false}
                    mask={false}
                    maskClosable={false}
                    footer={null}
                >
                    <>
                    <Form.Item
                        label="Email Id"
                        name="email"
                        // className="col-lg-2 col-md-3 col-xs-12 col-sm-12 mt-2"
                        // rules={[{ required: true, message: 'Please select system' }]}
                    >
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        // className="col-lg-2 col-md-3 col-xs-12 col-sm-12 mt-2"
                        // rules={[{ required: true, message: 'Please select system' }]}
                    >
                        <Input 
                            type="password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                    >
                        Log In
                    </Button>
                    <Button>
                        Register
                    </Button>
                    </>
                </Modal>
            </Form>
        </div>
    )
}

export default Auth