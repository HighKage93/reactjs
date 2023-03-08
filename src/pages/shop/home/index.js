import { Button, Card } from "antd"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    Menu
                </div>
                <div className="col-9">
                    <Card
                        title='Product Name'
                        style={{ width: '30%', borderColor: 'black', backgroundColor: 'cyan'}}
                        hoverable
                        cover={<img alt="example" className="ml-2 mr-2 mt-2 mb-2" src="https://i.pinimg.com/originals/e9/91/80/e991804378163190adbd288a473edc85.jpg" />}
                    >
                        <div>
                            <div className="allign-items-end">
                                <h5>500</h5>
                            </div>
                            <div>
                                <p>
                                    description
                                </p>
                                <Link to={'id'} >...see more</Link>
                            </div>
                            <div>
                                <Button>Add To Cart</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home