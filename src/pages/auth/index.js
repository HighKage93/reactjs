import { Modal, Form, Input, Button, Select } from "antd"
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { useState } from "react";

const Auth = () => {
    const [form] = Form.useForm()
    const onFinish = () => {}
    const [view, setView] = useState(false);
    const onfinish = () => {
        const formdata = form.getFieldsValue();
        console.log(formdata, ' formdata')
    }
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
                    <Button
                        onClick={()=>setView(true)}
                    >
                        Register
                    </Button>
                    </>
                </Modal>
            </Form>
            <Modal
                open={view}
                mask={true}
                maskClosable={true}
                footer={null}
            >
                <div>
                <Form layout="vertical" form={form} onFinish={onFinish} requiredMark>
                    <Form.Item
                        label="Email Id"
                        name="email"
                    >
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input 
                            type="password"
                            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Phone No."
                        name="mobileNo"
                        // className="col-lg-2 col-md-3 col-xs-12 col-sm-12 mt-2"
                        // rules={[{ required: true, message: 'Please select system' }]}
                    >
                        <Input 
                            type="number"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Select Role"
                        name="role"
                    >
                        <Select>
                            <Select.Option value='chat' key='chat'>Chat</Select.Option>
                            <Select.Option value='store' key='store'>Store</Select.Option>
                        </Select>
                    </Form.Item>
                    {form.getFieldsValue().role==='store' ? (
                        <Form.Item
                        label="Address"
                        name="address"
                    >
                        <Input 
                            type="text"
                        />
                    </Form.Item>
                    ) : (null)}
                    
                    <Button
                        onClick={()=>onfinish(true)}
                    >
                        Register
                    </Button>
                    
                </Form>
                </div>
            </Modal>
        </div>
    )
}

export default Auth