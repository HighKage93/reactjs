import axios from 'axios'

const BASE_URL = 'http://localhost:3001' // process.env.BASEURL

export const apiClient = axios.create({
    baseURL: BASE_URL,
  })
//   apiClient.interceptors.request.use((request) => {
//     // let accessToken = localStorage.getItem('persist:DGkey')
//     // if (!accessToken) {
//     //   const check = JSON.parse(localStorage.getItem('persist:authType'))
//     //   if (check) {
//     //     const { user } = check
//     //     const out = JSON.parse(user)
//     //     const { token } = out
//     //     accessToken = token
//     //   }
//     //   history.push('/auth/login')
//     // }
//     // if (accessToken) {
//       request.headers.Authorization = `Bearer asdf`
//       // 
//       //
//       request.headers.AccessToken = 'asdf'
//     // }
  
//     return request
//   })
  apiClient.interceptors.response.use(
    (res) => {
      return res
    },
    (error) => {
      throw error
    },
  )