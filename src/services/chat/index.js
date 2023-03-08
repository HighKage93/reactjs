import { apiClient } from "../../configureAxios"
import { BACKEND_ROUTES } from "../../constants"

class ChatServices {
    constructor() {
      this.client = apiClient
    }
  
    getUsers = (payload = {}) => {
      // const { user } = store.getState().auth
      console.log('at service')
      return this.client
        .get(`${BACKEND_ROUTES.GET_USERS}`, {
          params: payload,
        })
        .then((res) => {
          return res
        })
        .catch((error) => {
          throw error
        })
    }
}

export default ChatServices