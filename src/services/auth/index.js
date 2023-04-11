import { apiClient } from "../../configureAxios"
import { BACKEND_ROUTES } from "../../common"

class AuthServices {
  constructor() {
    this.client = apiClient
  }

  login = (payload = {}) => {
    return this.client
      .post(BACKEND_ROUTES.LOGIN, payload)
      .then((res) => {
        localStorage.setItem(
          'persist:DGkey',
          `${process.env.REACT_APP_DG_TOKEN}`,
        )
        return res
      })
      .catch((error) => {
        return error
      })
  }

  registerUser = (payload = {}) => {
    // return {message: 'service reached'};
    return this.client
      .get(BACKEND_ROUTES.REGISTER, payload)
      .then((res) => {
        // console.log(res)
        // localStorage.setItem(
        //   'persist:DGkey',
        //   `${process.env.REACT_APP_DG_TOKEN}`,
        // )
        return res
        })
      .catch((error) => {
        return error
      })
  }

}
export default AuthServices