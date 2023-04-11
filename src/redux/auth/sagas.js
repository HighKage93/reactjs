/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import { all, put, takeEvery } from 'redux-saga/effects'
import { doApiCall } from '../../helper'
import AuthServices from '../../services/auth'
import actions from './actions'

const services = new AuthServices()

export function* REGISTER(action) {
    // console.log(action, ' at saga ')
    const response = yield doApiCall(services.registerUser, action?.payload, actions.SET_STATE)
    yield console.log(response, ' response ')
    // if(response?.success) {
    try {
        yield console.log('inside try block')
        yield put({ type: actions.SET_STATE, payload: { registerResponse: 'response' } })
        yield console.log('inside try block 2')
    } catch (e) {
        yield console.log(e, ' error in catch ')
    }    
    // } else {
    // }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.REGISTER, REGISTER)])
}
