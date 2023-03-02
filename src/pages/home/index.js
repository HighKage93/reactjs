// import { Card } from 'antd'

import { Button, Card, Input } from "antd"

const Home = () => {
    return (
        <div className="container-fluid">
            <div className='row' style={{height: '100%'}}>
                <div className='col-4 alert alert-primary'>
                    <h1>asdf</h1>
                </div>
                <div className='col-4 alert alert-success'>
                    <h1>Chat</h1>
                    <Card
                        title='Name of User'
                    >
                        
                    <div className="row">
                        <div className="col-9">
                            <Input type="text" placeholder="Enter Message" />
                        </div>
                        <div className="col-3 justify-content-center">
                            <Button type="primary" className="ml-4">Send</Button>
                        </div>
                    </div>
                    </Card>
                </div>
                <div className='col-4 alert alert-danger'>
                    <h1>asdf</h1>
                </div>
            </div>
        </div>
    )
}

export default Home