import { Route, Router } from "react-router-dom"
import Auth from "../pages/auth/index"
import Chat from "../pages/chat/index"
import Home from "../pages/home/index"

const ProtectedRoute = () => {
    return (
        <Router>
    <Route exact path="">
      <Auth />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/chat">
      <Chat />
    </Route>
  </Router>
    )
}

export default ProtectedRoute
