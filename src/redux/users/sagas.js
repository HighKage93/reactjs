import { all, takeEvery } from 'redux-saga/effects'
// import { doApiCall } from 'helper'
// import AocServices from 'services/aoc'
// import { notification } from 'antd'
// import { history } from 'redux/store'
import actions from './actions'

// const services = new AocServices()

export function* GETUSERS(_action) {
//   const response = yield doApiCall(services.setClinic, action.payload, actions.SET_STATE)
//   if (response) {
//     yield history.push(`/clinics/edit/:${action.payload.id}`)
//   }
    yield console.log(' get users ')
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_USERS, GETUSERS)])
}
