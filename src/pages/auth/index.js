import { Modal, Form, Input, Button, Select } from "antd"
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/actions";
import vaction from '../../redux/videos/actions'

const Auth = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = () => {}
    const [view, setView] = useState(false);
    const onfinish = () => {
        const formdata = form.getFieldsValue();
        dispatch({
            type: actions.REGISTER,
            payload: formdata,
        })
        dispatch({
            type: vaction.GET_VIDEOS,
            payload: formdata,
        })
    }
    const registerresponse = useSelector((state) => state.auth)
    const videos = useSelector((state) => state.videos?.videosData)
    useEffect(()=>{
        console.log(videos, ' videos ')
    }, [videos])
    useEffect(()=>{
        console.log(registerresponse)
        if(registerresponse) {
            console.log(registerresponse)
        }
    }, [registerresponse])
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
                    <Button
                        onClick={()=>onfinish()}
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