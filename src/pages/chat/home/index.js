// import { Card } from 'antd'

import { Button, Card, Input } from "antd"
import ChatServices from "../../../services/chat"
import io from "socket.io-client"
import { useEffect, useState } from "react"

const Home = () => {
    const services = new ChatServices()
    const [socket, setSocket] = useState();
    const [message, setMessage] = useState("");
    const [messList, setMessageList] = useState([]);
    const onClick = async () => {
        const res = await services.getUsers();
        console.log('button clicked', res);
        console.log('sent message, ', message)
        socket.emit('message', message);
    }
    let newSocket=null
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        newSocket=io("http://localhost:8001");
        setSocket(newSocket);
    }, [setSocket])
    const messageListner = (mes) => {
        console.log(mes, ' socket fetched message ')
        setMessageList([...messList, mes])
    }
    useEffect(() => {
        socket?.on("message", messageListner)
        return () => {
            socket?.off("message", messageListner)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageListner])
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
                            <Input type="text" placeholder="Enter Message" onChange={(e)=>setMessage(e.target.value)} />
                        </div>
                        <div className="col-3 justify-content-center">
                            <Button 
                                type="primary" 
                                className="ml-4"
                                onClick={()=>onClick()}
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                    <div>
                        {messList?.map((element, index)=>{
                            return (
                                <p key={index}>{element}</p>
                            )
                        })}
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