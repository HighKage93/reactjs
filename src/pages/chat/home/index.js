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
    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState([]);
    const confirmUser = async () => {
        socket.emit('user-name', userName);
    }
    const onClick = async () => {
        // eslint-disable-next-line no-unused-vars
        const res = await services.getUsers();
        socket.emit('message', message);
        setMessageList([...messList, {check: true, message}])
    }
    let newSocket=null
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        newSocket=io("http://localhost:8001");
        setSocket(newSocket);
        newSocket.emit('new-connection', {users: []});
    }, [setSocket])
    const messageListner = (mes) => {
        console.log(JSON.parse(mes));
        let message = JSON.parse(mes);
        if(message.type==='onlineList') {
            setUserList(message.payload);
        }
        // setMessageList([...messList, {check: false, message: mes}])
    }
    useEffect(() => {
        socket?.on("message", messageListner)
        return () => {
            socket?.off("message", messageListner)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messageListner])
    const selectUser = (user) => {
        console.log(user, ' user ')
    }
    return (
        <div className="container-fluid">
            <div className='row' style={{height: '100%'}}>
                <div className='col-4 alert alert-primary'>
                    <h1>Users List</h1>
                    {userList?.map((element, index) => {
                        return (
                            <div onClick={()=>selectUser(element)} key={index} className='mt-2 border border-primary d-flex flex-wrap align-content-center justify-content-center' style={{height:'50px', borderRadius:'15px'}}>
                                {element}
                            </div>
                        )
                    })}
                </div>
                <div className='col-4 alert alert-success'>
                    <h1>Chat</h1>
                    <Card
                        title='Name of User'
                    >
                        
                    <div className="row">
                        <div className="col-9">
                            <Input className="mb-5" type="text" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)} />
                            <Input type="text" placeholder="Enter Message" onChange={(e)=>setMessage(e.target.value)} />
                        </div>
                        <div className="col-3 justify-content-center">
                        <Button 
                                type="primary" 
                                className="ml-4 mb-5"
                                onClick={()=>confirmUser()}
                            >
                                User Name
                            </Button>
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
                            // console.log(element)
                            return (
                                <p className={element.check ? 'd-flex justify-content-end' : 'd-flex justify content-start'} key={index}>{element?.message}</p>
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