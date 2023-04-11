import { combineReducers } from "redux";
import user from './users/reducer'
import auth from './auth/reducer'
import videos from './videos/reducers'

// eslint-disable-next-line import/no-anonymous-default-export
const rootReducer = () => 
    combineReducers({
        user,
        auth,
        videos,
    })

    export default rootReducer